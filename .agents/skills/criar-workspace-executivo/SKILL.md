---
name: criar-workspace-executivo
description: Cria do zero um Workspace Executivo ("Sala de Guerra Digital" / War Room) completo e pronto para a segunda-feira dentro de workspaces-executivos/<nome>/, estruturado nas 4 camadas do Google Antigravity: Rules (AGENTS.md e .agents/rules/), Skills sob demanda com Progressive Disclosure (.agents/skills/), Servidor MCP (.gemini/settings.json) e Guia/Template de Automação Agendada (/automation com sidecar.json e Test Run de governança), além de um Cockpit HTML interativo.
---

# Skill: Construtor de Workspace Executivo ("Sala de Guerra de Segunda-Feira") (`/criar-workspace-executivo`)

Use esta skill sempre que o participante pedir para **criar um Workspace Executivo próprio**, estruturar uma **Sala de Guerra Digital (War Room)** para uma iniciativa real da empresa dele (ex.: `comite-estrategico-2027`, `planejamento-orcamentario`, `war-room-m-and-a`, `monitoramento-regulatorio`) ou empacotar **Rules + Skills + MCP + Automações** para levar para o trabalho na segunda-feira.

## Passo a Passo de Execução

1. **Identificação da Iniciativa e do Setor (Zero Bloqueio):**
   - Verifique o nome do Workspace, a empresa/CNPJ e o objetivo estratégico informados no prompt do participante.
   - **Regra de Zero Fricção:** Caso o participante tenha mantido o exemplo padrão do prompt (ex.: `comite-estrategico-2027` / `WEG S.A. — Indústria & Exportação`), **não pare para fazer perguntas**: execute imediatamente usando esses parâmetros padrão!

2. **Criação da Estrutura de 4 Camadas em `workspaces-executivos/<slug-da-iniciativa>/`:**
   Crie a pasta `workspaces-executivos/<slug-da-iniciativa>/` (ex.: `workspaces-executivos/comite-estrategico-2027/`) contendo:

   - **Camada 1 — Governança Sempre Ativa (`AGENTS.md` e `.agents/rules/governanca-setorial.md` + `.agent/rules/governanca-setorial.md`):**
     - `AGENTS.md`: Define a missão da Sala de Guerra, os KPIs prioritários da diretoria, as regras de compliance/LGPD (proibição de expor dados pessoais sensíveis, exigência de citar fontes oficiais do Banco Central/Receita Federal) e a obrigação de validar entregas visuais no *Browser Sub-Agent*.
     - `.agents/rules/governanca-setorial.md` (com espelho em `.agent/rules/governanca-setorial.md`): Rule com frontmatter YAML (`trigger: always_on`) contendo os *guardrails* executivos específicos do setor da empresa.

   - **Camada 2 — Memória Organizacional Sob Demanda (`.agents/skills/ritual-semanal-diretoria/SKILL.md` + `.agent/skills/ritual-semanal-diretoria/SKILL.md`):**
     - Crie uma Skill completa com cabeçalho YAML (`name: ritual-semanal-diretoria` e `description:` clara para *Progressive Disclosure*).
     - O protocolo da Skill deve instruir o agente a: (1) consultar Selic, CDI, IPCA e Dólar PTAX via `mcp_brasil_zero_deps.py`, (2) cruzar com os KPIs da iniciativa e (3) gerar uma **Pauta Executiva de Segunda-Feira** com 3 decisões recomendadas para o C-Level.

   - **Camada 3 — Conexão com Dados Reais (`.gemini/settings.json`):**
     - Configure o arquivo `.gemini/settings.json` apontando para o servidor MCP Brasil (`python3 ../../mcp/mcp_brasil_zero_deps.py`) para que, quando o executivo abrir essa pasta como um Workspace no Antigravity, o servidor MCP já esteja conectado.

   - **Camada 4 — Automação Agendada com Governança Auditada (`AUTOMACAO_SEGUNDA_FEIRA.md`):**
     - Crie um guia prático mostrando:
       1. O comando exato `/automation` pronto para colar no chat;
       2. A explicação executiva do **Test Run de Governança (*Zero Cheque em Branco*)**: por que o Antigravity executa um teste assistido antes de ativar o robô para gravar permissões estritas (`workspace_uris` e `access_grants` sem *wildcards* `command(*)`);
       3. O exemplo completo do arquivo `~/.gemini/config/sidecars/<id>/sidecar.json` com `"builtin": "schedule"`, `"args": ["CRON_TZ=America/Sao_Paulo 0 8 * * 1", "agentapi", "new-conversation", "--", "<prompt autossuficiente>"]` e como gerenciar o robô no **[Open Automations Dashboard](sidecar://dashboard)**.

3. **Cockpit Visual Interativo do Novo Workspace (`workspaces-executivos/<slug-da-iniciativa>/index.html`):**
   - Crie um arquivo `index.html` (com CSS embutido ou `style.css`, tema *Executive Dark Mode*) que funcione como o **Painel de Controle da Sala de Guerra**, exibindo:
     - O status das **4 Camadas do Workspace Executivo** (Rules Ativas, Skills com *Progressive Disclosure*, Servidor MCP Brasil Conectado e Automação Cron `CRON_TZ=America/Sao_Paulo 0 8 * * 1`);
     - Visualizador interativo dos arquivos gerados (`AGENTS.md`, `SKILL.md` e `sidecar.json` de automação com `access_grants` auditados);
     - Simulador rápido do **"Briefing Automático de Segunda-Feira às 08h00"** para a empresa/setor escolhido.

4. **Validação no Browser Sub-Agent e Walkthrough:**
   - Abra o novo Cockpit (`workspaces-executivos/<slug-da-iniciativa>/index.html`) no *Browser Sub-Agent*, capture um screenshot e apresente o **Walkthrough Artifact** explicando como o participante pode abrir essa pasta diretamente no **Antigravity 2.0** (clicando em `Select Project` ou no ícone de pasta `+` na barra lateral esquerda → `New Project` ou `Create Project → + Add Folder`) na segunda-feira!
