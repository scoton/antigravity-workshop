# 🚀 AI Bootcamp 2026 (Singularity Brazil) — Workshop Prático: Google Antigravity

Bem-vindo(a) ao laboratório prático (**Self-Paced Hands-On**) do **AI Bootcamp 2026**!

Neste workshop de **~33 minutos**, você vai experimentar na prática a transição da fase de **Copilotos (Assistência Individual)** para a **Orquestração Agêntica (Centro de Comando)** usando o **Google Antigravity**.

> **A Dinâmica "Forno Assíncrono" de Hoje:**
> Na vida real, um líder não fica parado olhando a tela enquanto sua equipe trabalha.
> Por isso, você vai começar na **Trilha Principal (`04-flappy-hero`)** gerando uma especificação completa e colocando um Agente para **construir um jogo inteiro do zero em background**. Enquanto esse primeiro agente programa e testa o jogo sozinho, você vai abrir o **Agent Manager (`Cmd/Ctrl + E`)** e comandar um **segundo agente em paralelo** em um dos nossos 3 Simuladores Executivos. Minutos depois, você voltará para ver o jogo pronto e transformar uma **selfie sua em uma caricatura de Super-Herói/Super-Heroína** dentro do jogo!

---

## 🧭 Mapa do Repositório

| Papel no Workshop | Pasta no Repositório | O que tem dentro |
| :--- | :--- | :--- |
| **🦸‍♂️ Trilha Principal de Abertura: Flappy Executive Hero** *(Comece por aqui!)* | `tracks/04-flappy-hero/` | **Quase vazia de propósito!** Contém apenas o utilitário de webcam (`selfie-studio.html`). Você vai pedir ao Antigravity para criar a especificação (`SPEC_JOGO.md`) e construir o jogo completo do zero! |
| **♟️ Simulador Paralelo 01: Crisis Commander** | `tracks/01-crisis-commander/` | **Starter Kit Funcional:** Jogo de decisão estratégica (estilo *Reigns*) atravessando crises de 2026–2027. |
| **🛸 Simulador Paralelo 02: Orbital Defense** | `tracks/02-orbital-defense/` | **Starter Kit Funcional:** Jogo arcade e tático em HTML5 Canvas (60 FPS) com escudos, Pulso EMP e Piloto IA. |
| **🏛️ Simulador Paralelo 03: Boardroom War Room** | `tracks/03-boardroom-simulator/` | **Starter Kit Funcional:** Simulador C-Level de Conselho de Administração com votos de CFO, CTO e CRO. |

---

## ⏱️ Roteiro Self-Paced em 3 Atos (33 Minutos)

### 🏁 Preparação Rápida (2 minutos)

1. Baixe/Clone este repositório e abra a pasta no **Google Antigravity**:
   ```bash
   git clone https://github.com/scoton/antigravity-workshop.git
   cd antigravity-workshop
   ```
2. Para visualizar o portal inicial no navegador, rode no terminal (ou peça ao agente):
   ```bash
   python3 -m http.server 8080
   ```
   *(Ou simplesmente abra o arquivo `index.html` diretamente no navegador).*

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
1. Abra o arquivo `tracks/04-flappy-hero/SPEC_JOGO.md` que o agente acabou de criar (se quiser, adicione o nome de uma "burocracia interna" famosa da sua empresa na lista de obstáculos!).
2. Agora dispare o **Prompt de Construção Completa** abaixo:

```text
Excelente! Agora implemente o jogo completo dentro de @tracks/04-flappy-hero/ (criando index.html, style.css e game.js) seguindo 100% a especificação em @tracks/04-flappy-hero/SPEC_JOGO.md.
Quando terminar de criar os arquivos:
1. Abra o jogo no Browser Sub-Agent.
2. Ative o botão de Piloto Automático IA (#btn-autopilot) para jogar automaticamente por alguns segundos, verificando que o herói desvia dos obstáculos corporativos e marca pontos sem erros no console.
3. Gere um Walkthrough Artifact com screenshots do jogo funcionando!
```

> ⚡ **ATENÇÃO — NÃO FIQUE ESPERANDO!** Assim que o agente começar a trabalhar nesse comando (o que levará cerca de 3 a 4 minutos), **passe imediatamente para o Ato 2 abaixo!**

---

### ⚡ ATO 2: O Maestro Multitarefa — *Agent Manager & Simulação Paralela* (14 minutos)

**💡 O Conceito Executivo:** Enquanto seu "Engenheiro Autônomo #1" constrói e testa o *Flappy Executive Hero* do zero em background, você vai abrir o **Centro de Comando (Agent Manager)** e liderar uma segunda frente estratégica em paralelo!

#### Passo 2.1 — Abrir uma Nova Frente no Agent Manager
1. Pressione `Cmd + E` (Mac) ou `Ctrl + E` (Windows/Linux) para abrir o **Agent Manager**.
2. Clique em **New Conversation / Novo Agente** para iniciar um segundo agente trabalhando em paralelo (enquanto o primeiro continua construindo seu Flappy Hero!).

#### Passo 2.2 — Evoluir um Simulador Executivo com *Planning Mode* & *Comentar no Plano*
Escolha **1 dos 3 Simuladores do Starter Kit** e envie o prompt correspondente abaixo (trocando `[SEU SETOR]` pelo setor real da sua empresa):

<details open>
<summary><b>👉 Opção A: Trilha 01 — Crisis Commander (Jogo de Decisão Estilo Reigns)</b></summary>

```text
Analise o jogo em @tracks/01-crisis-commander/ e crie um Implementation Plan para duas melhorias estratégicas:
1. Personalize os cenários de crise para o setor de [SEU SETOR, ex: Finanças / Varejo / Saúde / Agro], criando 4 novos dilemas hiper-realistas para 2026-2027.
2. Adicione um botão "Consultor IA do Board" (com limite de 2 usos por partida) que analisa o dilema atual e destaca visualmente a decisão que melhor protege a empresa contra falência, explicando o trade-off.
Apresente primeiro o Implementation Plan para minha revisão.
```
</details>

<details>
<summary><b>👉 Opção B: Trilha 02 — Antigravity Orbital Defense (Arcade Canvas)</b></summary>

```text
Analise o jogo em @tracks/02-orbital-defense/ e crie um Implementation Plan para duas melhorias:
1. Crie um sistema de "Drones Autônomos de Defesa": a cada 150 pontos, o jogador pode lançar um drone orbital que orbita a estação e intercepta ameaças automaticamente.
2. Adicione um evento de "Alerta de Boss Setorial" a cada 3 ondas, com barra de vida própria e escudo regenerativo.
Apresente primeiro o Implementation Plan para minha revisão.
```
</details>

<details>
<summary><b>👉 Opção C: Trilha 03 — Boardroom War Room (Simulador de Conselho)</b></summary>

```text
Analise o simulador em @tracks/03-boardroom-simulator/ e crie um Implementation Plan para duas melhorias:
1. Adicione 3 novos cenários pré-configurados específicos para o setor de [SEU SETOR, ex: Finanças / Varejo / Saúde / Agro].
2. Crie um recurso de "Simulação de 3 Cenários (Otimista, Base e Estresse Severo)": ao rodar a simulação, mostre lado a lado as 3 projeções e indique qual conselheiro veta ou aprova cada cenário.
Apresente primeiro o Implementation Plan para minha revisão.
```
</details>

3. **Interaja com o Implementation Plan:**
   - Quando o plano abrir, **passe o mouse sobre um parágrafo, adicione um comentário inline** (ex.: *"Destaque em vermelho quando qualquer indicador ficar crítico"*) e clique em **Proceed / Approve**.
4. **Teste os Workflows de Governança (`.agent/workflows/`):**
   - Experimente digitar `/modo-caos` ou `/auditoria-executiva` nessa conversa para ver como playbooks corporativos funcionam!

---

### 🦸‍♂️ ATO 3: O Retorno Triunfal & Sua Caricatura de Super-Herói (10 minutos)

**💡 O Conceito Executivo:** Agora volte ao **Agent Manager (`Cmd/Ctrl + E`)** e clique na sua **primeira conversa** (a da Trilha `04-flappy-hero`). Veja que, enquanto você trabalhava em outra frente, o agente construiu o jogo completo, abriu o navegador, testou com o Piloto IA e entregou o **Walkthrough Artifact** com screenshots!

Agora vamos para o grand finale: **colocar você mesmo como o Super-Herói/Super-Heroína do jogo!**

#### Passo 3.1 — Capturar Sua Selfie Rápida (1 minuto)
1. No navegador, abra `tracks/04-flappy-hero/selfie-studio.html` (disponível no botão do Mission Hub).
2. Clique em **Ligar Webcam → 📸 Capturar Selfie → ⬇️ Baixar `minha-selfie.png`** e salve o arquivo dentro da pasta `tracks/04-flappy-hero/minha-selfie.png` (ou coloque qualquer foto sua nessa pasta).

#### Passo 3.2 — Transformar Sua Selfie em Super-Herói Caricatura!
De volta à conversa da **Trilha 04** no Antigravity, digite `/gerar-super-heroi` ou envie o prompt abaixo:

```text
Execute o workflow @.agent/workflows/gerar-super-heroi.md:
1. Analise a minha foto em @tracks/04-flappy-hero/minha-selfie.png (observando meus traços marcantes como cabelo, óculos, barba, sorriso e expressão).
2. Gere uma versão em estilo Caricatura divertida de Super-Herói / Super-Heroína baseada em mim (salva em `tracks/04-flappy-hero/hero-caricatura.png`).
3. Atualize o jogo em @tracks/04-flappy-hero/ para que o protagonista voando seja o meu Super-Herói Caricatura (com recorte em medalhão/escudo, capa vermelha e dourada esvoaçante animada no Canvas e botão na tela para alternar entre a Caricatura IA e a minha Selfie original!).
4. Abra o jogo no Browser Sub-Agent, faça um voo de teste com o meu Super-Herói desviando das burocracias e gere o Walkthrough com o print final!
```

---

## 🧠 Resumo Executivo: O Que Levamos para a Segunda-Feira?

| O que você fez no Workshop | O que significa para a sua Liderança |
| :--- | :--- |
| **Ato 1: Gerar `SPEC_JOGO.md` antes de codificar** | **Clareza de Intenção (*Spec-Driven*):** Agentes autônomos multiplicam a qualidade da sua especificação. Líderes do futuro são excelentes arquitetos de contexto e critérios de aceitação. |
| **Ato 2: Alternar no `Agent Manager` enquanto o jogo era criado** | **Orquestração Assíncrona:** Pare de trabalhar de forma sequencial esperando respostas de chat. Dispare frentes pesadas em background e multiplique sua capacidade de execução. |
| **Comentários no *Implementation Plan* & *Browser Sub-Agent*** | **Governança por Contratos e Evidências:** Revise planos antes da ação e exija provas visuais automatizadas (*Walkthrough*) na entrega. |
| **Ato 3: Workflows (`.agent/workflows/`) e Multimodalidade** | **Cultura e Processos Reutilizáveis:** Transforme processos complexos em comandos simples (`/gerar-super-heroi`, `/modo-caos`, `/auditoria-executiva`) que qualquer pessoa do time pode acionar. |
