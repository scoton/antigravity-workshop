---
name: modo-caos
description: >-
  Injeta um evento Cisne Negro (crise aguda inesperada) no simulador ou painel
  escolhido e valida o impacto automaticamente no Browser Sub-Agent. Use quando
  o usuário pedir para criar um evento Cisne Negro, estressar o simulador ou
  acionar /modo-caos.
---

# Skill: Modo Caos / Cisne Negro (`/modo-caos`)

Quando o usuário acionar esta skill, execute os seguintes passos:

1. **Identificar a Trilha Ativa:**
   - Verifique em qual das trilhas o usuário está trabalhando (`tracks/04-flappy-hero`, `tracks/05-radar-mcp-brasil`, `tracks/01-crisis-commander`, `tracks/02-orbital-defense` ou `tracks/03-boardroom-simulator`). Se o usuário não especificou, aplique na trilha aberta atualmente ou em `tracks/01-crisis-commander`.
2. **Criar o Mecanismo de "Cisne Negro" (Modo Caos):**
   - **Se `04-flappy-hero`:** Adicione um botão `#btn-black-swan` ("🌪️ Turbulência Regulatória / Cisne Negro") que ativa ventos cruzados, obstáculos móveis de auditoria e dobra os pontos de agilidade por 15 segundos.
   - **Se `05-radar-mcp-brasil`:** Adicione um botão `#btn-black-swan` ("⚡ Choque Macroeconômico Extremo") que dispara simultaneamente Selic a 16,5%, Dólar a R$ 6,80 e recalcula o plano de sobrevivência setorial.
   - **Se `01-crisis-commander`:** Adicione um botão de destaque `#btn-black-swan` ("⚡ Disparar Cisne Negro") no topo do painel que sorteia uma crise extrema multi-variável com tempo de resposta limitado (15 segundos no cronômetro visual) e 3 opções de resposta estratégica de alto risco.
   - **Se `02-orbital-defense`:** Adicione um botão `#btn-black-swan` ("☄️ Tempestade de Cisnes Negros") que lança uma onda especial de ameaças velozes com um "Boss Setorial" e ativa um escudo de emergência temporário.
   - **Se `03-boardroom-simulator`:** Adicione um botão `#btn-black-swan` ("🌪️ Choque Macroeconômico Agudo") que aplica um estresse simultâneo de câmbio, juros e regulação, recalculando o índice de sobrevivência e gerando uma reação de emergência dos 3 conselheiros.
3. **Verificação Autônoma no Browser:**
   - Abra a trilha modificada no **Browser Sub-Agent**, clique no novo botão `#btn-black-swan`, verifique se o efeito visual e lógico funciona sem erros no console e gere um **Walkthrough** com captura de tela comprovando o funcionamento.
