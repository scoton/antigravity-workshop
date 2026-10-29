# 🚀 AI Bootcamp 2026 (Singularity Brazil) — Workshop Prático: Google Antigravity

Bem-vindo(a) ao laboratório prático (**Self-Paced Hands-On**) do **AI Bootcamp 2026**!

Neste workshop de **~33 minutos**, você vai experimentar na prática a transição da fase de **Copilotos (Assistência Individual)** para a **Orquestração Agêntica (Centro de Comando)** usando o **Google Antigravity**.

> **A Coreografia em 3 Atos de Hoje ("O Forno Assíncrono"):**
> 1. **Ato 1 (`04-flappy-hero`):** Você atua como Arquiteto de Produto, gera uma especificação enxuta (`SPEC_JOGO.md`) e coloca o **Agente 1** para construir e testar um jogo inteiro do zero em background (*Flappy Executive Bird: Escapando da Burocracia*).
> 2. **Ato 2 (`05-radar-mcp-brasil`):** Sem ficar esperando o jogo terminar, você abre uma **2ª conversa em paralelo** no Antigravity 2.0 e comanda o **Agente 2** conectado a um **Servidor MCP Brasil** que consulta em tempo real o **CNPJ real da sua empresa na Receita Federal** + as taxas de hoje do **Banco Central (Selic, CDI, IPCA e Dólar)** para construir um **Painel Executivo de Inteligência Macroeconômica**!
> 3. **Ato 3 (`04-flappy-hero`):** Você volta para a 1ª conversa, audita o **Walkthrough Artifact** gerado pelo Agente 1 e se diverte jogando o seu **Flappy Bird pronto** desviando das burocracias corporativas!

---

## 🧭 Mapa do Repositório (Guias Autoguiados por Trilha)

Cada trilha possui o seu próprio **`README.md` com o passo a passo completo e prompts prontos para copiar e colar**, permitindo que qualquer pessoa execute todo o workshop por conta própria mesmo sem ter participado presencialmente do evento:

| Módulo / Trilha | Pasta e Guia Passo a Passo | O que você vai construir e operar |
| :--- | :--- | :--- |
| **🐤 Trilha 04 (Atos 1 e 3): Flappy Executive Bird** | [`tracks/04-flappy-hero/README.md`](tracks/04-flappy-hero/README.md) | **Começa quase vazia!** Você gera a especificação estruturada (`SPEC_JOGO.md`), dispara a construção autônoma do jogo em background (com o clássico pássaro estilo *Flappy Bird* e obstáculos corporativos com placas grandes e bem legíveis) e no Ato 3 volta para ver o resultado pronto e jogar! |
| **🇧🇷 Trilha 05 (Ato 2): Radar Executivo MCP Brasil** | [`tracks/05-radar-mcp-brasil/README.md`](tracks/05-radar-mcp-brasil/README.md)<br>*(+ [`mcp/README.md`](mcp/README.md))* | Conecta um segundo agente em paralelo a dados oficiais brasileiros em tempo real (**CNPJ na Receita Federal + Selic, CDI, IPCA e Dólar no Banco Central**) para construir um Dashboard Executivo personalizado para a sua empresa e agendar com `/automation`! |
| **🏛️ Trilha 01 (Lab Extra 01): Crisis Commander** | [`tracks/01-crisis-commander/README.md`](tracks/01-crisis-commander/README.md) | Simulador executivo de decisão sob incerteza (estilo *Reigns*) ao longo de 8 trimestres (2026–2027), com 4 missões práticas (`/adaptar-setor`, `/modo-caos`, Comitê de IA e `/auditoria-executiva`). |
| **🛡️ Trilha 02 (Lab Extra 02): Orbital Defense (60 FPS)** | [`tracks/02-orbital-defense/README.md`](tracks/02-orbital-defense/README.md) | Jogo arcade tático em HTML5 Canvas com escudos, Pulso EMP e Piloto Automático IA, com 4 missões práticas (*Boss Fight* Cisne Negro, *Power-Ups* Executivos, Riscos do Setor e *Stress Test*). |
| **📊 Trilha 03 (Lab Extra 03): Boardroom War Room** | [`tracks/03-boardroom-simulator/README.md`](tracks/03-boardroom-simulator/README.md) | Simulador C-Level de Conselho de Administração com Matriz Risco × Retorno e votos de CFO, CTO e CRO, com 4 missões práticas (4º Conselheiro CISO/LGPD, *Stress Test* Macroeconômico, Portfólio Real e Ata Executiva). |
| **🏗️ Trilha 06 (Lab Extra 04): Workspace Executivo** | [`tracks/06-workspace-executivo/README.md`](tracks/06-workspace-executivo/README.md) | Gerador automatizado de Sala de Guerra Digital (`workspaces-executivos/<nome>/`) estruturada nas 4 camadas do Antigravity (*Rules + Skills + MCP + Automação*) via `/criar-workspace-executivo`, acompanhado de 4 missões práticas passo a passo. |

---

## 🏛️ Anatomia de um "Workspace Executivo" no Google Antigravity

Um **Workspace** no Antigravity não serve apenas para equipes de engenharia de software — ele é uma **"Sala de Guerra Digital" (War Room)** que você pode criar para qualquer iniciativa estratégica (ex.: `planejamento-2027/`, `comite-m-and-a/`, `inteligencia-setorial/`).

> 💡 **Escopo Global (`~/.gemini/`) vs. Escopo do Workspace (Pasta do Projeto):** Configurações na pasta do seu usuário valem para todos os seus projetos pessoais; já tudo o que está **dentro da pasta do Workspace** tem prioridade máxima e **viaja junto no Git/ZIP** quando você compartilha a pasta com a sua diretoria!

Observe como este próprio repositório está organizado nas **4 camadas executivas** do Antigravity:

| Camada no Workspace | Onde Fica | Papel na Organização Agêntica |
| :--- | :--- | :--- |
| **1. Rules (`AGENTS.md` & `.agents/rules/`)** | Raiz e `.agents/rules/` | **Governança Sempre Ativa:** O "Código de Conduta e Compliance" injetado automaticamente no *System Prompt* que todo agente lê obrigatoriamente antes de agir. |
| **2. Skills (`.agents/skills/<nome>/SKILL.md`)** | `.agents/skills/` *(e `.agent/skills/`)* | **Playbooks Sob Demanda (*Progressive Disclosure*):** Em repouso, o agente lê apenas o cabeçalho YAML (`name` e `description`), gastando quase zero memória. O playbook completo só é carregado quando o tema surge na conversa **ou** via comando `/` (`/radar-mcp-brasil`, `/modo-caos`, `/adaptar-setor`, `/auditoria-executiva`). |
| **3. MCP Servers (`.gemini/settings.json` + `mcp/`)** | `mcp/mcp_brasil_zero_deps.py` | **Conexão com Dados Reais:** Protocolo universal (JSON-RPC) que conecta os agentes a APIs oficiais (Receita Federal, Banco Central) ou sistemas internos da sua empresa. |
| **4. Automations (`/automation`)** | `~/.gemini/config/sidecars/<id>/sidecar.json` | **Execução Recorrente com Governança (*Zero Cheque em Branco*):** Agentes agendados (Cron com `CRON_TZ=America/Sao_Paulo`) que passam por um **Test Run** assistido para gravar permissões estritas (`access_grants` sem curingas) e são gerenciados no **Automations Dashboard (`sidecar://dashboard`)**. |

---

## ⏱️ Roteiro Self-Paced em 3 Atos (33 Minutos)

### 🏁 Preparação Rápida no Antigravity 2.0 (2 minutos — Sem IDE e Zero Conhecimento Técnico!)

Neste workshop usamos a nova interface do **Google Antigravity 2.0 (Agent Manager / Hub, sem a IDE de código)**. Você **não precisa saber programar nem usar linha de comando** — escolha abaixo a forma mais fácil para começar:

1. **Abra o Workshop no Google Antigravity 2.0:**
   - **Opção A (Recomendada — Zero Consumo de Tokens!) — Baixando o `.zip` e Vinculando a Pasta no Antigravity 2.0 (Sem IDE):**
     1. No topo desta página do GitHub, clique no botão verde **`<> Code` → `Download ZIP`** e extraia o arquivo `.zip` no seu computador (criando a pasta `antigravity-workshop`).
     2. Na interface do **Antigravity 2.0**, clique no seletor **`Select Project`** (na barra inferior da caixa de chat) **ou** no ícone de pasta com **`+`** no topo da barra lateral esquerda:
        - Se aparecer **`New Project`** *(Select a folder)*: clique nele e escolha a pasta `antigravity-workshop` que você extraiu!
        - Se aparecer **`Create Project` / `Create New Project`** *(ou pelo menu superior `File` → `Create Project`)*: clique em **`+ Add Folder`**, selecione a pasta `antigravity-workshop`, clique em **`Next`**, dê um nome ao projeto e clique em **`Create`**.
   - **Opção B — Pelo Agente via `Quick Start` (Alternativa — Consome Tokens da Sua Cota):**
     1. Na interface do **Antigravity 2.0**, clique em **`Create New Project`** (no seletor de projeto ou no ícone de pasta **`+`** da barra lateral esquerda) e, na janela que abrir, selecione **`Quick Start`**.
     2. Em seguida, cole esta frase no chat para o próprio Agente baixar o workshop e abrir o portal para você:
        ```text
        Baixe o repositório https://github.com/scoton/antigravity-workshop (via git clone ou baixando e extraindo o ZIP caso não tenha git), inicie um servidor web local na porta 8080 dentro da pasta do workshop em background e abra o index.html no navegador para começarmos!
        ```
   - **Opção C — Via Terminal/Git (Opcional):**
     ```bash
     git clone https://github.com/scoton/antigravity-workshop.git
     cd antigravity-workshop
     ```
2. **Abra o Portal Interativo do Workshop (`index.html`):**
   - Se você usou a **Opção A** (ou **C**), dê **dois cliques** no arquivo `index.html` dentro da pasta para abri-lo no navegador (ou acompanhe os prompts diretamente por este `README.md` no GitHub — o próprio Agente iniciará o servidor na porta `8080` durante os Atos 1 e 2!).
3. **💡 4 Dicas de Ouro para Iniciantes no Antigravity 2.0 (Importante para Cota & Velocidade!):**
   - **⚡ Escolha o Modelo `Gemini 3.8 Flash` (Recomendado):** Na barra inferior da caixa de chat (ao lado do seletor de projeto), clique no **Seletor de Modelo** e escolha **`Gemini 3.8 Flash (High)`** ou **`Gemini 3.8 Flash (Medium)`** (ou `Gemini 3.8 Flash`, caso disponível). Modelos como *Gemini 4 Argon* ou de terceiros (*Claude*) consomem até **3x mais créditos** por requisição e podem esgotar rapidamente a franquia gratuita no meio do workshop. O **Gemini 3.8 Flash** é muito mais rápido para construir os jogos/dashboards e garante créditos de sobra para concluir todos os Atos e Laboratórios Extras!
   - **Onde colar os Prompts:** Todos os blocos cinzas de texto abaixo devem ser copiados e colados na **caixa de Chat do Agente** no Antigravity.
   - **Botões `Proceed` / `Accept` / `Allow`:** Sempre que o Antigravity criar um plano (*Implementation Plan*) ou pedir permissão para rodar um comando / abrir o navegador, aparecerá um botão azul **`Proceed` / `Accept` / `Run`** no chat. **Clique nele** para autorizar o agente a continuar!
   - **Como ter 2 Agentes trabalhando ao mesmo tempo:** Na barra lateral esquerda do **Antigravity 2.0**, basta clicar no botão **`+` (`New Conversation`)** (ou pressionar `Cmd/Ctrl + E`) para abrir uma **2ª conversa em paralelo** e alternar entre o **Agente 1 (Jogo Flappy Hero)** e o **Agente 2 (Radar CNPJ + Banco Central)**!

---

### 📋 ATO 1: O Arquiteto de Produto — *Spec-Driven Development* (7 minutos)

**💡 O Conceito Executivo:** Grandes resultados com agentes autônomos começam com uma **especificação clara de arquitetura, design e critérios de aceite**. Em vez de pedir *"faça um jogo"* de forma vaga, vamos pedir ao Antigravity para primeiro redigir o documento de especificação do produto (`SPEC_JOGO.md`), revisá-lo e então disparar a construção autônoma.

#### Passo 1.1 — Gerar a Especificação do Produto (`SPEC_JOGO.md`)
No painel do Agente, envie o prompt abaixo:

```text
Atue como um Arquiteto de Produto e Games. Crie dentro da pasta @tracks/04-flappy-hero/ um arquivo bem estruturado chamado SPEC_JOGO.md contendo a especificação completa para desenvolvermos do zero um jogo web (HTML5 Canvas + CSS + JS puro, zero dependências) estilo Flappy Bird chamado "Flappy Executive Bird: Escapando da Burocracia".

A especificação deve detalhar estes 4 pilares:
1. Mecânica, Física e Estados do Jogo: Gravidade suave e fluida (60fps), espaçamento generoso entre obstáculos, telas claras de Início, Em Voo e Game Over, e controle responsivo por Barra de Espaço ou Clique do Mouse (sem modo piloto automático).
2. Obstáculos Bem-Humorados e de Alta Legibilidade: Os "canos" devem ser barreiras corporativas com rótulos divertidos ("Reunião que podia ser e-mail", "Planilha V14_FINAL.xlsx", "Sistema Legado", "Orçamento Congelado", "Aprovação em 7 Níveis" e "Silo Organizacional"). IMPORTANTE PARA LEGIBILIDADE: nunca esprema o texto verticalmente dentro do cano; desenhe placas horizontais largas de alto contraste (fundo escuro com borda neon e fonte grande `bold 16px sans-serif` branca/amarela) centralizadas na boca de cada obstáculo e exiba também no topo do Canvas um banner grande com o nome da próxima barreira ("⚠️ Próxima Burocracia: ...").
3. Personagem Clássico (Pássaro do Flappy Bird): Desenhe diretamente no Canvas uma figura única e carismática do pássaro clássico estilo Flappy Bird original (corpo amarelo-ouro arredondado, olho grande expressivo, bico laranja e asinha branca animada batendo a cada pulo).
4. Efeitos Sonoros e Progressão Executiva: Efeitos sonoros sintetizados via Web Audio API (pulo, ponto marcado e colisão) e placar com recorde salvo em `localStorage` e medalhas executivas (Estagiário, Gerente, Diretor e C-Level).

Apenas crie o documento @tracks/04-flappy-hero/SPEC_JOGO.md primeiro para minha revisão.
```

#### Passo 1.2 — Revisar e Disparar a Construção no "Forno Assíncrono"
1. Abra o arquivo `tracks/04-flappy-hero/SPEC_JOGO.md` criado pelo agente (se quiser, adicione o nome de uma "burocracia interna" famosa da sua empresa na lista de obstáculos!).
2. Agora dispare o **Prompt de Construção Completa** abaixo:

```text
Excelente! Agora implemente o jogo completo dentro de @tracks/04-flappy-hero/ (sobrescrevendo o index.html de blueprint e criando style.css e game.js) seguindo 100% a especificação em @tracks/04-flappy-hero/SPEC_JOGO.md, garantindo que o pássaro clássico do Flappy Bird fique bem desenhado e os rótulos das burocracias fiquem grandes e fáceis de ler nas placas horizontais e no banner superior. Execute todas as etapas diretamente de ponta a ponta sem pausar para confirmações intermediárias.
Quando terminar de criar os arquivos:
1. Garanta que um servidor web local esteja ativo na porta 8080 (em background) e faça uma única visita rápida no Browser Sub-Agent abrindo `http://localhost:8080/tracks/04-flappy-hero/index.html` e dando 1 clique inicial apenas para verificar que o Canvas, o pássaro clássico e o placar renderizaram sem erros no console (não fique jogando várias partidas no navegador).
2. Capture 1 screenshot, gere imediatamente o Walkthrough Artifact e exiba no final da sua resposta o link clicável `http://localhost:8080/tracks/04-flappy-hero/index.html` para eu abrir e jogar!
```

> ⚡ **ATENÇÃO — OLHO NO BOTÃO `PROCEED` E PASSE PARA O ATO 2!**
> - Se o Antigravity exibir um plano (*Implementation Plan*) com um botão azul **`Proceed` / `Approve` / `Accept`**, **clique nele primeiro** para destravar a execução!
> - Assim que você vir que o agente começou a criar os arquivos (`index.html`, `style.css`, `game.js`), **não fique esperando parado:** passe imediatamente para o **Ato 2** abaixo!

---

### 🇧🇷 ATO 2: Conexão com o Mundo Real — *2º Agente em Paralelo, Servidor MCP Brasil & Tour de Bastidores* (18 minutos)

**💡 O Conceito Executivo:** Enquanto seu "Engenheiro Autônomo #1" constrói e valida o *Flappy Executive Bird* em background, você vai usar a barra lateral do **Antigravity 2.0 (Agent Manager)** para iniciar uma **segunda conversa em paralelo** e conectar um agente a **dados oficiais do Brasil em tempo real via MCP (Model Context Protocol)**!

#### Passo 2.1 — Abrir uma Nova Conversa em Paralelo no Antigravity 2.0
1. Na barra lateral esquerda do **Antigravity 2.0**, clique no botão **`+` (`New Conversation`)** ao lado do projeto — ou pressione `Cmd + E` (Mac) / `Ctrl + E` (Windows/Linux).
2. Isso inicia um **segundo agente trabalhando em paralelo** na mesma pasta, sem interromper nem fechar a Conversa 1!

#### Passo 2.2 — Consultar o CNPJ da Sua Empresa + Banco Central via MCP Brasil
Copie e envie o prompt abaixo!
> 💡 **Quer usar o CNPJ da sua empresa (ou um benchmark)?** O prompt já vem configurado com a **WEG S.A. (`84.429.695/0001-11`)** para funcionar em 1 clique. Se quiser analisar a sua empresa ou outro setor, basta trocar o CNPJ na **primeira linha** (ou usar um destes exemplos: **Embraer** `07.689.002/0001-89` • **Itaú** `60.872.504/0001-23` • **Magalu** `47.960.950/0001-21` • **Petrobras** `33.000.167/0001-01` • **RD Saúde** `61.585.865/0001-51`):

```text
Execute a skill @.agent/skills/radar-mcp-brasil/SKILL.md para o CNPJ 84.429.695/0001-11 (WEG S.A. — caso eu tenha mantido este CNPJ padrão, execute imediatamente para a WEG S.A. sem parar para perguntar; caso eu tenha trocado o CNPJ acima, extraia os 14 dígitos dele automaticamente):
1. Utilize o servidor MCP Brasil em @mcp/mcp_brasil_zero_deps.py (rodando `python3 mcp/mcp_brasil_zero_deps.py --test-cli <OS_14_DIGITOS_DO_CNPJ_ACIMA>`) para consultar em tempo real os dados oficiais deste CNPJ na Receita Federal/BrasilAPI (Razão Social, CNAE Principal, Capital Social, Porte, UF e Quadro Societário) e os indicadores atuais do Banco Central (Taxa Selic, CDI, IPCA e Dólar PTAX).
2. Com base nos dados reais retornados, construa diretamente dentro de @tracks/05-radar-mcp-brasil/ um "Painel Executivo de Inteligência Macroeconômica e Setorial" (sobrescrevendo o index.html de blueprint e criando style.css e app.js) personalizado para esta empresa, com simulador interativo de impacto de Selic, Câmbio e IPCA no setor do CNAE dela.
3. Garanta que o servidor web local na porta 8080 esteja ativo, faça uma única visita rápida no Browser Sub-Agent (`http://localhost:8080/tracks/05-radar-mcp-brasil/index.html`) apenas para verificar que o painel renderizou sem erros no console, capture 1 screenshot, gere o Walkthrough Artifact com o diagnóstico estratégico e exiba no final da resposta o link `http://localhost:8080/tracks/05-radar-mcp-brasil/index.html`!
```

*(Nota: Para conhecer também o ecossistema completo do `github.com/mcp-brasil/mcp-brasil` e do `mcp.apibrasil.io`, consulte o guia [`mcp/GUIA_MCP_BRASIL.md`](mcp/GUIA_MCP_BRASIL.md)).*

---

#### 🧭 Passo 2.3 (Enquanto o Agente Constrói o Painel — 5 a 8 min): Tour Guiado de Bastidores no Antigravity 2.0 *(Zero Consumo de Tokens!)*

> ⚠️ **Dica de Ouro (Proteja sua Cota de Tokens!):** O Agente 2 leva cerca de **5 a 10 minutos** para consultar as APIs oficiais da Receita Federal e do Banco Central, programar o dashboard personalizado da sua empresa e validá-lo no navegador. **Enquanto ele trabalha, NÃO envie novos prompts no chat!** Em vez disso, faça as **5 descobertas de bastidores** abaixo na interface do Antigravity 2.0 (elas consomem **ZERO tokens**):

1. **🧠 Descoberta 1 — Abrir a "Caixa Preta" do Raciocínio do Agente (*Thinking* & *Tool Calls*):**
   - No chat da Conversa 2 (ou da Conversa 1), clique nas caixas recolhidas **`Thinking` / `Thought Process`** para ler em tempo real como o agente raciocina: veja como ele analisa o CNAE da sua empresa, planeja o cálculo financeiro de sensibilidade à Selic/Dólar e estrutura o layout antes de escrever o código.
   - Expanda também o bloco **`Running command` (`mcp_brasil_zero_deps.py`)** no chat para inspecionar o **JSON oficial bruto** que acabou de retornar ao vivo da **Receita Federal** e do **Banco Central**!
2. **📐 Descoberta 2 — Inspecionar *Artifacts*, *Implementation Plans* e Comentários Inline:**
   - Clique no `Implementation Plan` ou no arquivo `SPEC_JOGO.md` gerado no chat para abri-lo no painel lateral de **Artifacts**.
   - Passe o mouse sobre qualquer linha do documento: repare no botão **`+` (Add Comment)** que aparece ao lado do parágrafo. É assim que líderes e arquitetos governam agentes no Antigravity: comentando direto em um ponto específico do plano (como no Google Docs) antes de clicar em `Proceed`!
3. **🏛️ Descoberta 3 — Ler os 3 Arquivos que Governam o Seu Workspace nos Bastidores:**
   - Clique nos links abaixo (aqui mesmo no GitHub ou no explorador do projeto) para entender como o seu Workspace sabe o que fazer sem precisar de prompts gigantes:
     - [`AGENTS.md`](AGENTS.md): Veja a **Camada 1 (Rules)** — o "Código de Conduta" injetado automaticamente no *System Prompt* de todas as conversas da equipe.
     - [`.agents/skills/radar-mcp-brasil/SKILL.md`](.agents/skills/radar-mcp-brasil/SKILL.md): Veja na prática o conceito de **Progressive Disclosure** — o cabeçalho YAML (`name` e `description`) no topo gasta quase zero memória em repouso, e o manual completo abaixo só foi carregado agora quando você pediu o Radar!
     - [`.gemini/settings.json`](.gemini/settings.json): Veja como apenas 8 linhas de JSON registram o servidor Python [`mcp/mcp_brasil_zero_deps.py`](mcp/mcp_brasil_zero_deps.py) via protocolo **MCP**.
4. **⚙️ Descoberta 4 — Explorar os Menus de *Customizations*, *MCP* e *Automations* do Antigravity 2.0:**
   - Na barra lateral esquerda do **Antigravity 2.0**, clique nos ícones de **Customizations / Settings** e **Automations**. Veja onde a interface lista visualmente todas as **Skills**, **Rules**, **Plugins** e **Servidores MCP** ativos no seu projeto, além da **Allowlist de Terminal** (que controla quais comandos podem rodar sem pedir confirmação).
5. **🎮 Descoberta 5 — Degustar no Navegador os 3 Simuladores Executivos Prontos (100% Local, Zero Tokens!):**
   - Já explorou a interface e o agente ainda está finalizando a validação no navegador? Você pode jogar agora mesmo (sem acionar a IA e **sem gastar 1 único token**) os 3 simuladores que já vêm prontos no repositório:
     - Se o servidor local na porta `8080` já estiver ativo, acesse no navegador: `http://localhost:8080/tracks/01-crisis-commander/index.html`, `http://localhost:8080/tracks/02-orbital-defense/index.html` ou `http://localhost:8080/tracks/03-boardroom-simulator/index.html` *(ou dê **dois cliques** no arquivo `index.html` dentro dessas pastas no seu computador!)*.

---

#### Passo 2.4 (Próximo Nível — 2 min): Agendar como Automação Recorrente com Governança (`/automation`)
Assim que o Agente 2 concluir o painel da sua empresa (você pode abri-lo em `http://localhost:8080/tracks/05-radar-mcp-brasil/index.html` ou dando dois cliques em `tracks/05-radar-mcp-brasil/index.html`), experimente agendar uma rotina para que, toda **segunda-feira às 08h00**, um agente autônomo consulte o Banco Central e atualize seu briefing:

```text
/automation Configure uma automação semanal toda segunda-feira às 08h00 (fuso America/Sao_Paulo) para consultar os indicadores atualizados do Banco Central (Selic, CDI, IPCA e Dólar) via python3 mcp/mcp_brasil_zero_deps.py --test-cli 84429695000111 e atualizar o resumo executivo da minha empresa em tracks/05-radar-mcp-brasil/.
```

> 🛡️ **Como funciona a Governança de Automações no Antigravity (*Zero Cheque em Branco*):**
> Quando você aciona `/automation`, o Antigravity não dá um "cheque em branco" para a IA rodar comandos invisíveis no seu computador. Observe as 3 etapas que acontecem:
> 1. **Prompt Autossuficiente & Cron (`CRON_TZ=America/Sao_Paulo 0 8 * * 1`):** Cada execução agendada abre uma nova conversa limpa (`agentapi new-conversation`).
> 2. **Test Run Obrigatório (Calibragem de Permissões):** Como agentes rodando em background têm qualquer comando não autorizado bloqueado automaticamente, o Antigravity faz **1 execução de teste assistida (Test Run)** agora com você para gravar no arquivo `sidecar.json` **apenas as permissões exatas** necessárias (`workspace_uris` e `access_grants` específicos, proibindo curingas como `command(*)`).
> 3. **Painel de Controle (`sidecar://dashboard`):** Ao final, ele exibe o botão **[Open Automations Dashboard](sidecar://dashboard)**, onde você pode ligar/pausar o agendamento, clicar em **Run Now** ou auditar o histórico de todas as execuções!

---

### 🐤 ATO 3: O Retorno à Conversa 1 — *Inspeção do Walkthrough & Playtest do Flappy Bird!* (6 minutos)

**💡 O Conceito Executivo (*Zero Tokens Extras!*):** Agora olhe para a barra lateral esquerda do **Antigravity 2.0** (ou pressione `Cmd/Ctrl + E`) e clique de volta na sua **primeira conversa** (a da Trilha `04-flappy-hero`).

Enquanto você analisava dados da Receita Federal e do Banco Central na Conversa 2, o seu **Agente 1** trabalhou em background:
1. Programou todo o jogo *Flappy Executive Bird* seguindo a sua especificação (`SPEC_JOGO.md`);
2. Abriu o navegador sozinho via **Browser Sub-Agent** e validou que o pássaro clássico e os obstáculos corporativos renderizaram sem erros;
3. Entregou o **Walkthrough Artifact** com a prova visual (screenshot) do jogo funcionando!

#### Como Jogar e Testar Agora (Funciona pelo GitHub ou pelo Hub Local!):
1. Abra o seu jogo pronto no navegador por qualquer um destes 3 caminhos:
   - **Caminho 1 (Link Direto Local):** Acesse `http://localhost:8080/tracks/04-flappy-hero/index.html` (clique no link entregue pelo Agente 1 no final da conversa);
   - **Caminho 2 (Pelo Computador):** Dê **dois cliques** no arquivo `tracks/04-flappy-hero/index.html` na pasta onde você extraiu o workshop;
   - **Caminho 3 (Pelo Mission Hub):** Se estiver com `http://localhost:8080/index.html` aberto, clique em **🎮 Abrir Jogo / Blueprint →**.
2. Jogue usando a **Barra de Espaço** ou **Clique do Mouse** para desviar de *"Reunião que podia ser e-mail"*, *"Planilha V14_FINAL.xlsx"* e *"Aprovação em 7 Níveis"*, e tente conquistar a medalha máxima de **C-Level**!

> 💡 **Memória Organizacional (Transformando Conversas em Skills):** Sempre que você e sua equipe descobrirem um fluxo de alto valor no Antigravity, não deixe o conhecimento morrer no histórico do chat! Basta pedir: *"Transforme o fluxo que acabamos de executar em uma nova Skill reutilizável dentro de `.agent/skills/` para toda a equipe."*

---

## 🧪 Laboratório Extra (Para quem terminar antes ou para explorar pós-evento!)

O repositório também inclui **4 Laboratórios Extras autoguiados** (3 simuladores executivos completos e 1 construtor de Workspace Executivo) para você explorar no seu próprio ritmo:

1. **🏛️ Laboratório Extra 01 — Crisis Commander ([`tracks/01-crisis-commander/README.md`](tracks/01-crisis-commander/README.md)):** Simulador executivo de tomada de decisão sob incerteza (estilo *Reigns*) ao longo de 8 trimestres (2026–2027), acompanhado de 4 missões práticas passo a passo (`/adaptar-setor`, `/modo-caos`, Comitê de IA e `/auditoria-executiva`).
2. **🛡️ Laboratório Extra 02 — Orbital Defense ([`tracks/02-orbital-defense/README.md`](tracks/02-orbital-defense/README.md)):** Jogo arcade tático em HTML5 Canvas (60 FPS) com escudos, Pulso EMP e Piloto Automático de IA, acompanhado de 4 missões práticas passo a passo (*Boss Fight* Cisne Negro, *Power-Ups* Executivos, Riscos do Setor e *Stress Test*).
3. **📊 Laboratório Extra 03 — Boardroom War Room ([`tracks/03-boardroom-simulator/README.md`](tracks/03-boardroom-simulator/README.md)):** Simulador C-Level de Conselho de Administração com Matriz Risco × Retorno e votos de CFO, CTO e CRO, acompanhado de 4 missões práticas passo a passo (4º Conselheiro CISO/LGPD, *Stress Test* Macroeconômico, Portfólio Real e Ata Executiva).
4. **🏗️ Laboratório Extra 04 — Construtor de Workspace Executivo ([`tracks/06-workspace-executivo/README.md`](tracks/06-workspace-executivo/README.md)):** Gerador automatizado de Sala de Guerra Digital (`workspaces-executivos/<nome>/`) estruturada nas 4 camadas do Antigravity (*Rules + Skills + MCP + Automação*), acompanhado de 4 missões práticas passo a passo (`/criar-workspace-executivo`, Alçadas LGPD, Skill de Benchmarking M&A e `/automation`).

---

## 🔄 Como Resetar o Workshop para uma Nova Demonstração (`reset_workshop.py`)

Terminou de executar as trilhas e quer restaurar as pastas `tracks/04-flappy-hero/` e `tracks/05-radar-mcp-brasil/` ao seu **estado inicial limpo (Blueprint Launchpad)** para demonstrar o workshop novamente à sua equipe? Basta rodar na raiz do repositório:

```bash
python3 reset_workshop.py
```
