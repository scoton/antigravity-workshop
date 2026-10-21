# 📡 Trilha 05 (Ato 2 — MCP Brasil em Tempo Real): Radar Executivo CNPJ + Banco Central

Nesta pasta, durante o **Ato 2** (enquanto seu primeiro agente constrói o *Flappy Executive Hero* na outra conversa do *Agent Manager*), você vai comandar um segundo agente conectado ao **Servidor MCP Brasil (`@mcp/mcp_brasil_zero_deps.py`)**!

## O que o Agente vai fazer aqui:

1. Consultar **em tempo real** os dados oficiais do **CNPJ da sua empresa** (Razão Social, CNAE Principal, atividades secundárias, Capital Social, Porte e UF) na Receita Federal via BrasilAPI;
2. Consultar **em tempo real** os indicadores oficiais de hoje no **Banco Central do Brasil** (**Taxa Selic, CDI, inflação IPCA e cotação do Dólar PTAX**);
3. Construir nesta pasta (`index.html`, `style.css`, `app.js`) um **Painel Executivo de Inteligência Macroeconômica e Setorial** personalizado para a sua empresa, simulando como a Selic, o IPCA e o Câmbio de hoje impactam o seu CNAE/Setor nos próximos 12 meses — e validar tudo no **Browser Sub-Agent**!
