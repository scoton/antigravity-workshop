# AGENTS.md — AI Bootcamp 2026 (Singularity Brazil) | Google Antigravity Workshop

Este repositório contém o laboratório prático (*Hands-On Self-Paced*) para o workshop de **Google Antigravity** no **AI Bootcamp 2026 (Singularity Brazil)**.

## Estrutura do Projeto

- `index.html` / `hub.css`: Portal inicial (Mission Hub) que guia a jornada do participante.
- `slides.html`: Apresentação de palco interativa (14 slides com Speaker Notes e cronômetro).
- `tracks/04-flappy-hero/`: **Trilha Principal de Abertura (Spec-Driven & Assíncrona) — Flappy Executive Hero**. Começa quase vazia (`LEIAME_PRIMEIRO.md` e `selfie-studio.html`) para que o participante gere a especificação (`SPEC_JOGO.md`), dispare a construção do jogo completo do zero, alterne no *Agent Manager* enquanto o agente trabalha, e depois transforme a própria selfie em uma caricatura de Super-Herói!
- `tracks/01-crisis-commander/`: **Trilha Complementar 01 — Crisis Commander** (Jogo de estratégia e tomada de decisão executiva sob incerteza).
- `tracks/02-orbital-defense/`: **Trilha Complementar 02 — Antigravity Orbital Defense** (Jogo arcade/estratégia visual em HTML5 Canvas com telemetria e piloto automático).
- `tracks/03-boardroom-simulator/`: **Trilha Complementar 03 — Boardroom War Room** (Simulador executivo de Conselho de Administração e estresse de cenários).
- `.agent/rules/`: Regras de governança e padrões de código do projeto.
- `.agent/workflows/`: Workflows reutilizáveis acionáveis via comandos `/` no chat do Antigravity (`/gerar-super-heroi`, `/modo-caos`, `/adaptar-setor`, `/auditoria-executiva`).

## Diretrizes Obrigatórias para Agentes

1. **Zero Dependências Externas (Zero-Setup):**
   - Todo o código deve usar exclusivamente **HTML5, CSS3 (Vanilla CSS) e JavaScript puro (ES6+)**.
   - Não introduza `npm`, bundlers ou bibliotecas externas que exijam instalação de pacotes, garantindo execução imediata no navegador ou via `python3 -m http.server`.
2. **Idioma e Tom:**
   - Toda a interface (UI), textos dos jogos/simuladores, especificações (`SPEC_JOGO.md`), planos (*Implementation Plans*) e relatórios (*Walkthroughs*) devem ser redigidos em **Português (PT-BR)**, com linguagem clara, executiva e engajadora.
3. **Diretrizes Específicas para a Trilha `tracks/04-flappy-hero/`:**
   - Quando solicitado a criar o jogo a partir de `SPEC_JOGO.md`, construa `index.html`, `style.css` e `game.js` com física fluida e generosa (gravidade suave, espaçamento amplo entre os obstáculos para ser divertido de jogar).
   - Os obstáculos ("canos") devem exibir rótulos bem-humorados do mundo corporativo (ex.: *"Reunião que podia ser e-mail"*, *"Planilha V14_FINAL.xlsx"*, *"Sistema Legado"*, *"Orçamento Congelado"*, *"Burocracia Setorial"*, *"Aprovação em 7 Níveis"*).
   - Inclua sempre um botão `#btn-autopilot` (**"🤖 Piloto Automático IA"**) que faz o Super-Herói calcular o pulo ideal sozinho para atravessar os obstáculos — facilitando tanto a demonstração quanto os testes automatizados pelo **Browser Sub-Agent**.
   - Inclua suporte a Avatar Customizável (carregando `hero-caricatura.png` / `minha-selfie.png` ou via botão de upload/webcam direto na tela `#btn-upload-hero`) desenhado com capa de super-herói esvoaçante animada no Canvas!
4. **Testabilidade para o Browser Sub-Agent:**
   - Todos os botões, controles, cartões de decisão e indicadores devem possuir atributos `id` descritivos e únicos (ex.: `#btn-start-game`, `#btn-autopilot`, `#btn-upload-hero`) para facilitar a automação e verificação visual pelo **Browser Sub-Agent**.
