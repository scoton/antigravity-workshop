# AGENTS.md — AI Bootcamp 2026 (Singularity Brazil) | Google Antigravity Workshop

Este repositório contém o laboratório prático (*Hands-On Self-Paced*) para o workshop de **Google Antigravity** no **AI Bootcamp 2026 (Singularity Brazil)**.

## Estrutura do Projeto

- `index.html` / `hub.css`: Portal inicial (Mission Hub) que guia a jornada do participante.
- `slides.html`: Apresentação de palco interativa (14 slides com Speaker Notes e cronômetro).
- `tracks/04-flappy-hero/`: **Ato 1 & Ato 3 (Trilha Principal) — Flappy Executive Hero**. Começa quase vazia (`LEIAME_PRIMEIRO.md` e `selfie-studio.html`) para que o participante gere a especificação (`SPEC_JOGO.md`), dispare a construção do jogo completo do zero e, no Ato 3, transforme a própria selfie em uma caricatura de Super-Herói!
- `mcp/mcp_brasil_zero_deps.py` & `tracks/05-radar-mcp-brasil/`: **Ato 2 (Caso Prático com Servidor MCP Brasil)**. Enquanto o Flappy Hero é construído em background na Aba 1, o participante abre uma 2ª conversa no *Agent Manager* e usa o servidor MCP Brasil (zero dependências, conectado à Receita Federal/BrasilAPI e ao Banco Central) para consultar o CNPJ real da sua empresa + Selic/IPCA/Dólar de hoje e construir um **Painel Executivo de Inteligência Macroeconômica e Setorial** em `tracks/05-radar-mcp-brasil/`.
- `tracks/01-crisis-commander/`, `tracks/02-orbital-defense/`, `tracks/03-boardroom-simulator/`: **Laboratório Extra (3 Simuladores Completos)** disponíveis no repositório para exploração adicional durante ou após o evento.
- `.agent/rules/`: Regras de governança e padrões de código do projeto (sempre ativas no contexto).
- `.agent/skills/` (e `.agents/skills/`): **Skills com Descoberta Semântica Sob Demanda (*Progressive Disclosure*)** — cada pasta contém um `SKILL.md` que o Antigravity descobre automaticamente pelo contexto da conversa ou via comando `/`:
  - `/radar-mcp-brasil` → `.agent/skills/radar-mcp-brasil/SKILL.md`
  - `/gerar-super-heroi` → `.agent/skills/gerar-super-heroi/SKILL.md`
  - `/modo-caos` → `.agent/skills/modo-caos/SKILL.md`
  - `/adaptar-setor` → `.agent/skills/adaptar-setor/SKILL.md`
  - `/auditoria-executiva` → `.agent/skills/auditoria-executiva/SKILL.md`
- `.agent/workflows/`: Espelho de compatibilidade dos workflows acionáveis via comandos `/`.

## Diretrizes Obrigatórias para Agentes

1. **Zero Dependências Externas (Zero-Setup):**
   - Todo o código web deve usar exclusivamente **HTML5, CSS3 (Vanilla CSS) e JavaScript puro (ES6+)**.
   - O servidor MCP em `mcp/mcp_brasil_zero_deps.py` utiliza apenas a biblioteca padrão do Python 3 (pode ser registrado via `stdio` no `mcp_config.json` ou invocado via terminal com `--cnpj <CNPJ>` e `--indicadores`).
2. **Idioma e Tom:**
   - Toda a interface (UI), textos dos jogos/simuladores, especificações (`SPEC_JOGO.md`), planos (*Implementation Plans*) e relatórios (*Walkthroughs*) devem ser redigidos em **Português (PT-BR)**, com linguagem clara, executiva e engajadora.
3. **Diretrizes para a Trilha `tracks/04-flappy-hero/`:**
   - Construa `index.html`, `style.css` e `game.js` com física suave e obstáculos com rótulos corporativos bem-humorados (*"Reunião que podia ser e-mail"*, *"Planilha V14_FINAL.xlsx"*, *"Sistema Legado"*, *"Orçamento Congelado"*, *"Aprovação em 7 Níveis"*).
   - Inclua sempre um botão `#btn-autopilot` (**"🤖 Piloto Automático IA"**) e suporte a Avatar de Super-Herói com capa esvoaçante animada no Canvas.
4. **Diretrizes para a Trilha `tracks/05-radar-mcp-brasil/`:**
   - Sempre consulte os dados reais executando o servidor MCP `mcp/mcp_brasil_zero_deps.py` (via tool MCP ou via comando `python3 mcp/mcp_brasil_zero_deps.py --cnpj ... --indicadores`) antes de gerar o painel executivo da empresa.
