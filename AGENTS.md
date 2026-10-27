# AGENTS.md — AI Bootcamp 2026 (Singularity Brazil) | Google Antigravity Workshop

Este repositório contém o laboratório prático (*Hands-On Self-Paced*) para o workshop de **Google Antigravity** no **AI Bootcamp 2026 (Singularity Brazil)**.

## Estrutura do Projeto

- `index.html` / `hub.css`: Portal inicial (Mission Hub) que guia a jornada do participante.
- `slides.html`: Apresentação de palco interativa (14 slides com Speaker Notes e cronômetro).
- `tracks/04-flappy-hero/`: **Ato 1 & Ato 3 (Trilha Principal) — Flappy Executive Bird: Escapando da Burocracia**. Começa quase vazia (`README.md`, `LEIAME_PRIMEIRO.md` e `index.html` de blueprint) para que o participante gere a especificação (`SPEC_JOGO.md`), dispare a construção do jogo completo do zero em background (com o clássico pássaro estilo *Flappy Bird* e obstáculos corporativos com placas grandes e bem legíveis) e, no Ato 3, volte para inspecionar o *Walkthrough* e jogar o resultado pronto!
- `mcp/mcp_brasil_zero_deps.py` & `tracks/05-radar-mcp-brasil/`: **Ato 2 (Caso Prático com Servidor MCP Brasil)**. Enquanto o jogo Flappy Bird é construído em background na Conversa 1, o participante abre uma 2ª conversa no *Antigravity 2.0* e usa o servidor MCP Brasil (zero dependências, conectado à Receita Federal/BrasilAPI e ao Banco Central) para consultar o CNPJ real da sua empresa + Selic/IPCA/Dólar de hoje e construir um **Painel Executivo de Inteligência Macroeconômica e Setorial** em `tracks/05-radar-mcp-brasil/`.
- `tracks/01-crisis-commander/`, `tracks/02-orbital-defense/`, `tracks/03-boardroom-simulator/`: **Laboratório Extra (3 Simuladores Completos)** disponíveis no repositório para exploração adicional durante ou após o evento.
- `.agent/rules/`: Regras de governança e padrões de código do projeto (sempre ativas no contexto).
- `.agent/skills/` (e `.agents/skills/`): **Skills com Descoberta Semântica Sob Demanda (*Progressive Disclosure*)** — cada pasta contém um `SKILL.md` que o Antigravity descobre automaticamente pelo contexto da conversa ou via comando `/`:
  - `/radar-mcp-brasil` → `.agent/skills/radar-mcp-brasil/SKILL.md`
  - `/criar-workspace-executivo` → `.agent/skills/criar-workspace-executivo/SKILL.md` (Laboratório Extra)
  - `/modo-caos` → `.agent/skills/modo-caos/SKILL.md` (Laboratório Extra)
  - `/adaptar-setor` → `.agent/skills/adaptar-setor/SKILL.md` (Laboratório Extra)
  - `/auditoria-executiva` → `.agent/skills/auditoria-executiva/SKILL.md` (Laboratório Extra)
- `.agent/workflows/`: Espelho de compatibilidade dos workflows acionáveis via comandos `/`.

## Diretrizes Obrigatórias para Agentes

1. **Zero Dependências Externas e Economia de Tokens:**
   - Todo o código web deve usar exclusivamente **HTML5, CSS3 (Vanilla CSS) e JavaScript puro (ES6+)**, mantendo os arquivos enxutos, diretos e bem estruturados para rápida geração.
   - O servidor MCP em `mcp/mcp_brasil_zero_deps.py` utiliza apenas a biblioteca padrão do Python 3 (pode ser registrado via `stdio` no `mcp_config.json` ou invocado via terminal com `--test-cli <CNPJ>`).
2. **Idioma e Tom:**
   - Toda a interface (UI), textos dos jogos/simuladores, especificações (`SPEC_JOGO.md`), planos (*Implementation Plans*) e relatórios (*Walkthroughs*) devem ser redigidos em **Português (PT-BR)**, com linguagem clara, executiva e engajadora.
3. **Diretrizes para a Trilha `tracks/04-flappy-hero/`:**
   - Construa `index.html`, `style.css` e `game.js` com física suave (60fps), um **pássaro clássico estilo Flappy Bird** desenhado no Canvas (corpo amarelo-ouro, olho grande expressivo, bico laranja e asinha branca batendo) e obstáculos corporativos bem-humorados (*"Reunião que podia ser e-mail"*, *"Planilha V14_FINAL.xlsx"*, *"Sistema Legado"*, *"Orçamento Congelado"*, *"Aprovação em 7 Níveis"*, *"Silo Organizacional"*).
   - **Legibilidade dos Rótulos dos Obstáculos:** Nunca esprema o texto verticalmente ou em fonte pequena dentro dos canos. Desenhe placas/etiquetas horizontais largas de alto contraste (`bold 16px sans-serif`, texto branco/amarelo sobre fundo escuro com borda destacada) na extremidade de cada obstáculo e exiba no topo do Canvas um banner grande com o nome da próxima barreira (`⚠️ Próxima Burocracia: ...`).
   - **Execução Rápida (Sem Botão de Piloto Automático):** Não implemente botão de piloto automático (`#btn-autopilot`). Na validação via *Browser Sub-Agent*, faça apenas **1 visita rápida**: abra o jogo, dê 1 clique/Espaço para verificar que o Canvas, o pássaro clássico e os rótulos renderizaram sem erros no console, capture **1 screenshot** e gere imediatamente o *Walkthrough Artifact* (não fique jogando várias partidas no navegador).
4. **Diretrizes para a Trilha `tracks/05-radar-mcp-brasil/`:**
   - Sempre consulte os dados reais executando o servidor MCP `mcp/mcp_brasil_zero_deps.py` (via tool MCP ou via comando `python3 mcp/mcp_brasil_zero_deps.py --test-cli <CNPJ>`) antes de gerar o painel executivo da empresa.
   - Na validação via *Browser Sub-Agent*, faça apenas **1 visita rápida** para verificar que o painel renderizou sem erros no console e capturar **1 screenshot** para o *Walkthrough Artifact* (evite múltiplas interações longas com sliders para economizar tempo e tokens).
