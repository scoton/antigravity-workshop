---
description: Injeta um evento Cisne Negro (crise aguda inesperada) na trilha escolhida e valida o impacto automaticamente no navegador.
---

# Workflow: Modo Caos / Cisne Negro (`/modo-caos`)

Quando o usuário acionar este workflow, execute os seguintes passos:

1. **Identificar a Trilha Ativa:**
   - Verifique em qual das 3 trilhas o usuário está trabalhando (`tracks/01-crisis-commander`, `tracks/02-orbital-defense` ou `tracks/03-boardroom-simulator`). Se o usuário não especificou, aplique na `tracks/01-crisis-commander` (ou pergunte rapidamente se preferir outra).
2. **Criar o Mecanismo de "Cisne Negro" (Modo Caos):**
   - **Se Trilha 1 (`01-crisis-commander`):** Adicione um botão de destaque `#btn-black-swan` ("⚡ Disparar Cisne Negro") no topo do painel que sorteia uma crise extrema multi-variável com tempo de resposta limitado (15 segundos no cronômetro visual) e 3 opções de resposta estratégica de alto risco.
   - **Se Trilha 2 (`02-orbital-defense`):** Adicione um botão `#btn-black-swan` ("☄️ Tempestade de Cisnes Negros") que lança uma onda especial de ameaças velozes com um "Boss Setorial" e ativa um escudo de emergência temporário.
   - **Se Trilha 3 (`03-boardroom-simulator`):** Adicione um botão `#btn-black-swan` ("🌪️ Choque Macroeconômico Agudo") que aplica um estresse simultâneo de câmbio, juros e regulação, recalculando o índice de sobrevivência e gerando uma reação de emergência dos 3 conselheiros.
3. **Verificação Autônoma no Browser:**
   - Abra a trilha modificada no **Browser Sub-Agent**, clique no novo botão `#btn-black-swan`, verifique se o efeito visual e lógico funciona sem erros no console e gere um **Walkthrough** com captura de tela comprovando o funcionamento.
