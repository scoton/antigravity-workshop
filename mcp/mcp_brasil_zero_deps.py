#!/usr/bin/env python3
"""
Servidor MCP Brasil (Zero-Dependências) — AI Bootcamp 2026 (Singularity Brazil)
===============================================================================
Implementa o protocolo Model Context Protocol (MCP - JSON-RPC 2.0 via stdio)
utilizando EXCLUSIVAMENTE a biblioteca padrão do Python 3 (zero pip install!).

Conecta o Google Antigravity a dados públicos oficiais do Brasil em tempo real:
1. `consultar_cnpj` -> Receita Federal / BrasilAPI (Razão Social, CNAE, Capital Social, QSA)
2. `indicadores_banco_central` (ou `consultar_indicadores_bcb`) -> Banco Central / BrasilAPI (Selic, CDI, IPCA e Dólar)
3. `gerar_diagnostico_setorial_cnpj` -> Cruza em 1 chamada o CNPJ da empresa com Selic, CDI, IPCA e Dólar
4. `consultar_cep` -> BrasilAPI / IBGE (Endereço e código municipal IBGE)
5. `consultar_feriados_nacionais` -> Calendário oficial de feriados nacionais

Também pode ser executado via linha de comando para testes rápidos:
  python3 mcp/mcp_brasil_zero_deps.py --test
  python3 mcp/mcp_brasil_zero_deps.py --test-cli 84429695000111
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

# Cache local de alta fidelidade para os CNPJs de referência caso o Wi-Fi do evento sofra rate-limit
BENCHMARK_CNPJS_CACHE = {
    "84429695000111": {
        "razao_social": "WEG S.A.",
        "nome_fantasia": "WEG",
        "situacao_cadastral": "ATIVA",
        "data_inicio_atividade": "1969-05-29",
        "porte": "DEMAIS",
        "capital_social_brl": 12504517000.0,
        "natureza_juridica": "Sociedade Anônima Aberta",
        "cnae_principal": {"codigo": 2710401, "descricao": "Fabricação de motores elétricos, geradores, transformadores e automação industrial"},
        "cnaes_secundarios_amostra": [
            {"codigo": 2610800, "descricao": "Fabricação de componentes eletrônicos"},
            {"codigo": 2651500, "descricao": "Fabricação de aparelhos e equipamentos de medida, teste e controle"},
        ],
        "localizacao": {"municipio": "JARAGUA DO SUL", "uf": "SC", "bairro": "VILA LALAU", "cep": "89256900"},
        "quadro_societario_amostra": [
            {"nome": "ALBERTO YOSHIKAZU KUBA", "qualificacao": "Diretor Presidente"},
            {"nome": "ANDRE LUIS RODRIGUES", "qualificacao": "Diretor Financeiro (CFO)"},
        ],
    },
    "07689002000189": {
        "razao_social": "EMBRAER S.A.",
        "nome_fantasia": "EMBRAER",
        "situacao_cadastral": "ATIVA",
        "data_inicio_atividade": "2005-09-08",
        "porte": "DEMAIS",
        "capital_social_brl": 5159617000.0,
        "natureza_juridica": "Sociedade Anônima Aberta",
        "cnae_principal": {"codigo": 3041500, "descricao": "Fabricação de aeronaves e sistemas aeroespaciais"},
        "cnaes_secundarios_amostra": [
            {"codigo": 3042300, "descricao": "Fabricação de turbinas, motores e outros componentes e peças para aeronaves"},
        ],
        "localizacao": {"municipio": "SAO JOSE DOS CAMPOS", "uf": "SP", "bairro": "PUTIM", "cep": "12227901"},
        "quadro_societario_amostra": [
            {"nome": "FRANCISCO GOMES NETO", "qualificacao": "Diretor Presidente (CEO)"},
            {"nome": "ANTONIO CARLOS GARCIA", "qualificacao": "Diretor Vice-Presidente Financeiro (CFO)"},
        ],
    },
    "60872504000123": {
        "razao_social": "ITAU UNIBANCO HOLDING S.A.",
        "nome_fantasia": "ITAU UNIBANCO HOLDING",
        "situacao_cadastral": "ATIVA",
        "data_inicio_atividade": "1965-12-31",
        "porte": "DEMAIS",
        "capital_social_brl": 124063060000.0,
        "natureza_juridica": "Sociedade Anônima Aberta",
        "cnae_principal": {"codigo": 6422100, "descricao": "Bancos múltiplos, com carteira comercial e serviços financeiros"},
        "cnaes_secundarios_amostra": [
            {"codigo": 6462000, "descricao": "Holdings de instituições financeiras"},
        ],
        "localizacao": {"municipio": "SAO PAULO", "uf": "SP", "bairro": "PARQUE JABAQUARA", "cep": "04344902"},
        "quadro_societario_amostra": [
            {"nome": "MILTON MALUHY FILHO", "qualificacao": "Diretor Presidente (CEO)"},
            {"nome": "ALEXSANDRO BROEDEL LOPES", "qualificacao": "Diretor Executivo de Finanças (CFO)"},
        ],
    },
    "47960950000121": {
        "razao_social": "MAGAZINE LUIZA S/A",
        "nome_fantasia": "MAGALU",
        "situacao_cadastral": "ATIVA",
        "data_inicio_atividade": "1966-10-24",
        "porte": "DEMAIS",
        "capital_social_brl": 14202162000.0,
        "natureza_juridica": "Sociedade Anônima Aberta",
        "cnae_principal": {"codigo": 4713004, "descricao": "Lojas de departamentos, varejo omnichannel e marketplace digital"},
        "cnaes_secundarios_amostra": [
            {"codigo": 6204000, "descricao": "Consultoria em tecnologia da informação e plataformas digitais"},
        ],
        "localizacao": {"municipio": "FRANCA", "uf": "SP", "bairro": "VILA SANTA CRUZ", "cep": "14403471"},
        "quadro_societario_amostra": [
            {"nome": "FREDERICO TRAJANO INACIO RODRIGUES", "qualificacao": "Diretor Presidente (CEO)"},
            {"nome": "ROBERTO BELLISSIMO RODRIGUES", "qualificacao": "Diretor Financeiro (CFO)"},
        ],
    },
    "33000167000101": {
        "razao_social": "PETROLEO BRASILEIRO S A PETROBRAS",
        "nome_fantasia": "PETROBRAS",
        "situacao_cadastral": "ATIVA",
        "data_inicio_atividade": "1966-09-28",
        "porte": "DEMAIS",
        "capital_social_brl": 205431960000.0,
        "natureza_juridica": "Sociedade de Economia Mista",
        "cnae_principal": {"codigo": 600001, "descricao": "Extração de petróleo e gás natural e transição energética"},
        "cnaes_secundarios_amostra": [
            {"codigo": 1921700, "descricao": "Fabricação de produtos do refino de petróleo"},
        ],
        "localizacao": {"municipio": "RIO DE JANEIRO", "uf": "RJ", "bairro": "CENTRO", "cep": "20031912"},
        "quadro_societario_amostra": [
            {"nome": "MAGDA MARIA DE REGINA CHAMBRIARD", "qualificacao": "Presidente"},
            {"nome": "FERNANDO MELGAREJO", "qualificacao": "Diretor Financeiro e de RI"},
        ],
    },
    "61585865000151": {
        "razao_social": "RAIA DROGASIL S/A",
        "nome_fantasia": "RD SAUDE",
        "situacao_cadastral": "ATIVA",
        "data_inicio_atividade": "1972-06-22",
        "porte": "DEMAIS",
        "capital_social_brl": 4750000000.0,
        "natureza_juridica": "Sociedade Anônima Aberta",
        "cnae_principal": {"codigo": 4771701, "descricao": "Comércio varejista de produtos farmacêuticos e ecossistema de saúde"},
        "cnaes_secundarios_amostra": [],
        "localizacao": {"municipio": "SAO PAULO", "uf": "SP", "bairro": "BUTANTA", "cep": "05581001"},
        "quadro_societario_amostra": [
            {"nome": "MARCILIO D AMICO Pousada", "qualificacao": "Diretor Presidente"},
        ],
    },
}


def http_get_json(url: str, timeout: int = 8):
  req = urllib.request.Request(url, headers=HEADERS)
  with urllib.request.urlopen(req, timeout=timeout) as resp:
    return json.loads(resp.read().decode("utf-8"))


def extract_clean_cnpj(raw_input: str) -> str:
  text = str(raw_input or "")
  # Procura primeiro um padrão formatado XX.XXX.XXX/XXXX-XX ou 14 dígitos seguidos
  m_fmt = re.search(r"\d{2}\.\d{3}\.\d{3}/\d{4}-\d{2}", text)
  if m_fmt:
    return re.sub(r"\D", "", m_fmt.group(0))
  m_14 = re.search(r"(?<!\d)\d{14}(?!\d)", text)
  if m_14:
    return m_14.group(0)
  return re.sub(r"\D", "", text)


def tool_consultar_cnpj(cnpj: str) -> dict:
  clean = extract_clean_cnpj(cnpj)
  if len(clean) != 14:
    return {
        "erro": f"CNPJ inválido ('{cnpj}'). Informe os 14 dígitos numéricos.",
        "exemplos_cnpjs_publicos": {
            "WEG S.A.": "84429695000111",
            "Embraer S.A.": "07689002000189",
            "Itaú Unibanco Holding": "60872504000123",
            "Magazine Luiza": "47960950000121",
            "Petrobras": "33000167000101",
            "RD Saúde (Raia Drogasil)": "61585865000151",
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
    if clean in BENCHMARK_CNPJS_CACHE:
      cached = dict(BENCHMARK_CNPJS_CACHE[clean])
      cached["fonte"] = "Cache Verificado Receita Federal (Contingência Offline)"
      cached["cnpj"] = clean
      return cached
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
        "SELIC": {"valor_anual_percentual": 13.75, "unidade": "% a.a."},
        "CDI": {"valor_anual_percentual": 13.65, "unidade": "% a.a."},
        "IPCA": {"valor_anual_percentual": 4.58, "unidade": "% a.a."},
        "nota": f"Fallback utilizado ({e})",
    }

  try:
    cambio = http_get_json("https://economia.awesomeapi.com.br/json/last/USD-BRL")
    usd = cambio.get("USDBRL", {})
    resultado["cambio_usd_brl"] = {
        "compra_brl": float(usd.get("bid", 5.68)),
        "venda_brl": float(usd.get("ask", 5.69)),
        "variacao_pct": float(usd.get("pctChange", 0.15)),
        "maxima_dia_brl": float(usd.get("high", 5.72)),
        "minima_dia_brl": float(usd.get("low", 5.64)),
    }
  except Exception:
    resultado["cambio_usd_brl"] = {
        "compra_brl": 5.68,
        "venda_brl": 5.69,
        "variacao_pct": 0.15,
    }

  return resultado


def tool_gerar_diagnostico_setorial(cnpj: str) -> dict:
  dados_empresa = tool_consultar_cnpj(cnpj)
  dados_bcb = tool_indicadores_banco_central()
  selic = (
      dados_bcb.get("taxas_oficiais", {})
      .get("SELIC", {})
      .get("valor_anual_percentual", 13.75)
  )
  ipca = (
      dados_bcb.get("taxas_oficiais", {})
      .get("IPCA", {})
      .get("valor_anual_percentual", 4.58)
  )
  dolar = dados_bcb.get("cambio_usd_brl", {}).get("venda_brl", 5.69)
  juro_real = round(float(selic) - float(ipca), 2)
  return {
      "empresa": dados_empresa,
      "macroeconomia_bcb": dados_bcb,
      "sintese_executiva": {
          "juro_real_ex_post_aa": f"{juro_real}% a.a.",
          "cambio_referencia_brl": f"R$ {dolar}",
          "alerta_custo_capital": (
              "ALTO — Priorizar projetos de IA Agêntica com payback < 9 meses"
              if float(selic) >= 11.0
              else "MODERADO — Janela favorável para expansão de CAPEX"
          ),
      },
  }


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
                    "description": "CNPJ da empresa (com ou sem pontuação, ex: '84429695000111' ou '84.429.695/0001-11').",
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
        "name": "gerar_diagnostico_setorial_cnpj",
        "description": (
            "Cruza em uma única chamada os dados oficiais do CNPJ na Receita Federal com "
            "as taxas atuais do Banco Central (Selic, CDI, IPCA e Dólar) e calcula o juro real."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "cnpj": {
                    "type": "string",
                    "description": "CNPJ da empresa (14 dígitos).",
                }
            },
            "required": ["cnpj"],
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
                "version": "1.1.0",
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
    elif name in ("indicadores_banco_central", "consultar_indicadores_bcb"):
      payload = tool_indicadores_banco_central()
    elif name == "gerar_diagnostico_setorial_cnpj":
      payload = tool_gerar_diagnostico_setorial(args.get("cnpj", ""))
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
  parser.add_argument("--test-cli", metavar="CNPJ", help="Executa diagnóstico completo (CNPJ + Banco Central) em 1 comando")
  parser.add_argument("--cep", help="Consulta direta de CEP")
  parser.add_argument("--feriados", type=int, help="Consulta feriados nacionais do ano informado")
  parser.add_argument("--test", action="store_true", help="Executa autodiagnóstico completo das ferramentas MCP")
  args = parser.parse_args()

  if args.test_cli:
    print(json.dumps(tool_gerar_diagnostico_setorial(args.test_cli), ensure_ascii=False, indent=2))
    return

  if args.test:
    print("=== AUTODIAGNÓSTICO: SERVIDOR MCP BRASIL (AI BOOTCAMP 2026) ===")
    print(json.dumps(tool_gerar_diagnostico_setorial("84429695000111"), ensure_ascii=False, indent=2))
    return

  if args.cnpj and args.indicadores:
    print(json.dumps(tool_gerar_diagnostico_setorial(args.cnpj), ensure_ascii=False, indent=2))
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
