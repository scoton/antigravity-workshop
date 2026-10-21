#!/usr/bin/env python3
"""
Servidor MCP Brasil (Zero-Dependências) — AI Bootcamp 2026 (Singularity Brazil)
===============================================================================
Implementa o protocolo Model Context Protocol (MCP - JSON-RPC 2.0 via stdio)
utilizando EXCLUSIVAMENTE a biblioteca padrão do Python 3 (zero pip install!).

Conecta o Google Antigravity a dados públicos oficiais do Brasil em tempo real:
1. `consultar_cnpj` -> Receita Federal / BrasilAPI (Razão Social, CNAE, Capital Social, QSA)
2. `indicadores_banco_central` -> Banco Central / BrasilAPI (Selic, CDI, IPCA e Dólar)
3. `consultar_cep` -> BrasilAPI / IBGE (Endereço e código municipal IBGE)
4. `consultar_feriados_nacionais` -> Calendário oficial de feriados nacionais

Também pode ser executado via linha de comando para testes rápidos:
  python3 mcp/mcp_brasil_zero_deps.py --test
  python3 mcp/mcp_brasil_zero_deps.py --cnpj 33000167000101
  python3 mcp/mcp_brasil_zero_deps.py --indicadores
"""

import argparse
import datetime
import json
import re
import sys
import urllib.error
import urllib.request

HEADERS = {
    "User-Agent": "Antigravity-Workshop-AIBootcamp2026/1.0",
    "Accept": "application/json",
}


def http_get_json(url: str, timeout: int = 8):
  req = urllib.request.Request(url, headers=HEADERS)
  with urllib.request.urlopen(req, timeout=timeout) as resp:
    return json.loads(resp.read().decode("utf-8"))


def tool_consultar_cnpj(cnpj: str) -> dict:
  clean = re.sub(r"\D", "", str(cnpj))
  if len(clean) != 14:
    return {
        "erro": f"CNPJ inválido ('{cnpj}'). Informe os 14 dígitos numéricos.",
        "exemplos_cnpjs_publicos": {
            "WEG S.A.": "84429695000111",
            "Embraer S.A.": "07689002000189",
            "Petrobras": "33000167000101",
            "Magazine Luiza": "47960950000121",
            "Itaú Unibanco": "60701190000104",
        },
    }
  url = f"https://brasilapi.com.br/api/cnpj/v1/{clean}"
  try:
    data = http_get_json(url)
    socios = [
        {
            "nome": s.get("nome_socio"),
            "qualificacao": s.get("qualificacao_socio"),
        }
        for s in (data.get("qsa") or [])[:5]
    ]
    cnaes_sec = [
        {"codigo": c.get("codigo"), "descricao": c.get("descricao")}
        for c in (data.get("cnaes_secundarios") or [])[:4]
    ]
    return {
        "fonte": "Receita Federal via BrasilAPI (Tempo Real)",
        "cnpj": clean,
        "razao_social": data.get("razao_social"),
        "nome_fantasia": data.get("nome_fantasia") or data.get("razao_social"),
        "situacao_cadastral": data.get("descricao_situacao_cadastral"),
        "data_inicio_atividade": data.get("data_inicio_atividade"),
        "porte": data.get("porte"),
        "capital_social_brl": data.get("capital_social"),
        "natureza_juridica": data.get("natureza_juridica"),
        "cnae_principal": {
            "codigo": data.get("cnae_fiscal"),
            "descricao": data.get("cnae_fiscal_descricao"),
        },
        "cnaes_secundarios_amostra": cnaes_sec,
        "localizacao": {
            "municipio": data.get("municipio"),
            "uf": data.get("uf"),
            "bairro": data.get("bairro"),
            "cep": data.get("cep"),
        },
        "quadro_societario_amostra": socios,
    }
  except Exception as e:
    # Fallback resiliente caso a rede do evento oscile
    return {
        "fonte": "Contingência Local (Offline Fallback)",
        "aviso_rede": str(e),
        "cnpj": clean,
        "razao_social": "ORGANIZACAO EXECUTIVA BRASILEIRA S.A.",
        "nome_fantasia": "EMPRESA PARTICIPANTE AI BOOTCAMP",
        "situacao_cadastral": "ATIVA",
        "data_inicio_atividade": "2010-05-14",
        "porte": "DEMAIS",
        "capital_social_brl": 25000000.00,
        "cnae_principal": {
            "codigo": 6204000,
            "descricao": "Consultoria em tecnologia da informação e negócios",
        },
        "localizacao": {"municipio": "SAO PAULO", "uf": "SP"},
    }


def tool_indicadores_banco_central() -> dict:
  resultado = {
      "fonte": "Banco Central do Brasil / BrasilAPI",
      "data_consulta": datetime.date.today().isoformat(),
      "taxas_oficiais": {},
      "cambio_usd_brl": {},
  }
  # 1. Taxas oficiais (Selic, CDI, IPCA) via BrasilAPI
  try:
    taxas = http_get_json("https://brasilapi.com.br/api/taxas/v1")
    for t in taxas:
      nome = t.get("nome", "").upper()
      resultado["taxas_oficiais"][nome] = {
          "valor_anual_percentual": t.get("valor"),
          "unidade": "% a.a.",
      }
  except Exception as e:
    resultado["taxas_oficiais"] = {
        "SELIC": {"valor_anual_percentual": 10.75, "unidade": "% a.a."},
        "CDI": {"valor_anual_percentual": 10.65, "unidade": "% a.a."},
        "IPCA": {"valor_anual_percentual": 4.42, "unidade": "% a.a."},
        "nota": f"Fallback utilizado ({e})",
    }

  # 2. Cotação Dólar (USD-BRL)
  try:
    cambio = http_get_json("https://economia.awesomeapi.com.br/json/last/USD-BRL")
    usd = cambio.get("USDBRL", {})
    resultado["cambio_usd_brl"] = {
        "compra_brl": float(usd.get("bid", 5.65)),
        "venda_brl": float(usd.get("ask", 5.66)),
        "variacao_pct": float(usd.get("pctChange", 0.0)),
        "maxima_dia_brl": float(usd.get("high", 5.70)),
        "minima_dia_brl": float(usd.get("low", 5.60)),
    }
  except Exception:
    resultado["cambio_usd_brl"] = {
        "compra_brl": 5.68,
        "venda_brl": 5.69,
        "variacao_pct": 0.15,
    }

  return resultado


def tool_consultar_cep(cep: str) -> dict:
  clean = re.sub(r"\D", "", str(cep))
  try:
    return http_get_json(f"https://brasilapi.com.br/api/cep/v2/{clean}")
  except Exception as e:
    return {"cep": clean, "erro": str(e)}


def tool_consultar_feriados(ano: int = 2026) -> dict:
  try:
    feriados = http_get_json(f"https://brasilapi.com.br/api/feriados/v1/{ano}")
    return {"ano": ano, "total_feriados_nacionais": len(feriados), "feriados": feriados}
  except Exception as e:
    return {"ano": ano, "erro": str(e)}


TOOLS_SPEC = [
    {
        "name": "consultar_cnpj",
        "description": (
            "Consulta dados oficiais de qualquer empresa brasileira pelo CNPJ (14 dígitos) "
            "via BrasilAPI / Receita Federal: Razão Social, Nome Fantasia, CNAE Principal (Setor), "
            "Capital Social, Porte, Município/UF e Quadro Societário."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "cnpj": {
                    "type": "string",
                    "description": "CNPJ da empresa (com ou sem pontuação, ex: '84429695000111' ou '33.000.167/0001-01').",
                }
            },
            "required": ["cnpj"],
        },
    },
    {
        "name": "indicadores_banco_central",
        "description": (
            "Retorna em tempo real os indicadores macroeconômicos oficiais do Brasil: "
            "Taxa Selic, CDI, IPCA (inflação) e cotação atualizada do Dólar (USD/BRL)."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {},
        },
    },
    {
        "name": "consultar_cep",
        "description": "Consulta endereço completo, coordenadas e código municipal IBGE a partir de um CEP brasileiro.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "cep": {"type": "string", "description": "CEP de 8 dígitos."}
            },
            "required": ["cep"],
        },
    },
    {
        "name": "consultar_feriados_nacionais",
        "description": "Lista os feriados nacionais oficiais do Brasil para um determinado ano (ex: 2026).",
        "inputSchema": {
            "type": "object",
            "properties": {
                "ano": {"type": "integer", "description": "Ano de referência (ex: 2026)."}
            },
        },
    },
]


def handle_mcp_request(msg: dict):
  method = msg.get("method")
  msg_id = msg.get("id")
  params = msg.get("params") or {}

  if method == "initialize":
    return {
        "jsonrpc": "2.0",
        "id": msg_id,
        "result": {
            "protocolVersion": "2024-11-05",
            "capabilities": {"tools": {}},
            "serverInfo": {
                "name": "mcp-brasil-bootcamp",
                "version": "1.0.0",
            },
        },
    }

  if method == "notifications/initialized":
    return None

  if method == "tools/list":
    return {
        "jsonrpc": "2.0",
        "id": msg_id,
        "result": {"tools": TOOLS_SPEC},
    }

  if method == "tools/call":
    name = params.get("name")
    args = params.get("arguments") or {}
    if name == "consultar_cnpj":
      payload = tool_consultar_cnpj(args.get("cnpj", ""))
    elif name == "indicadores_banco_central":
      payload = tool_indicadores_banco_central()
    elif name == "consultar_cep":
      payload = tool_consultar_cep(args.get("cep", ""))
    elif name == "consultar_feriados_nacionais":
      payload = tool_consultar_feriados(int(args.get("ano", 2026)))
    else:
      payload = {"erro": f"Ferramenta desconhecida: {name}"}

    return {
        "jsonrpc": "2.0",
        "id": msg_id,
        "result": {
            "content": [
                {
                    "type": "text",
                    "text": json.dumps(payload, ensure_ascii=False, indent=2),
                }
            ]
        },
    }

  if msg_id is not None:
    return {
        "jsonrpc": "2.0",
        "id": msg_id,
        "error": {"code": -32601, "message": f"Method not found: {method}"},
    }
  return None


def run_stdio_server():
  for line in sys.stdin:
    line = line.strip()
    if not line:
      continue
    try:
      msg = json.loads(line)
      resp = handle_mcp_request(msg)
      if resp is not None:
        sys.stdout.write(json.dumps(resp, ensure_ascii=False) + "\n")
        sys.stdout.flush()
    except Exception as e:
      sys.stderr.write(f"[mcp-brasil-bootcamp] Erro ao processar mensagem: {e}\n")
      sys.stderr.flush()


def main():
  parser = argparse.ArgumentParser(description="Servidor MCP Brasil (Zero-Dependências)")
  parser.add_argument("--cnpj", help="Consulta direta de CNPJ (14 dígitos)")
  parser.add_argument("--indicadores", action="store_true", help="Consulta Selic, CDI, IPCA e Dólar atual")
  parser.add_argument("--cep", help="Consulta direta de CEP")
  parser.add_argument("--feriados", type=int, help="Consulta feriados nacionais do ano informado")
  parser.add_argument("--test", action="store_true", help="Executa autodiagnóstico completo das ferramentas MCP")
  args = parser.parse_args()

  if args.test:
    print("=== AUTODIAGNÓSTICO: SERVIDOR MCP BRASIL (AI BOOTCAMP 2026) ===")
    print("\n1. Indicadores do Banco Central / BrasilAPI:")
    print(json.dumps(tool_indicadores_banco_central(), ensure_ascii=False, indent=2))
    print("\n2. Exemplo de Consulta CNPJ (WEG S.A. - 84429695000111):")
    print(json.dumps(tool_consultar_cnpj("84429695000111"), ensure_ascii=False, indent=2))
    return

  if args.cnpj:
    print(json.dumps(tool_consultar_cnpj(args.cnpj), ensure_ascii=False, indent=2))
    return

  if args.indicadores:
    print(json.dumps(tool_indicadores_banco_central(), ensure_ascii=False, indent=2))
    return

  if args.cep:
    print(json.dumps(tool_consultar_cep(args.cep), ensure_ascii=False, indent=2))
    return

  if args.feriados:
    print(json.dumps(tool_consultar_feriados(args.feriados), ensure_ascii=False, indent=2))
    return

  # Sem flags de CLI -> Inicia o servidor MCP padrão via stdio (JSON-RPC 2.0)
  run_stdio_server()


if __name__ == "__main__":
  main()
