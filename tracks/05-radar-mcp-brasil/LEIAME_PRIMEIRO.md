# 🇧🇷 Trilha 05 (Ato 2 do Workshop): Radar Executivo em Tempo Real com Servidor MCP Brasil (CNPJ + Banco Central)

> **Tempo estimado:** 12 a 15 minutos (100% autoguiado no Google Antigravity)  
> **Nível:** Iniciante a Avançado (Zero cadastro, zero chaves de API, zero dependências externas)  
> **Conceitos do Google Antigravity praticados:** Conexão com Dados Reais via **MCP (Model Context Protocol)**, Orquestração Paralela no *Agent Manager (`Cmd/Ctrl + E`)*, Descoberta Semântica de *Skills* (`.agent/skills/radar-mcp-brasil/SKILL.md`), Agendamento Recorrente (`/automation`) e Validação no *Browser Sub-Agent*.

---

## 🎯 Sobre Esta Trilha

Modelos de linguagem isolados conhecem apenas o passado estático do seu treinamento. Na **Era Agêntica**, o grande salto acontece quando conectamos nossos agentes a **fontes de dados oficiais, APIs corporativas e sistemas internos em tempo real** através do padrão aberto **MCP (Model Context Protocol)**.

Nesta trilha (projetada para ser executada no **Ato 2**, em uma **segunda conversa paralela no Agent Manager** enquanto o seu primeiro agente constrói o jogo da [Trilha 04](../04-flappy-hero/README.md)), você vai comandar um agente conectado ao servidor local Zero-Config [`@mcp/mcp_brasil_zero_deps.py`](../../mcp/mcp_brasil_zero_deps.py).

Sem precisar criar nenhuma conta ou chave de API, o seu agente vai:
1. 🏢 Consultar **ao vivo** os dados cadastrais oficiais do **CNPJ real da sua empresa** na Receita Federal (via BrasilAPI): *Razão Social, Nome Fantasia, CNAE Principal, Atividades Secundárias, Capital Social, Porte, Município/UF e Quadro Societário (QSA)*.
2. 🏦 Consultar **ao vivo** os indicadores macroeconômicos oficiais de hoje no **Banco Central do Brasil (SGS/PTAX)**: *Taxa Selic Meta, Taxa CDI, Inflação IPCA acumulada em 12 meses e Cotação do Dólar Comercial PTAX*.
3. 📊 Construir do zero nesta pasta (`index.html`, `style.css` e `app.js`) um **Painel Executivo de Inteligência Macroeconômica e Setorial** sob medida para o setor (CNAE) da sua empresa, com **Simulador de Estresse de Cenários (Sliders de Selic, IPCA e Câmbio)**!
4. ⏰ Mostrar como agendar esse radar como uma **Automação Recorrente (`/automation`)** para atualizar seu briefing executivo toda segunda-feira às 08h00!

---

## 📂 Arquivos Desta Pasta e Conexões no Workspace

| Arquivo / Caminho | Função |
| :--- | :--- |
| `README.md` / [`LEIAME_PRIMEIRO.md`](./LEIAME_PRIMEIRO.md) | Este guia completo passo a passo para execução autônoma. |
| [`../../mcp/mcp_brasil_zero_deps.py`](../../mcp/mcp_brasil_zero_deps.py) | Servidor MCP Brasil Zero-Config (escrito 100% na biblioteca padrão do Python 3, sem precisar de `pip install` ou token). |
| [`../../.gemini/settings.json`](../../.gemini/settings.json) | Configuração automática que já registra o servidor `mcp-brasil` no seu Workspace do Antigravity. |
| [`../../.agent/skills/radar-mcp-brasil/SKILL.md`](../../.agent/skills/radar-mcp-brasil/SKILL.md) | **Skill** com *Progressive Disclosure* que ensina ao agente o protocolo exato de consulta e construção do dashboard. |
| *(Serão criados pelo Agente)* | `index.html`, `style.css` e `app.js` contendo o painel personalizado da sua empresa. |

---

## 🛠️ Passo a Passo Completo (Autoguiado do Zero)

Mesmo que você esteja executando este repositório em casa após o evento, basta seguir as **4 etapas abaixo** no **Google Antigravity**:

---

### 🔹 Etapa 1: Abrir uma Conversa em Paralelo no Antigravity 2.0

1. Na barra lateral esquerda do **Google Antigravity 2.0**, clique no botão **`+` (`New Conversation`)** (ou pressione **`Cmd + E`** no Mac / **`Ctrl + E`** no Windows/Linux) para iniciar uma conversa dedicada a esta trilha.
2. **⚡ Modelo Recomendado (`Gemini 3.8 Flash`):** Certifique-se de que o seletor de modelo na caixa de chat esteja em **`Gemini 3.8 Flash (High)`** ou **`Gemini 3.8 Flash (Medium)`** (caso disponível) — isso garante construção rápida e preserva seus créditos gratuitos durante o workshop.
3. *(Opcional — Teste Rápido de Terminal)* Se você tiver curiosidade de ver o servidor MCP consultando a Receita Federal e o Banco Central diretamente no terminal antes de rodar o prompt, você pode testar:
   ```bash
   python3 mcp/mcp_brasil_zero_deps.py --test-cli 84429695000111
   ```

---

### 🔹 Etapa 2: Construir o Painel Executivo com o CNPJ da Sua Empresa (`/radar-mcp-brasil`)

1. Escolha o **CNPJ da sua própria empresa** para tornar a experiência 100% real!
   > 💡 **Não lembra o CNPJ de cabeça?** Você pode usar qualquer um destes CNPJs públicos de grandes empresas brasileiras como referência:
   > - **WEG S.A. (Indústria / Equipamentos Elétricos):** `84.429.695/0001-11`
   > - **Embraer S.A. (Aeroespacial / Engenharia):** `07.689.002/0001-89`
   > - **Itaú Unibanco Holding S.A. (Setor Financeiro):** `60.872.504/0001-23`
   > - **Magazine Luiza S.A. (Varejo & E-commerce):** `47.960.950/0001-21`
   > - **Petrobras S.A. (Energia / Óleo & Gás):** `33.000.167/0001-01`
   > - **Raia Drogasil S.A. (Saúde & Varejo Farmacêutico):** `61.585.865/0001-51`

2. Copie e envie o prompt abaixo para o Agente! *(Ele já vem preenchido com o CNPJ da **WEG S.A. `84.429.695/0001-11`** para funcionar em 1 clique caso você não queira editar nada; se quiser consultar a sua empresa, basta substituir o CNPJ na primeira linha)*:

```text
Execute a skill @.agent/skills/radar-mcp-brasil/SKILL.md para o CNPJ 84.429.695/0001-11 (WEG S.A. — caso eu tenha mantido este CNPJ padrão, execute imediatamente para a WEG S.A. sem parar para perguntar):
1. Utilize o servidor MCP Brasil em @mcp/mcp_brasil_zero_deps.py (ex: rodando `python3 mcp/mcp_brasil_zero_deps.py --test-cli 84429695000111`) para consultar em tempo real os dados oficiais deste CNPJ na Receita Federal/BrasilAPI (Razão Social, CNAE Principal, Atividades Secundárias, Capital Social, Porte, UF e Quadro Societário) e os indicadores atuais do Banco Central (Taxa Selic, CDI, IPCA 12m e Dólar PTAX).
2. Com base nos dados reais retornados, construa diretamente dentro de @tracks/05-radar-mcp-brasil/ um "Painel Executivo de Inteligência Macroeconômica e Setorial" completo (sobrescrevendo o index.html de blueprint e criando style.css e app.js) personalizado para esta empresa.
3. Inclua no painel:
   - Card de Identidade Corporativa e CNAE real da empresa;
   - Cards com as taxas oficiais de hoje do Banco Central (Selic, CDI, IPCA e Dólar);
   - Simulador Interativo de Sensibilidade (sliders de Selic, Câmbio e IPCA) que recalcula ao vivo o impacto no Custo de Capital, Margem Operacional e Demanda do setor (CNAE) da empresa;
   - Matriz de Recomendações Táticas (Curto, Médio e Longo Prazo) para a Diretoria.
4. Abra o painel no Browser Sub-Agent para validar os simuladores interativos e gere um Walkthrough Artifact com screenshots e o diagnóstico estratégico!
```

---

### 🔹 Etapa 3: Comparativo Competitivo Multi-CNPJ (Bônus Prático)

Depois que o agente entregar o painel da sua empresa e mostrar o **Walkthrough**, que tal pedir para ele consultar um **segundo CNPJ** (por exemplo, um concorrente, cliente ou fornecedor estratégico) e adicionar uma aba de comparação lado a lado?

#### Copie e envie este prompt no mesmo chat:

```text
Excelente! Agora consulte também no servidor MCP Brasil (@mcp/mcp_brasil_zero_deps.py, ex: rodando `python3 mcp/mcp_brasil_zero_deps.py --test-cli 07689002000189`) este segundo CNPJ: 07.689.002/0001-89 (Embraer S.A. — caso eu tenha mantido este 2º CNPJ padrão, execute imediatamente sem parar para perguntar) e adicione no painel de @tracks/05-radar-mcp-brasil/ uma seção "Benchmarking & Comparativo Setorial" comparando lado a lado o Porte, Capital Social, CNAE, localização e exposição macroeconômica (sensibilidade a Juros vs. Câmbio) das duas empresas! Valide no Browser Sub-Agent.
```

---

### 🔹 Etapa 4: Transformar em Automação Agendada com Governança (`/automation`)

Na vida real de um executivo, você não quer lembrar de abrir o chat toda semana para pedir a atualização das taxas do Banco Central. No **Google Antigravity**, você pode criar **Agentes Agendados em Background** usando o comando `/automation`!

#### Experimente enviar no chat:

```text
/automation Configure uma automação semanal toda segunda-feira às 08h00 (fuso America/Sao_Paulo) para consultar os indicadores atualizados do Banco Central (Selic, CDI, IPCA e Dólar) via python3 mcp/mcp_brasil_zero_deps.py --test-cli 84429695000111 e atualizar o resumo executivo da minha empresa em tracks/05-radar-mcp-brasil/.
```

#### 🛡️ O que acontece por baixo dos panos (Governança *Zero Cheque em Branco*):
1. **Agendamento Cron + Nova Conversa Limpa:** O Antigravity cria um sidecar em `~/.gemini/config/sidecars/<id>/sidecar.json` com `"builtin": "schedule"` e `"args": ["CRON_TZ=America/Sao_Paulo 0 8 * * 1", "agentapi", "new-conversation", "--", "<prompt autossuficiente>"]`.
2. **Test Run Obrigatório (Calibragem de Permissões):** Quando um agente roda sozinho às 08h00 da manhã sem um humano presente, qualquer comando não autorizado previamente é bloqueado automaticamente por segurança. Por isso, o Antigravity faz **1 execução de teste assistida (Test Run)** com você agora para gravar no `sidecar.json` **apenas as permissões exatas** necessárias (`workspace_uris` e `access_grants` específicos, proibindo curingas amplos como `command(*)`).
3. **Painel de Controle (`sidecar://dashboard`):** Ao finalizar, o agente mostra o botão **[Open Automations Dashboard](sidecar://dashboard)** para você ligar/pausar a rotina, clicar em **Run Now** ou auditar o histórico de execuções!

---

### 🔹 Etapa 5 (Bônus de Segunda-Feira): Criar Seu Próprio Workspace Executivo (`/criar-workspace-executivo`)

Quer sair do workshop com uma **"Sala de Guerra Digital" (Workspace Executivo)** pronta para um projeto real da sua diretoria na segunda-feira? Use a Skill `/criar-workspace-executivo` para gerar automaticamente uma pasta completa estruturada nas **4 camadas do Antigravity** (*Rules + Skills + MCP + Automação Agendada + Cockpit Visual*):

```text
Execute a skill @.agent/skills/criar-workspace-executivo/SKILL.md para criar o meu Workspace Executivo de segunda-feira chamado `comite-estrategico-2027` (focado em Planejamento Estratégico, Monitoramento Macroeconômico e Governança de IA — execute imediatamente com estes parâmetros sem parar para perguntar):
1. Crie dentro de `workspaces-executivos/comite-estrategico-2027/` as 4 camadas completas:
   - Camada 1 (Rules): `AGENTS.md` e `.agents/rules/governanca-setorial.md` com os guardrails de compliance, LGPD e padrão executivo C-Level;
   - Camada 2 (Skills): `.agents/skills/ritual-semanal-diretoria/SKILL.md` com Progressive Disclosure para preparar a pauta de segunda-feira;
   - Camada 3 (MCP): `.gemini/settings.json` conectado ao servidor MCP Brasil;
   - Camada 4 (Automação): `AUTOMACAO_SEGUNDA_FEIRA.md` com o comando `/automation` e o modelo de `sidecar.json` com permissões estritas (`access_grants` calibrados via Test Run).
2. Crie o Cockpit Visual da Sala de Guerra em `workspaces-executivos/comite-estrategico-2027/index.html`, valide no Browser Sub-Agent e gere o Walkthrough!
```

---

## 🧠 Resumo do Aprendizado Executivo

Nesta trilha você dominou os 4 conceitos mais avançados de um **Workspace Executivo** no Google Antigravity:
1. **MCP (Model Context Protocol):** Como tirar os agentes do isolamento e conectá-los a APIs oficiais e dados vivos da sua empresa.
2. **Skills Sob Demanda com *Progressive Disclosure* (`.agents/skills/`):** Como empacotar um protocolo complexo de análise em uma Skill reutilizável por toda a sua equipe sem poluir a memória do agente.
3. **Automations com Test Run (`/automation`):** Como passar da interação manual por chat para rotinas executivas recorrentes e auditáveis com permissões estritas (`sidecar.json`).
4. **Arquitetura de Workspaces (`/criar-workspace-executivo`):** Como estruturar Salas de Guerra dedicadas para cada comitê ou iniciativa estratégica da sua organização.
