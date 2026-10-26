# 🚀 AI Bootcamp 2026 (Singularity Brazil) — Workshop Prático: Google Antigravity

Bem-vindo(a) ao laboratório prático (**Self-Paced Hands-On**) do **AI Bootcamp 2026**!

Neste workshop de **~33 minutos**, você vai experimentar na prática a transição da fase de **Copilotos (Assistência Individual)** para a **Orquestração Agêntica (Centro de Comando)** usando o **Google Antigravity**.

> **A Coreografia em 3 Atos de Hoje ("O Forno Assíncrono"):**
> 1. **Ato 1 (`04-flappy-hero`):** Você atua como Arquiteto de Produto, gera uma especificação completa (`SPEC_JOGO.md`) e coloca o **Agente 1** para construir e testar um jogo inteiro do zero em background (*Flappy Executive Hero*).
> 2. **Ato 2 (`05-radar-mcp-brasil`):** Sem ficar esperando o jogo terminar, você abre o **Agent Manager (`Cmd/Ctrl + E`)** e comanda o **Agente 2** conectado a um **Servidor MCP Brasil** que consulta em tempo real o **CNPJ real da sua empresa na Receita Federal** + as taxas de hoje do **Banco Central (Selic, CDI, IPCA e Dólar)** para construir um **Painel Executivo de Inteligência Macroeconômica**!
> 3. **Ato 3 (`04-flappy-hero`):** Você volta para a Aba 1, vê o jogo pronto e transforma uma **selfie sua em uma Caricatura de Super-Herói/Super-Heroína** desviando das burocracias corporativas!

---

## 🧭 Mapa do Repositório (Guias Autoguiados por Trilha)

Cada trilha possui o seu próprio **`README.md` com o passo a passo completo e prompts prontos para copiar e colar**, permitindo que qualquer pessoa execute todo o workshop por conta própria mesmo sem ter participado presencialmente do evento:

| Módulo / Trilha | Pasta e Guia Passo a Passo | O que você vai construir e operar |
| :--- | :--- | :--- |
| **🦸‍♂️ Trilha 04 (Atos 1 e 3): Flappy Executive Hero** | [`tracks/04-flappy-hero/README.md`](tracks/04-flappy-hero/README.md) | **Começa quase vazia!** Você gera a especificação (`SPEC_JOGO.md`), dispara a construção autônoma do jogo em background e no final usa o `selfie-studio.html` + `/gerar-super-heroi` para voar com a sua própria caricatura de Super-Herói! |
| **🇧🇷 Trilha 05 (Ato 2): Radar Executivo MCP Brasil** | [`tracks/05-radar-mcp-brasil/README.md`](tracks/05-radar-mcp-brasil/README.md)<br>*(+ [`mcp/README.md`](mcp/README.md))* | Conecta um segundo agente em paralelo a dados oficiais brasileiros em tempo real (**CNPJ na Receita Federal + Selic, CDI, IPCA e Dólar no Banco Central**) para construir um Dashboard Executivo personalizado para a sua empresa e agendar com `/automation`! |
| **🏛️ Trilha 01 (Lab Extra): Crisis Commander** | [`tracks/01-crisis-commander/README.md`](tracks/01-crisis-commander/README.md) | Simulador executivo de decisão sob incerteza (estilo *Reigns*) ao longo de 8 trimestres (2026–2027), com 4 missões práticas (`/adaptar-setor`, `/modo-caos`, Comitê de IA e `/auditoria-executiva`). |
| **🛡️ Trilha 02 (Lab Extra): Orbital Defense (60 FPS)** | [`tracks/02-orbital-defense/README.md`](tracks/02-orbital-defense/README.md) | Jogo arcade tático em HTML5 Canvas com escudos, Pulso EMP e Piloto Automático IA, com 4 missões práticas (*Boss Fight* Cisne Negro, *Power-Ups* Executivos, Riscos do Setor e *Stress Test*). |
| **📊 Trilha 03 (Lab Extra): Boardroom War Room** | [`tracks/03-boardroom-simulator/README.md`](tracks/03-boardroom-simulator/README.md) | Simulador C-Level de Conselho de Administração com Matriz Risco × Retorno e votos de CFO, CTO e CRO, com 4 missões práticas (4º Conselheiro CISO/LGPD, *Stress Test* Macroeconômico, Portfólio Real e Ata Executiva). |

---

## 🏛️ Anatomia de um "Workspace Executivo" no Google Antigravity

Um **Workspace** no Antigravity não serve apenas para equipes de engenharia de software — ele é uma **"Sala de Guerra Digital" (War Room)** que você pode criar para qualquer iniciativa estratégica (ex.: `planejamento-2027/`, `comite-m-and-a/`, `inteligencia-setorial/`).

> 💡 **Escopo Global (`~/.gemini/`) vs. Escopo do Workspace (Pasta do Projeto):** Configurações na pasta do seu usuário valem para todos os seus projetos pessoais; já tudo o que está **dentro da pasta do Workspace** tem prioridade máxima e **viaja junto no Git/ZIP** quando você compartilha a pasta com a sua diretoria!

Observe como este próprio repositório está organizado nas **4 camadas executivas** do Antigravity:

| Camada no Workspace | Onde Fica | Papel na Organização Agêntica |
| :--- | :--- | :--- |
| **1. Rules (`AGENTS.md` & `.agents/rules/`)** | Raiz e `.agents/rules/` | **Governança Sempre Ativa:** O "Código de Conduta e Compliance" injetado automaticamente no *System Prompt* que todo agente lê obrigatoriamente antes de agir. |
| **2. Skills (`.agents/skills/<nome>/SKILL.md`)** | `.agents/skills/` *(e `.agent/skills/`)* | **Playbooks Sob Demanda (*Progressive Disclosure*):** Em repouso, o agente lê apenas o cabeçalho YAML (`name` e `description`), gastando quase zero memória. O playbook completo só é carregado quando o tema surge na conversa **ou** via comando `/` (`/radar-mcp-brasil`, `/gerar-super-heroi`, `/criar-workspace-executivo`). |
| **3. MCP Servers (`.gemini/settings.json` + `mcp/`)** | `mcp/mcp_brasil_zero_deps.py` | **Conexão com Dados Reais:** Protocolo universal (JSON-RPC) que conecta os agentes a APIs oficiais (Receita Federal, Banco Central) ou sistemas internos da sua empresa. |
| **4. Automations (`/automation`)** | `~/.gemini/config/sidecars/<id>/sidecar.json` | **Execução Recorrente com Governança (*Zero Cheque em Branco*):** Agentes agendados (Cron com `CRON_TZ=America/Sao_Paulo`) que passam por um **Test Run** assistido para gravar permissões estritas (`access_grants` sem curingas) e são gerenciados no **Automations Dashboard (`sidecar://dashboard`)**. |

---

## ⏱️ Roteiro Self-Paced em 3 Atos (33 Minutos)

### 🏁 Preparação Rápida (2 minutos — Zero Conhecimento Técnico Necessário!)

Nunca usou o **Google Antigravity**, Git ou Terminal antes? Não se preocupe — você **não precisa saber programar nem usar linha de comando**:

1. **Baixe e abra esta pasta no Google Antigravity:**
   - **Opção A (Sem Terminal — Mais Fácil):** No topo desta página do GitHub, clique no botão verde **`<> Code` → `Download ZIP`**, extraia o arquivo `.zip` no seu computador e, dentro do **Google Antigravity**, clique no menu superior **`File` → `Open Folder...` (Abrir Pasta)** selecionando a pasta `antigravity-workshop`.
   - **Opção B (Via Terminal/Git):**
     ```bash
     git clone https://github.com/scoton/antigravity-workshop.git
     cd antigravity-workshop
     ```
2. **Abra o Portal Interativo do Workshop (`index.html`):**
   - Você pode simplesmente dar **dois cliques** no arquivo `index.html` dentro da pasta para abri-lo no seu navegador, **ou** colar esta frase na caixa de chat do Agente no Antigravity para que ele mesmo inicie o servidor para você:
     ```text
     Inicie um servidor web local na porta 8080 nesta pasta em background e me informe o link para abrir o index.html no navegador.
     ```
3. **💡 3 Dicas de Ouro para Iniciantes no Antigravity:**
   - **Onde colar os Prompts:** Todos os blocos cinzas de texto abaixo devem ser copiados e colados na **caixa de Chat do Agente** (painel do Antigravity).
   - **Botões `Proceed` / `Accept` / `Allow`:** Sempre que o Antigravity criar um plano (*Implementation Plan*) ou pedir permissão para rodar um comando / abrir o navegador, aparecerá um botão azul **`Proceed` / `Accept` / `Run`** no chat. **Clique nele** para autorizar o agente a continuar!
   - **Como ter 2 Agentes trabalhando ao mesmo tempo (*Agent Manager*):** Pressione **`Cmd + E`** (no Mac) ou **`Ctrl + E`** (no Windows/Linux) — ou clique no ícone **`+` (New Conversation)** no painel de conversas — para alternar entre o **Agente 1 (Jogo Flappy Hero)** e o **Agente 2 (Radar CNPJ + Banco Central)**!

---

### 📋 ATO 1: O Arquiteto de Produto — *Spec-Driven Development* (7 minutos)

**💡 O Conceito Executivo:** Grandes resultados com agentes autônomos começam com uma **especificação clara de arquitetura e critérios de aceite**. Em vez de pedir *"faça um jogo"* de forma vaga, vamos pedir ao Antigravity para primeiro redigir uma especificação completa (`SPEC_JOGO.md`), revisá-la e então disparar a construção autônoma.

#### Passo 1.1 — Gerar a Especificação Completa (`SPEC_JOGO.md`)
No painel do Agente, envie o prompt abaixo:

```text
Atue como um Arquiteto de Produto e Games. Crie dentro da pasta @tracks/04-flappy-hero/ um arquivo chamado SPEC_JOGO.md contendo a especificação completa para desenvolvermos do zero um jogo web (HTML5 Canvas + CSS + JS puro, zero dependências) estilo Flappy Bird chamado "Flappy Executive Hero: Escapando da Burocracia".

A especificação deve detalhar:
1. Mecânica e Física: Gravidade suave e fluida (60fps), espaçamento generoso entre obstáculos e controle por Barra de Espaço / Clique.
2. Obstáculos Bem-Humorados: Os "canos" devem ser barreiras corporativas com rótulos visíveis e divertidos, como "Reunião que podia ser e-mail", "Planilha V14_FINAL.xlsx", "Sistema Legado", "Orçamento Congelado", "Aprovação em 7 Níveis" e "Silo Organizacional".
3. Modo Piloto Automático IA (#btn-autopilot): Um botão na tela que, quando ativado, faz o herói calcular o pulo ideal sozinho para desviar das barreiras (ótimo para demonstração e testes automatizados).
4. Sistema de Avatar Super-Herói: O personagem deve ser desenhado com uma capa de super-herói esvoaçante animada no Canvas e rastro de partículas, suportando carregar a imagem `hero-caricatura.png` / `minha-selfie.png` ou trocar de foto direto na tela (#btn-upload-hero).
5. Efeitos Sonoros Sintetizados (Web Audio API) e placar com medalhas executivas.

Apenas crie o documento @tracks/04-flappy-hero/SPEC_JOGO.md primeiro para minha revisão.
```

#### Passo 1.2 — Revisar e Disparar a Construção no "Forno Assíncrono"
1. Abra o arquivo `tracks/04-flappy-hero/SPEC_JOGO.md` criado pelo agente (se quiser, adicione o nome de uma "burocracia interna" famosa da sua empresa na lista de obstáculos!).
2. Agora dispare o **Prompt de Construção Completa** abaixo:

```text
Excelente! Agora implemente o jogo completo dentro de @tracks/04-flappy-hero/ (sobrescrevendo o index.html de blueprint e criando style.css e game.js) seguindo 100% a especificação em @tracks/04-flappy-hero/SPEC_JOGO.md. Execute todas as etapas diretamente de ponta a ponta sem pausar para confirmações intermediárias.
Quando terminar de criar os arquivos:
1. Abra o jogo no Browser Sub-Agent.
2. Ative o botão de Piloto Automático IA (#btn-autopilot) para jogar automaticamente por alguns segundos, verificando que o herói desvia dos obstáculos corporativos e marca pontos sem erros no console.
3. Gere um Walkthrough Artifact com screenshots do jogo funcionando!
```

> ⚡ **ATENÇÃO — OLHO NO BOTÃO `PROCEED` E PASSE PARA O ATO 2!**
> - Se o Antigravity exibir um plano (*Implementation Plan*) com um botão azul **`Proceed` / `Approve` / `Accept`**, **clique nele primeiro** para destravar a execução!
> - Assim que você vir que o agente começou a criar os arquivos (`index.html`, `style.css`, `game.js`), **não fique esperando os 3 minutos parado:** passe imediatamente para o **Ato 2** abaixo!

---

### 🇧🇷 ATO 2: Conexão com o Mundo Real — *Agent Manager & Servidor MCP Brasil* (14 minutos)

**💡 O Conceito Executivo:** Enquanto seu "Engenheiro Autônomo #1" constrói e testa o *Flappy Executive Hero* em background, você vai abrir o **Agent Manager (`Cmd/Ctrl + E`)**, iniciar uma **segunda conversa em paralelo** e conectar um agente a **dados oficiais do Brasil em tempo real via MCP (Model Context Protocol)**!

#### Passo 2.1 — Abrir uma Nova Conversa no Agent Manager
1. Pressione `Cmd + E` (Mac) ou `Ctrl + E` (Windows/Linux) — ou clique no botão **`+` (New Conversation)** no topo/lateral do painel do Agente — para abrir o **Agent Manager**.
2. Clique em **New Conversation / Novo Agente** para iniciar um segundo agente trabalhando em paralelo (sem fechar a Conversa 1!).

#### Passo 2.2 — Consultar o CNPJ da Sua Empresa + Banco Central via MCP Brasil
Copie e envie o prompt abaixo! *(Ele já vem configurado com o CNPJ da **WEG S.A. `84.429.695/0001-11`** para funcionar em 1 clique mesmo que você não edite nada; se quiser analisar a sua empresa, basta trocar o número do CNPJ na primeira linha ou digitar no campo do Mission Hub `index.html`)*:

```text
Execute a skill @.agent/skills/radar-mcp-brasil/SKILL.md para o CNPJ 84.429.695/0001-11 (WEG S.A. — caso eu tenha mantido este CNPJ padrão, execute imediatamente para a WEG S.A. sem parar para perguntar):
1. Utilize o servidor MCP Brasil em @mcp/mcp_brasil_zero_deps.py (ex: rodando `python3 mcp/mcp_brasil_zero_deps.py --test-cli 84429695000111`) para consultar em tempo real os dados oficiais deste CNPJ na Receita Federal/BrasilAPI (Razão Social, CNAE Principal, Capital Social, Porte, UF e Quadro Societário) e os indicadores atuais do Banco Central (Taxa Selic, CDI, IPCA e Dólar PTAX).
2. Com base nos dados reais retornados, construa diretamente dentro de @tracks/05-radar-mcp-brasil/ um "Painel Executivo de Inteligência Macroeconômica e Setorial" (sobrescrevendo o index.html de blueprint e criando style.css e app.js) personalizado para esta empresa, com simulador interativo de impacto de Selic, Câmbio e IPCA no setor do CNAE dela.
3. Abra o painel no Browser Sub-Agent para validar e gere um Walkthrough Artifact com o diagnóstico estratégico!
```

*(Nota: Para conhecer também o ecossistema completo do `github.com/mcp-brasil/mcp-brasil` e do `mcp.apibrasil.io`, consulte o guia [`mcp/GUIA_MCP_BRASIL.md`](mcp/GUIA_MCP_BRASIL.md)).*

#### Passo 2.3 (Próximo Nível — 2 min): Agendar como Automação Recorrente com Governança (`/automation`)
E se, toda **segunda-feira às 08h00**, antes da sua reunião de diretoria, um agente autônomo consultasse o Banco Central sozinho e atualizasse esse briefing sem você precisar lembrar de abrir o chat? Experimente enviar na mesma conversa:

```text
/automation Configure uma automação semanal toda segunda-feira às 08h00 (fuso America/Sao_Paulo) para consultar os indicadores atualizados do Banco Central (Selic, CDI, IPCA e Dólar) via python3 mcp/mcp_brasil_zero_deps.py --test-cli 84429695000111 e atualizar o resumo executivo da minha empresa em tracks/05-radar-mcp-brasil/.
```

> 🛡️ **Como funciona a Governança de Automações no Antigravity (*Zero Cheque em Branco*):**
> Quando você aciona `/automation`, o Antigravity não dá um "cheque em branco" para a IA rodar comandos invisíveis no seu computador. Observe as 3 etapas que acontecem:
> 1. **Prompt Autossuficiente & Cron (`CRON_TZ=America/Sao_Paulo 0 8 * * 1`):** Cada execução agendada abre uma nova conversa limpa (`agentapi new-conversation`).
> 2. **Test Run Obrigatório (Calibragem de Permissões):** Como agentes rodando em background têm qualquer comando não autorizado bloqueado automaticamente, o Antigravity faz **1 execução de teste assistida (Test Run)** agora com você para gravar no arquivo `sidecar.json` **apenas as permissões exatas** necessárias (`workspace_uris` e `access_grants` específicos, proibindo curingas como `command(*)`).
> 3. **Painel de Controle (`sidecar://dashboard`):** Ao final, ele exibe o botão **[Open Automations Dashboard](sidecar://dashboard)**, onde você pode ligar/pausar o agendamento, clicar em **Run Now** ou auditar o histórico de todas as execuções!

---

### 🦸‍♂️ ATO 3: O Retorno Triunfal & Sua Caricatura de Super-Herói (10 minutos)

**💡 O Conceito Executivo:** Agora volte ao **Agent Manager (`Cmd/Ctrl + E`)** e clique na sua **primeira conversa** (a da Trilha `04-flappy-hero`). Veja que, enquanto você analisava dados do Banco Central e da Receita Federal na Aba 2, o Agente 1 construiu o jogo completo, abriu o navegador, testou com o Piloto IA e entregou o **Walkthrough Artifact**!

Agora vamos para o grand finale: **colocar você mesmo como o Super-Herói/Super-Heroína do jogo!**

#### Passo 3.1 — Capturar Sua Selfie Rápida ou Escolher um Avatar em 1 Clique (1 minuto)
1. No navegador, abra `tracks/04-flappy-hero/selfie-studio.html` (clicando no botão **📸 Abrir Selfie Studio** no `index.html` ou abrindo o arquivo direto da pasta).
2. Clique em **🎥 Ligar Webcam → 📸 Capturar Selfie** (ou, se estiver sem webcam, clique em um dos **4 Avatares Executivos de Super-Herói** prontos na tela!) e depois clique no botão verde **⬇️ Baixar `minha-selfie.png`**.
   > 💡 **Zero trabalho manual com pastas:** Quando você clica em Baixar, o navegador salva o arquivo na sua pasta padrão `Downloads` (`~/Downloads/minha-selfie.png`). **Você não precisa mover o arquivo manualmente** — no passo abaixo o próprio Agente busca automaticamente na sua pasta `Downloads`!

#### Passo 3.2 — Transformar Sua Selfie em Super-Herói Caricatura!
Volte para a **1ª conversa** no **Agent Manager (`Cmd/Ctrl + E`)** (a conversa da Trilha 04) e envie o prompt abaixo:

```text
Execute a skill @.agent/skills/gerar-super-heroi/SKILL.md:
1. Localize a minha foto em `tracks/04-flappy-hero/minha-selfie.png` (caso ainda não esteja nessa pasta, busque automaticamente o arquivo mais recente `~/Downloads/minha-selfie*.png` e copie para `tracks/04-flappy-hero/minha-selfie.png`; se não houver nenhum arquivo, gere um Avatar Executivo de Super-Herói padrão).
2. Analise meus traços marcantes na imagem e gere uma versão em estilo Caricatura divertida de Super-Herói / Super-Heroína baseada em mim (salva em `tracks/04-flappy-hero/hero-caricatura.png`).
3. Atualize o jogo em @tracks/04-flappy-hero/ para que o protagonista voando seja o meu Super-Herói Caricatura (com recorte em medalhão/escudo, capa vermelha e dourada esvoaçante animada no Canvas e botão na tela para alternar entre a Caricatura IA e a minha Selfie original!).
4. Abra o jogo no Browser Sub-Agent, faça um voo de teste com o meu Super-Herói desviando das burocracias e gere o Walkthrough com o print final!
```

> 💡 **Memória Organizacional (Transformando Conversas em Skills):** Sempre que você e sua equipe descobrirem um fluxo de alto valor no Antigravity, não deixe o conhecimento morrer no histórico do chat! Basta pedir: *"Transforme o fluxo que acabamos de executar em uma nova Skill reutilizável dentro de `.agent/skills/` para toda a equipe."*

---

## 🏛️ Passo Bônus para Segunda-Feira: Gerar Seu Próprio Workspace Executivo (`/criar-workspace-executivo`)

Quer sair do workshop com uma **"Sala de Guerra Digital" (Workspace Executivo)** pronta para usar na sua empresa na segunda-feira às 09h00? Criamos a Skill `/criar-workspace-executivo` (`.agent/skills/criar-workspace-executivo/SKILL.md`) que gera automaticamente uma pasta completa estruturada nas **4 camadas do Antigravity** (*Rules + Skills + MCP Server + Automação Agendada + Cockpit Visual*).

Basta copiar e colar o prompt abaixo no chat do Agente *(você pode manter o tema padrão `comite-estrategico-2027` ou trocar pelo desafio real da sua diretoria)*:

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

## 🧪 Laboratório Extra (Para quem terminar antes ou para explorar pós-evento!)

O repositório também inclui **3 Simuladores Executivos completos** prontos para você evoluir usando as Skills `/modo-caos`, `/adaptar-setor` e `/auditoria-executiva`. Cada pasta possui um **`README.md` autoguiado com 4 missões passo a passo**:

1. **[`tracks/01-crisis-commander/README.md`](tracks/01-crisis-commander/README.md):** Jogo de tomada de decisão sob incerteza (estilo *Reigns*) ao longo de 8 trimestres (2026–2027).
2. **[`tracks/02-orbital-defense/README.md`](tracks/02-orbital-defense/README.md):** Jogo arcade tático em HTML5 Canvas (60 FPS) com escudos, Pulso EMP e Piloto Automático de IA.
3. **[`tracks/03-boardroom-simulator/README.md`](tracks/03-boardroom-simulator/README.md):** Simulador C-Level de Conselho de Administração com Matriz Risco x Retorno e votos de CFO, CTO e CRO.

---

## 🔄 Como Resetar o Workshop para uma Nova Demonstração (`reset_workshop.py`)

Terminou de executar as trilhas e quer restaurar as pastas `tracks/04-flappy-hero/` e `tracks/05-radar-mcp-brasil/` ao seu **estado inicial limpo (Blueprint Launchpad)** para demonstrar o workshop novamente à sua equipe? Basta rodar na raiz do repositório:

```bash
python3 reset_workshop.py
```
