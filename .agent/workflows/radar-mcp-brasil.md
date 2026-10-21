---
description: Consulta em tempo real os dados oficiais de um CNPJ brasileiro e os indicadores do Banco Central (Selic, CDI, IPCA, Dólar) via Servidor MCP Brasil e constrói um Painel Executivo de Inteligência Macroeconômica personalizado para a empresa.
---

# Workflow: Radar Executivo com MCP Brasil (`/radar-mcp-brasil`)

Quando o usuário acionar este workflow (no Ato 2 do workshop):

1. **Identificar o CNPJ da Empresa Alvo:**
   - Verifique se o usuário informou um CNPJ no prompt.
   - Se ele informou apenas o nome de uma empresa ou não lembrou o CNPJ de cabeça, use um dos CNPJs públicos de referência (ex.: WEG `84429695000111`, Embraer `07689002000189`, Itaú `60872504000123`, Magalu `47960950000121`, RD Saúde `61585865000151`, Petrobras `33000167000101`) ou pergunte rapidamente qual CNPJ ele deseja analisar.

2. **Coletar Dados Reais via Servidor MCP Brasil (`mcp/mcp_brasil_zero_deps.py`):**
   - Caso o servidor MCP `mcp-brasil-bootcamp` já esteja registrado nas ferramentas MCP ativas, invoque as ferramentas `consultar_cnpj` e `indicadores_banco_central`.
   - Caso ainda não esteja registrado como tool ativa na sessão, execute diretamente o servidor MCP deste repositório via terminal para obter os dados oficiais em tempo real:
     ```bash
     python3 mcp/mcp_brasil_zero_deps.py --cnpj <CNPJ_APENAS_NUMEROS>
     python3 mcp/mcp_brasil_zero_deps.py --indicadores
     ```
   - *(Opcional)* Se o usuário pedir para deixar o servidor MCP registrado no cliente, adicione o bloco `mcp-brasil-bootcamp` apontando para `python3 <caminho_absoluto>/mcp/mcp_brasil_zero_deps.py` no arquivo `mcp_config.json`.

3. **Construir o Painel Executivo Personalizado em `tracks/05-radar-mcp-brasil/`:**
   - Com os dados reais retornados da empresa (Razão Social, Nome Fantasia, CNAE Principal, Capital Social, Município/UF, Quadro Societário) e os indicadores reais de hoje do Banco Central (**Selic**, **CDI**, **IPCA** e **Dólar USD/BRL**), crie os arquivos `tracks/05-radar-mcp-brasil/index.html`, `style.css` e `app.js` contendo:
     1. **Cabeçalho Corporativo Real:** Nome da empresa, CNPJ, CNAE Principal (Setor de Atuação), Capital Social e Cidade/UF obtidos na consulta ao vivo.
     2. **Painel Banco Central (Dados de Hoje):** Cards mostrando a Selic atual, CDI, IPCA e Dólar PTAX.
     3. **Simulador de Estresse Macroeconômico Setorial:** Sliders interativos permitindo ao executivo simular variações na Selic ($\pm 3\%$), no Dólar ($\pm \text{R\$ } 1,00$) e na Inflação sobre o setor específico daquele CNAE, calculando impacto em Custo de Capital, Margem Operacional e Recomendações Estratégicas de IA Agêntica para o setor!

4. **Validar no Browser Sub-Agent & Gerar Walkthrough:**
   - Abra `tracks/05-radar-mcp-brasil/index.html` no **Browser Sub-Agent**, interaja com os sliders de simulação macroeconômica e gere um **Walkthrough Artifact** com o diagnóstico executivo da empresa e screenshots do painel funcionando!
