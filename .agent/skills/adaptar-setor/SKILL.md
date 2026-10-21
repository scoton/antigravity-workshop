---
name: adaptar-setor
description: >-
  Personaliza os cenários, métricas, obstáculos e desafios de qualquer trilha
  do workshop para o setor real da empresa do participante (Finanças, Agro,
  Saúde, Varejo, Indústria, etc.). Use quando o usuário pedir para customizar
  um jogo/simulador para o setor dele ou acionar /adaptar-setor.
---

# Skill: Adaptar para o Meu Setor (`/adaptar-setor`)

Quando o usuário acionar esta skill:

1. **Coleta Rápida de Contexto:**
   - Caso o usuário ainda não tenha informado no comando, pergunte de forma direta:
     1. Qual é o **setor de atuação** da sua empresa (ex.: Finanças/Bancos, Agronegócio, Saúde, Varejo, Indústria, Energia, Jurídico, Educação)?
     2. Qual **trilha** você quer personalizar (`04-flappy-hero`, `05-radar-mcp-brasil`, `01-crisis-commander`, `02-orbital-defense` ou `03-boardroom-simulator`)?
2. **Plano de Adaptação Setorial:**
   - Gere um **Implementation Plan** propondo novos cenários, obstáculos ou dilemas hiper-realistas do setor informado para substituir ou expandir os cenários da trilha escolhida, além de adaptar os nomes dos indicadores para o vocabulário executivo daquele setor.
3. **Implementação e Validação Visual:**
   - Após a aprovação, atualize os arquivos da trilha, abra no **Browser Sub-Agent** para testar os novos cenários setoriais e entregue um **Walkthrough** com screenshot da interface personalizada.
