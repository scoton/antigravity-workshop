# 📡 Trilha 05 (Ato 2 — MCP Brasil em Tempo Real): Radar Executivo CNPJ + Banco Central

Nesta pasta, durante o **Ato 2** (enquanto seu primeiro agente constrói o *Flappy Executive Hero* na outra conversa do *Agent Manager*), você vai comandar um segundo agente conectado ao **Servidor MCP Brasil (`@mcp/mcp_brasil_zero_deps.py`)**!

## O que o Agente vai fazer aqui:

1. Consultar **em tempo real** os dados oficiais do **CNPJ da sua empresa** (Razão Social, CNAE Principal, atividades secundárias, Capital Social, Porte e UF) na Receita Federal via BrasilAPI;
2. Consultar **em tempo real** os indicadores oficiais de hoje no **Banco Central do Brasil** (**Taxa Selic, CDI, inflação IPCA e cotação do Dólar PTAX**);
3. Construir nesta pasta (`index.html`, `style.css`, `app.js`) um **Painel Executivo de Inteligência Macroeconômica e Setorial** personalizado para a sua empresa, simulando como a Selic, o IPCA e o Câmbio de hoje impactam o seu CNAE/Setor nos próximos 12 meses — e validar tudo no **Browser Sub-Agent**!

---

## 🧠 Conceito Antigravity: Como a Skill `radar-mcp-brasil` funciona?

Esta trilha é governada pela **Skill** definida em `.agent/skills/radar-mcp-brasil/SKILL.md`.
No Google Antigravity, as **Skills** possuem **Descoberta Semântica Sob Demanda (*Progressive Disclosure*)**:
- Você pode invocá-la explicitamente digitando **`/radar-mcp-brasil`** no chat;
- **OU** apenas pedir em linguagem natural (*"Consulte o CNPJ da minha empresa e os indicadores do Banco Central"*): o Antigravity lê o catálogo de descrições das Skills da pasta, descobre sozinho que a Skill `radar-mcp-brasil` resolve esse problema, carrega suas instruções sob demanda e executa o protocolo!

---

## ⏰ Próximo Nível (1 Minuto): Transforme em uma Automação Agendada (`/automation`)

Depois que o seu **Radar Executivo CNPJ + Banco Central** estiver rodando na tela, imagine ter esse briefing atualizado sozinho toda segunda-feira às 08h00 antes da sua reunião de diretoria.

No próprio chat desta conversa, experimente digitar:

```text
/automation Configure uma automação semanal toda segunda-feira às 08h00 para consultar os indicadores atualizados do Banco Central via mcp/mcp_brasil_zero_deps.py e atualizar o resumo executivo da minha empresa em tracks/05-radar-mcp-brasil/.
```
