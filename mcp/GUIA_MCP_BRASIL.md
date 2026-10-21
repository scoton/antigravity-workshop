# 🇧🇷 Guia Prático: Servidores MCP Brasil no Google Antigravity

O **Model Context Protocol (MCP)** é o padrão aberto que conecta os agentes do **Google Antigravity** a bancos de dados, sistemas corporativos e APIs governamentais em tempo real.

Para este workshop do **AI Bootcamp 2026 (Singularity Brazil)**, você tem **3 opções** para conectar dados reais do Brasil ao seu agente (da mais rápida e zero-configuração até as opções avançadas para usar na sua empresa):

---

## ⚡ Opção 1: Servidor MCP Brasil Embutido no Repositório *(Recomendada para os 33 min do Workshop)*

Este repositório já inclui um servidor MCP real e **Zero-Dependências** em [`mcp/mcp_brasil_zero_deps.py`](./mcp_brasil_zero_deps.py) — ele usa apenas o Python padrão, **não exige cadastro nem chave de API** e conecta seu agente diretamente aos dados abertos da **Receita Federal (CNPJ via BrasilAPI)** e do **Banco Central (Selic, CDI, IPCA e Dólar)**.

### Como usar no Ato 2 (Sem precisar configurar nada manualmente):
Basta digitar `/radar-mcp-brasil` no chat do Antigravity! O próprio agente vai usar `mcp/mcp_brasil_zero_deps.py` para consultar o CNPJ da sua empresa e as taxas reais de hoje do Banco Central.

### Se quiser registrá-lo no `mcp_config.json` do seu Antigravity:
Peça ao próprio Agente do Antigravity:
> *"Registre o servidor MCP `@mcp/mcp_brasil_zero_deps.py` nas configurações de MCP do meu ambiente."*

Ou adicione no seu `mcp_config.json`:
```json
{
  "mcpServers": {
    "mcp-brasil-bootcamp": {
      "command": "python3",
      "args": ["/CAMINHO/PARA/antigravity-workshop/mcp/mcp_brasil_zero_deps.py"]
    }
  }
}
```

---

## 🏛️ Opção 2: Projeto Open-Source `mcp-brasil/mcp-brasil` (Ecossistema Completo de Dados Públicos)

* **Repositório Oficial:** [https://github.com/mcp-brasil/mcp-brasil](https://github.com/mcp-brasil/mcp-brasil)
* **O que oferece:** Dezenas de ferramentas conectadas ao **Banco Central (SGS e Boletim Focus)**, **IBGE**, **BrasilAPI**, **Câmara dos Deputados**, **Senado Federal**, **TSE**, **DataSUS** e **Portal da Transparência**.
* **Como configurar no `mcp_config.json` (requer `uv` / `uvx` instalado):**
  ```json
  {
    "mcpServers": {
      "mcp-brasil": {
        "command": "uvx",
        "args": [
          "--from",
          "mcp-brasil",
          "python",
          "-m",
          "mcp_brasil.server"
        ]
      }
    }
  }
  ```

---

## 🌐 Opção 3: Servidor Cloud `mcp.apibrasil.io` (Gateway Comercial +100 APIs)

* **Site Oficial:** [https://mcp.apibrasil.io/](https://mcp.apibrasil.io/)
* **O que oferece:** Mais de 100 integrações comerciais (consulta avançada de CPF/CNPJ, veículos, Tabela FIPE, envio de WhatsApp, SMS, geolocalização).
* **Como usar:** Crie uma conta gratuita em `apibrasil.io` para obter seu `APIBRASIL_BEARER_TOKEN` e conecte ao endpoint `https://mcp.apibrasil.cloud/mcp`.

---

## 🏢CNPJs Públicos de Grandes Empresas Brasileiras (Para Testar Caso Não Lembre o Seu de Cabeça)

Se quiser testar o **Ato 2** com o CNPJ de uma grande empresa de capital aberto:

| Empresa | Setor | CNPJ para copiar |
| :--- | :--- | :--- |
| **WEG S.A.** | Indústria / Equipamentos Elétricos | `84.429.695/0001-11` |
| **Embraer S.A.** | Aeroespacial & Defesa | `07.689.002/0001-89` |
| **Itaú Unibanco Holding** | Finanças & Bancos | `60.872.504/0001-23` |
| **Magazine Luiza S.A.** | Varejo & E-commerce | `47.960.950/0001-21` |
| **Raia Drogasil (RD Saúde)** | Saúde & Farmacêutico | `61.585.865/0001-51` |
| **Petrobras** | Energia & Óleo e Gás | `33.000.167/0001-01` |
