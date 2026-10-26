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

1. **Identificação do Setor e da Trilha (Zero Fricção):**
   - Verifique qual **trilha** (`tracks/01-crisis-commander`, `tracks/02-orbital-defense`, `tracks/03-boardroom-simulator`, `tracks/04-flappy-hero` ou `tracks/05-radar-mcp-brasil`) e qual **setor de atuação** foram indicados no prompt.
   - **Regra de Execução Imediata:** Se o prompt já contiver um setor (incluindo o setor padrão sugerido no exemplo do guia, como *Agronegócio & Logística*, *Bancos & Fintechs* ou *Varejo & E-commerce*), **não pare para fazer perguntas**: execute imediatamente para o setor indicado!
2. **Adaptação Setorial Completa:**
   - Atualize os cenários, dilemas, ameaças ou presets (`SCENARIOS`, `PRESETS`, `threats`) e os rótulos dos indicadores da trilha escolhida para refletirem decisões reais, pressões competitivas, dilemas de IA e gargalos regulatórios daquele setor no Brasil.
3. **Validação Visual no Browser Sub-Agent:**
   - Abra a aplicação atualizada no **Browser Sub-Agent**, acione o modo de demonstração/piloto de IA para testar os novos cenários setoriais sem erros no console e entregue um **Walkthrough Artifact** com screenshots da interface personalizada.
