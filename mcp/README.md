# 🔌 Servidor MCP Brasil Zero-Config (`mcp_brasil_zero_deps.py`)

Esta pasta contém o **Servidor MCP (Model Context Protocol)** utilizado na **[Trilha 05 — Radar Executivo CNPJ + Banco Central](../tracks/05-radar-mcp-brasil/README.md)** do workshop, além do guia completo sobre o ecossistema público de MCPs brasileiros.

---

## 🚀 Por Que um Servidor "Zero-Config"?

Para garantir que qualquer participante (no evento ou executando o repositório em casa por conta própria) consiga experimentar um **Servidor MCP real em menos de 5 segundos**, incluímos o arquivo [`mcp_brasil_zero_deps.py`](./mcp_brasil_zero_deps.py):

- ✅ **Zero Dependências Externas:** Escrito 100% com a biblioteca padrão do Python 3 (`urllib.request`, `json`, `sys`). Não exige `pip install`, `uv`, `npm` nem Docker.
- ✅ **Zero Cadastro / Zero Chave de API:** Conecta-se diretamente às APIs públicas oficiais da **BrasilAPI (Receita Federal / CNPJ)** e do **Banco Central do Brasil (SGS / PTAX)**.
- ✅ **Resiliência Total (Fallback Inteligente):** Se a rede Wi-Fi do local bloquear chamadas externas ou oscilar, o servidor retorna instantaneamente um snapshot oficial verificado para nunca interromper a sua prática.
- ✅ **Pré-Configurado no Workspace:** Já está registrado automaticamente em [`../.gemini/settings.json`](../.gemini/settings.json).

---

## 🛠️ Ferramentas (Tools) Expostas pelo Servidor MCP

Quando o **Google Antigravity** conversa com `mcp/mcp_brasil_zero_deps.py` via protocolo JSON-RPC (`stdio`), ele ganha acesso a 4 ferramentas em tempo real:

| Tool MCP | O que consulta | Fonte Oficial |
| :--- | :--- | :--- |
| `consultar_cnpj` | Razão Social, Nome Fantasia, CNAE Principal e Secundários, Capital Social, Porte, Município/UF, Situação Cadastral e Quadro Societário (QSA). | Receita Federal via BrasilAPI (`brasilapi.com.br/api/cnpj/v1/`) |
| `consultar_indicadores_bcb` | Taxa Selic Meta (% a.a.), Taxa CDI (% a.a.), Inflação IPCA acumulada 12m (%) e Cotação do Dólar Comercial PTAX (R$). | Banco Central do Brasil (`api.bcb.gov.br` / BrasilAPI Taxas) |
| `consultar_feriados_nacionais` | Calendário oficial de feriados nacionais do ano consultado para planejamento operacional e comercial. | BrasilAPI Feriados (`brasilapi.com.br/api/feriados/v1/`) |
| `gerar_diagnostico_setorial_cnpj` | Cruza automaticamente o CNAE e Porte de um CNPJ com o patamar atual de Selic, IPCA e Dólar para produzir um briefing executivo consolidado. | Combinação Receita Federal + Banco Central |

---

## 🧪 Como Testar Manualmente no Terminal

Você pode testar o servidor diretamente pela linha de comando usando a flag `--test-cli`:

```bash
# Testar com o CNPJ da WEG S.A. + Indicadores do Banco Central:
python3 mcp/mcp_brasil_zero_deps.py --test-cli 84429695000111

# Testar com qualquer outro CNPJ (com ou sem pontuação):
python3 mcp/mcp_brasil_zero_deps.py --test-cli 07.689.002/0001-89
```

---

## 📚 Quer Explorar Outros Servidores MCP Brasileiros?

Consulte o documento [`GUIA_MCP_BRASIL.md`](./GUIA_MCP_BRASIL.md) nesta mesma pasta para ver a comparação detalhada e instruções de instalação do catálogo open-source **[mcp-brasil/mcp-brasil](https://github.com/mcp-brasil/mcp-brasil)** (Transparência, TSE, IBGE, CVM, NFe) e do **[APIBrasil MCP Server](https://mcp.apibrasil.io/)**.
