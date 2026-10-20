# AGENTS.md — AI Bootcamp 2026 (Singularity Brazil) | Google Antigravity Workshop

Este repositório contém o kit prático (*Starter Kit*) de 3 trilhas interativas para o workshop de **Google Antigravity** no **AI Bootcamp 2026 (Singularity Brazil)**.

## Estrutura do Projeto

- `index.html` / `hub.css`: Portal inicial (Launchpad) que conecta as 3 trilhas do workshop.
- `tracks/01-crisis-commander/`: **Trilha 1 — Crisis Commander** (Jogo de estratégia e tomada de decisão executiva sob incerteza).
- `tracks/02-orbital-defense/`: **Trilha 2 — Antigravity Orbital Defense** (Jogo arcade/estratégia visual em HTML5 Canvas com telemetria e piloto automático).
- `tracks/03-boardroom-simulator/`: **Trilha 3 — Boardroom War Room** (Simulador executivo de Conselho de Administração e estresse de cenários).
- `.agent/rules/`: Regras de governança e padrões de código do projeto.
- `.agent/workflows/`: Workflows reutilizáveis acionáveis via comandos `/` no chat do Antigravity.

## Diretrizes Obrigatórias para Agentes

1. **Zero Dependências Externas (Zero-Setup):**
   - Todo o código deve usar exclusivamente **HTML5, CSS3 (Vanilla CSS) e JavaScript puro (ES6+)**.
   - Não introduza `npm`, bundlers ou bibliotecas externas que exijam instalação de pacotes, garantindo execução imediata no navegador ou via `python3 -m http.server`.
2. **Idioma e Tom:**
   - Toda a interface (UI), textos dos jogos/simuladores, planos (*Implementation Plans*) e relatórios (*Walkthroughs*) devem ser redigidos em **Português (PT-BR)**, com linguagem clara, executiva e engajadora.
3. **Testabilidade para o Browser Sub-Agent:**
   - Todos os botões, controles, cartões de decisão e indicadores devem possuir atributos `id` descritivos e únicos (ex.: `#btn-start-game`, `#btn-choice-a`, `#metric-cash`) para facilitar a automação e verificação visual pelo **Browser Sub-Agent**.
4. **Preservação Funcional:**
   - Ao adicionar novas funcionalidades em qualquer uma das 3 trilhas, mantenha a aplicação 100% funcional sem erros no console (`console.error`). Sempre valide as alterações abrindo a página correspondente no navegador quando solicitado.
