---
trigger: always_on
description: Padrões de arquitetura, design e governança para as trilhas do workshop AI Bootcamp 2026.
---

# Regras de Governança e Qualidade (AI Bootcamp 2026)

Sempre que você planejar, especificar ou modificar arquivos neste repositório, siga estas regras:

1. **Arquitetura Zero-Dependência e Execução Rápida:**
   - Mantenha todas as trilhas em HTML, CSS e JavaScript puros. Não adicione frameworks que exijam build step.
2. **Design Executivo de Alto Nível:**
   - Use tipografia legível, alto contraste em tema escuro executivo (tons de ardósia profunda `#0b0f17`, âmbar `#f59e0b`, esmeralda `#10b981`, ciano `#0ea5e9` e carmesim `#ef4444`).
   - Evite clichês visuais como textos em gradiente roxo ou excesso de caixas aninhadas.
3. **Jogabilidade e Validação Rápida na Trilha `04-flappy-hero`:**
   - Desenhe o personagem diretamente no Canvas como o **pássaro clássico do Flappy Bird** (corpo amarelo-ouro arredondado, olho grande expressivo, bico laranja e asinha branca animada). Não implemente upload de fotos nem botão de piloto automático.
   - Desenhe os rótulos dos obstáculos corporativos em **placas horizontais largas de alto contraste** (`bold 16px sans-serif`) na boca de cada cano e em um banner superior bem legível.
   - Garanta que o jogo comece em modo de espera inicial (*"Pressione Espaço ou Clique para Voar"*) e, ao validar no **Browser Sub-Agent**, faça **apenas 1 visita rápida** (abra a página, dê 1 clique inicial para verificar ausência de erros no console, capture 1 screenshot e encerre imediatamente).
4. **Explicabilidade para Líderes:**
   - Ao gerar um *Implementation Plan* ou *Walkthrough*, inclua sempre uma seção curta chamada **"Impacto Estratégico / Resumo Executivo"** explicando em linguagem de negócios o que foi construído e como foi validado.
