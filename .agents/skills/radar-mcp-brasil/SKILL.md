---
name: radar-mcp-brasil
description: >-
  Consulta em tempo real os dados oficiais de um CNPJ brasileiro na Receita Federal
  e os indicadores do Banco Central (Selic, CDI, IPCA e Dólar PTAX) via Servidor
  MCP Brasil (mcp/mcp_brasil_zero_deps.py) e constrói um Painel Executivo de
  Inteligência Macroeconômica e Setorial em tracks/05-radar-mcp-brasil/. Use
  sempre que o usuário pedir para consultar um CNPJ, indicadores do Banco
  Central, usar o MCP Brasil ou acionar /radar-mcp-brasil.
---

# Skill: Radar Executivo com MCP Brasil (`/radar-mcp-brasil`)

Quando o usuário acionar esta skill (via `/radar-mcp-brasil` ou pedindo para consultar um CNPJ / indicadores do Banco Central no Ato 2 do workshop):

1. **Identificar o CNPJ da Empresa Alvo:**
   - Verifique se o usuário informou um CNPJ no prompt.
   - Se ele informou apenas o nome de uma empresa ou não lembrou o CNPJ de cabeça, use um dos CNPJs públicos de referência (ex.: WEG `84429695000111`, Embraer `07689002000189`, Itaú `60872504000123`, Magalu `47960950000121`, RD Saúde `61585865000151`, Petrobras `33000167000101`) ou pergunte rapidamente qual CNPJ ele deseja analisar.

2. **Coletar Dados Reais via Servidor MCP Brasil (`mcp/mcp_brasil_zero_deps.py`):**
   - Caso o servidor MCP `mcp-brasil-bootcamp` já esteja registrado nas ferramentas MCP ativas (via `.gemini/settings.json`), invoque as ferramentas `consultar_cnpj` e `indicadores_banco_central` (ou `gerar_diagnostico_setorial_cnpj`).
   - Caso ainda não esteja registrado como tool ativa na sessão, execute diretamente o servidor MCP deste repositório via terminal para obter os dados oficiais em tempo real (com fallback automático caso a rede esteja instável):
     ```bash
     python3 mcp/mcp_brasil_zero_deps.py --test-cli <CNPJ_OU_NOME>
     ```

3. **Construir o Painel Executivo Personalizado em `tracks/05-radar-mcp-brasil/`:**
   - Com os dados reais retornados da empresa (Razão Social, Nome Fantasia, CNAE Principal, Capital Social, Município/UF, Quadro Societário) e os indicadores reais de hoje do Banco Central (**Selic**, **CDI**, **IPCA** e **Dólar USD/BRL**), sobrescreva o arquivo de Blueprint `tracks/05-radar-mcp-brasil/index.html` e crie `style.css` e `app.js` contendo:
     1. **Cabeçalho Corporativo Real:** Nome da empresa, CNPJ, CNAE Principal (Setor de Atuação), Capital Social e Cidade/UF obtidos na consulta ao vivo.
     2. **Painel Banco Central (Dados de Hoje):** Cards mostrando a Selic atual, CDI, IPCA e Dólar PTAX.
     3. **Simulador de Estresse Macroeconômico Setorial:** Sliders interativos permitindo ao executivo simular variações na Selic (+/- 3%), no Dólar (+/- R$ 1,00) e na Inflação sobre o setor específico daquele CNAE, calculando impacto em Custo de Capital, Margem Operacional e Recomendações Estratégicas de IA Agêntica para o setor!

4. **Validação Rápida no Browser Sub-Agent & Walkthrough Enxuto:**
   - Abra `tracks/05-radar-mcp-brasil/index.html` no **Browser Sub-Agent** em uma **única visita rápida**: verifique apenas que o painel carregou sem erros no console, capture **1 screenshot** e gere imediatamente o **Walkthrough Artifact** com o diagnóstico executivo da empresa (evite gastar tempo arrastando múltiplos sliders no navegador para manter a execução rápida e econômica em tokens!).
   - Ao final, mencione ao participante que ele pode digitar **`/automation`** caso queira agendar esse Radar para rodar automaticamente toda segunda-feira às 08h00!
