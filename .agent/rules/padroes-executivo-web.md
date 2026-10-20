---
trigger: always_on
description: Padrões de arquitetura, design e governança para as 3 trilhas do workshop AI Bootcamp 2026.
---

# Regras de Governança e Qualidade (AI Bootcamp 2026)

Sempre que você planejar ou modificar arquivos neste repositório, siga estas regras:

1. **Arquitetura Zero-Dependência:**
   - Mantenha todas as trilhas em HTML, CSS e JavaScript puros. Não adicione frameworks que exijam build step.
2. **Design Executivo de Alto Nível:**
   - Use tipografia legível, alto contraste em tema escuro executivo (tons de ardósia profunda `#0b0f17`, âmbar `#f59e0b`, esmeralda `#10b981`, ciano `#0ea5e9` e carmesim `#ef4444`).
   - Evite clichês visuais como textos em gradiente roxo ou excesso de caixas aninhadas.
3. **IDs Semânticos para Automação no Browser:**
   - Todo botão ou elemento interativo criado deve ter um `id` claro para que o **Browser Sub-Agent** possa interagir com ele durante os testes automatizados.
4. **Explicabilidade para Líderes:**
   - Ao gerar um *Implementation Plan* ou *Walkthrough*, inclua sempre uma seção curta chamada **"Impacto Estratégico / Resumo Executivo"** explicando em linguagem de negócios o que foi construído e como foi validado.
