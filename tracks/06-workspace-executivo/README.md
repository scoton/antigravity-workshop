# 🏗️ Trilha 06 (Laboratório Extra 04): Construtor de Workspace Executivo

> **Tempo estimado:** 10 a 15 minutos (100% autoguiado no Google Antigravity)  
> **Nível:** Iniciante a Avançado (Zero necessidade de programar manualmente)  
> **Conceitos do Google Antigravity praticados:** Arquitetura de *Workspace* em 4 Camadas (*Rules* `AGENTS.md`, *Skills* com *Progressive Disclosure*, Servidor *MCP* `.gemini/settings.json` e *Automations* `/automation` com *Test Run* de governança em `sidecar.json`).

---

## 🎯 Sobre Este Laboratório

Durante o workshop principal, você usou um Workspace que já estava pré-configurado para você. Mas **como criar do zero o seu próprio Workspace Executivo na segunda-feira** para uma iniciativa real da sua diretoria (ex.: *Comitê Estratégico 2027*, *Planejamento Orçamentário*, *Sala de Guerra de M&A* ou *Monitoramento Regulatório*)?

Neste laboratório, você usará a Skill avançada **`/criar-workspace-executivo`** ([`.agent/skills/criar-workspace-executivo/SKILL.md`](../../.agent/skills/criar-workspace-executivo/SKILL.md)) para que o próprio Agente construa um kit completo de **Sala de Guerra Digital (`workspaces-executivos/<nome>/`)** estruturado nas **4 camadas oficiais do Google Antigravity**:

1. 📏 **Camada 1 — Governança Sempre Ativa (*Rules*):** `AGENTS.md` e `.agents/rules/governanca-setorial.md` (`trigger: always_on`) com os *guardrails* de compliance, LGPD e padrão executivo C-Level da sua empresa.
2. 🧠 **Camada 2 — Memória Organizacional Sob Demanda (*Skills*):** `.agents/skills/ritual-semanal-diretoria/SKILL.md` com *Progressive Disclosure* (o agente lê apenas `name` e `description` no início e só carrega o manual completo quando acionado, economizando tokens).
3. 🔌 **Camada 3 — Conexão com Dados Oficiais (*MCP*):** `.gemini/settings.json` pré-conectado ao servidor **MCP Brasil** (Receita Federal + Banco Central).
4. ⏰ **Camada 4 — Automação Agendada com Governança (*Automations*):** `AUTOMACAO_SEGUNDA_FEIRA.md` com o comando `/automation` e o modelo de `sidecar.json` calibrado via *Test Run* (sem *cheque em branco* / sem *wildcards* `command(*)`), além de um **Cockpit Visual Interativo (`index.html`)**.

---

## 📂 Arquivos Desta Pasta

| Arquivo | Função |
| :--- | :--- |
| [`README.md`](./README.md) | Este guia passo a passo com 4 missões práticas para construir e evoluir seu Workspace Executivo. |
| [`index.html`](./index.html) | Página interativa de lançamento (*Blueprint Launchpad*) com botões para copiar os prompts em 1 clique. |
| [`../../.agent/skills/criar-workspace-executivo/SKILL.md`](../../.agent/skills/criar-workspace-executivo/SKILL.md) | Definição técnica da Skill `/criar-workspace-executivo` que o Agente lê e executa. |

---

## 🛠️ Passo a Passo Autoguiado no Google Antigravity

Você pode executar a **Missão 1** para gerar sua Sala de Guerra completa em um único comando e, se quiser ir além, explorar as **Missões 2, 3 e 4**. Basta copiar o bloco de prompt (usando o botão de copiar do GitHub no canto superior direito da caixa cinza) e colar no chat do **Google Antigravity 2.0**!

---

### 🔹 Missão 1: Gerar Sua Sala de Guerra Digital Completa (`/criar-workspace-executivo`)

Vamos pedir ao Agente para construir um Workspace Executivo completo dentro de `workspaces-executivos/comite-estrategico-2027/`.

#### Copie e envie este prompt no Google Antigravity:
*(Ele já vem configurado com a iniciativa **`comite-estrategico-2027` para a WEG S.A.** para funcionar em 1 clique caso você não edite nada; se preferir usar o nome da sua área ou empresa, basta alterar na primeira linha)*

```text
Execute a skill @.agent/skills/criar-workspace-executivo/SKILL.md para criar o meu Workspace Executivo de segunda-feira chamado `comite-estrategico-2027` (focado em Planejamento Estratégico, Monitoramento Macroeconômico e Governança de IA para a WEG S.A. — caso eu tenha mantido estes parâmetros padrão, execute imediatamente sem parar para perguntar):
1. Crie dentro de `workspaces-executivos/comite-estrategico-2027/` as 4 camadas completas:
   - Camada 1 (Rules): `AGENTS.md` e `.agents/rules/governanca-setorial.md` com os guardrails de compliance, LGPD e padrão executivo C-Level;
   - Camada 2 (Skills): `.agents/skills/ritual-semanal-diretoria/SKILL.md` com Progressive Disclosure para preparar a pauta de segunda-feira;
   - Camada 3 (MCP): `.gemini/settings.json` conectado ao servidor MCP Brasil;
   - Camada 4 (Automação): `AUTOMACAO_SEGUNDA_FEIRA.md` com o comando `/automation` e o modelo de `sidecar.json` com permissões estritas (`access_grants` calibrados via Test Run).
2. Crie o Cockpit Visual da Sala de Guerra em `workspaces-executivos/comite-estrategico-2027/index.html`, garanta que o servidor local na porta 8080 esteja ativo, faça uma visita rápida no Browser Sub-Agent para validar e gere o Walkthrough Artifact com o link clicável `http://localhost:8080/workspaces-executivos/comite-estrategico-2027/index.html`!
```

---

### 🔹 Missão 2: Blindar as Regras de Compliance e LGPD do Seu Setor (*Rules*)

Depois que a Sala de Guerra for criada na Missão 1, você pode refinar a **Camada 1 (`AGENTS.md` e `.agents/rules/`)** com políticas reais da sua organização (ex.: alçadas de aprovação financeira, restrições regulatórias do Banco Central/CVM/ANS ou diretrizes de uso de IA).

#### Copie e envie este prompt no Google Antigravity:

```text
Evolua a Camada 1 de Governança do meu Workspace em `workspaces-executivos/comite-estrategico-2027/`:
1. Atualize `workspaces-executivos/comite-estrategico-2027/AGENTS.md` e `.agents/rules/governanca-setorial.md` adicionando uma Matriz de Alçadas e Riscos de IA com 3 níveis (Risco Baixo: automação interna; Risco Médio: exige validação humana do diretor; Risco Alto / Dados Sensíveis LGPD: bloqueio automático e parecer obrigatório do CISO/Jurídico).
2. Adicione no Cockpit Visual (`workspaces-executivos/comite-estrategico-2027/index.html`) uma seção interativa mostrando essa Matriz de Alçadas e Riscos de IA em tempo real.
3. Valide a atualização no Browser Sub-Agent e atualize o Walkthrough Artifact!
```

---

### 🔹 Missão 3: Transformar um Ritual da Sua Equipe em uma Nova *Skill* Sob Demanda

Uma das maiores vantagens do Antigravity é transformar processos repetitivos da sua equipe em **Skills com *Progressive Disclosure*** dentro de `.agents/skills/`.

#### Copie e envie este prompt no Google Antigravity:

```text
Crie uma segunda Skill sob demanda dentro do meu Workspace Executivo em `workspaces-executivos/comite-estrategico-2027/.agents/skills/radar-concorrencia-m-and-a/SKILL.md` (e espelho em `.agent/skills/`):
1. Configure o cabeçalho YAML com `name: radar-concorrencia-m-and-a` e `description: >-` clara para Progressive Disclosure.
2. Defina no protocolo da Skill um passo a passo onde o agente consulta o CNPJ de duas empresas via servidor MCP Brasil (`mcp_brasil_zero_deps.py`), compara Porte, Capital Social, CNAE e sensibilidade à Taxa Selic/Câmbio, e gera um Memorando Executivo de Comparação Competitiva (Benchmarking / M&A).
3. Adicione um card para essa nova Skill no Cockpit `workspaces-executivos/comite-estrategico-2027/index.html` com o prompt pronto para copiar em 1 clique!
```

---

### 🔹 Missão 4: Ativar o Agendamento Semanal com Governança (`/automation`)

Teste na prática o fluxo de **Automação Recorrente** para o novo Workspace que você acabou de construir:

#### Copie e envie este prompt no Google Antigravity:

```text
/automation Configure uma automação semanal toda segunda-feira às 08h00 (fuso America/Sao_Paulo) para executar a skill ritual-semanal-diretoria dentro de workspaces-executivos/comite-estrategico-2027/, consultando os indicadores atualizados do Banco Central via python3 mcp/mcp_brasil_zero_deps.py --test-cli 84429695000111 e atualizando a pauta executiva da semana em workspaces-executivos/comite-estrategico-2027/index.html.
```

---

## 🧠 Resumo do Aprendizado Executivo

Ao concluir este laboratório, você domina a arquitetura completa para escalar IA Agêntica na sua organização:
1. **Rules (`AGENTS.md`):** O que o agente **nunca pode esquecer** (governança, compliance e estilo executivo sempre ativos).
2. **Skills (`.agents/skills/`):** O que o agente **sabe fazer sob demanda** sem desperdiçar tokens (*Progressive Disclosure*).
3. **MCP (`.gemini/settings.json`):** Onde o agente **busca fatos reais** (APIs, bancos de dados, Receita Federal e Banco Central).
4. **Automations (`/automation`):** Como o agente **trabalha para você de forma recorrente** com permissões estritas auditadas via *Test Run*.
