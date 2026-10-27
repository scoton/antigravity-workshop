# 📊 Trilha 03: Boardroom War Room — Simulador de Conselho C-Level

> **Tempo estimado:** 15 a 20 minutos (100% autoguiado no Google Antigravity)  
> **Nível:** Iniciante a Avançado (Zero necessidade de programar manualmente)  
> **Conceitos do Google Antigravity praticados:** *Planning Mode*, Visualização de Dados Interativa em HTML5 Canvas (`#boardroom-canvas`), Simulação Multi-Stakeholder (CFO, CTO, CRO), *Skills* (`/adaptar-setor`, `/modo-caos`, `/auditoria-executiva`) e Validação no *Browser Sub-Agent*.

---

## 🎯 Sobre Esta Trilha

**Boardroom War Room** é um simulador executivo de alocação de capital e governança estratégica para reuniões de Diretoria e Conselho de Administração.

Nele, você escolhe entre **3 Cenários Presets** (`#btn-preset-1`, `#btn-preset-2`, `#btn-preset-3`) ou digita sua própria iniciativa (`#input-initiative`), calibrando **4 Alavancas Estratégicas**:
1. 💰 **Investimento CAPEX (`#slider-capex`):** De R$ 5M a R$ 100M.
2. ⚡ **Grau de Autonomia Agêntica (`#slider-autonomy`):** De 10% a 95%.
3. 🛡️ **Governança, Sandbox & Auditoria (`#slider-governance`):** De 10% a 100%.
4. ⏱️ **Prazo de Rollout (`#slider-timeline`):** De 3 a 24 meses.

Em tempo real, o simulador calcula e exibe:
- 📈 **Matriz Risco × Retorno em HTML5 Canvas (`#boardroom-canvas`):** Posicionamento visual da proposta nos quadrantes estratégicos.
- 💵 **Indicadores Consolidados:** ROI Projetado em 24m (`#kpi-roi`), Índice de Resiliência (`#kpi-survival`) e Payback Estimado (`#kpi-payback`).
- 👥 **Votos e Pareceres Dinâmicos do C-Level:** Três conselheiros (**CFO**, **CTO** e **CRO/Risco**) votam `APROVADO`, `RESSALVAS` ou `VETADO` conforme o equilíbrio entre autonomia e governança.
- 🤖 **Botão "Otimizar com IA (3 a 0)" (`#btn-optimize-ai`):** Calibra automaticamente as 4 alavancas para obter aprovação unânime do Conselho (3 a 0) com alto ROI e resiliência!

---

## 📂 Arquivos Desta Pasta

| Arquivo | Função |
| :--- | :--- |
| [`index.html`](./index.html) | Layout do painel de Conselho, 3 presets de cenário, 4 sliders de alavancas estratégicas, matriz Canvas Risco × Retorno e painel de pareceres de CFO, CTO e CRO. |
| [`style.css`](./style.css) | Design *Executive War Room* com indicadores semafóricos (Verde, Âmbar, Vermelho) e tipografia financeira. |
| [`app.js`](./app.js) | Motor de cálculo de ROI/Payback/Resiliência, renderização dinâmica da matriz Canvas, regras de voto de CFO/CTO/CRO e calibrador automático com IA (`optimizeWithAI()`). |

---

## 🚀 Passo 0: Como Abrir e Testar o Simulador Atual (1 Minuto)

1. **Se o servidor local já estiver rodando:** Acesse `http://localhost:8080/tracks/03-boardroom-simulator/index.html` (ou clique em **Abrir Boardroom War Room →** no Mission Hub `http://localhost:8080/index.html`).
2. **Direto pela pasta no seu computador:** Dê **dois cliques** no arquivo `tracks/03-boardroom-simulator/index.html`.
3. **Ou peça ao Agente no chat:** *"Inicie um servidor web local na porta 8080 e abra `tracks/03-boardroom-simulator/index.html` no navegador."*
4. Clique no **Cenário 3: M&A Internacional (`#btn-preset-3`)** para ver o Conselho vetar a proposta por falta de governança, e em seguida clique em **🤖 Otimizar com IA (3 a 0) (`#btn-optimize-ai`)** para ver a calibragem ótima!

---

## 🛠️ Passo a Passo Autoguiado no Google Antigravity

Copie qualquer uma das **4 missões abaixo** e cole no painel do Agente no **Google Antigravity**:

---

### 🔹 Missão 1: Adicionar o 4º Conselheiro C-Level (CISO / Jurídico & LGPD)

Em decisões envolvendo Inteligência Artificial e dados, o voto de **Segurança Cibernética, Privacidade (LGPD) e Compliance** tornou-se decisivo no Conselho. Vamos incluir esse 4º assento na mesa!

#### Copie e envie este prompt no Google Antigravity:

```text
Evolua o simulador de Conselho em @tracks/03-boardroom-simulator/:
1. Adicione um 4º card de Conselheiro (#advisor-ciso) no painel .advisors-grid em @tracks/03-boardroom-simulator/index.html e @tracks/03-boardroom-simulator/app.js: "🔐 CISO & Jurídico (LGPD)".
2. Crie uma regra dinâmica em runSimulation() onde o CISO avalia a relação entre Autonomia Agêntica (#slider-autonomy) e Governança (#slider-governance), vetando propostas com Autonomia > 75% e Governança < 70% por risco de conformidade LGPD.
3. Atualize o veredito do Conselho (#verdict-badge) e o botão #btn-optimize-ai para considerar o consenso de 4 votos ("APROVAÇÃO UNÂNIME DO CONSELHO 4 A 0").
4. Valide o novo conselheiro no Browser Sub-Agent e gere um Walkthrough Artifact com screenshots!
```

---

### 🔹 Missão 2: Stress Test Macroeconômico na Sala do Conselho (`/modo-caos`)

Um bom plano estratégico precisa resistir a mudanças bruscas de cenário econômico. Vamos criar uma barra de **Testes de Estresse Macroeconômico**!

#### Copie e envie este prompt no Google Antigravity:

```text
Execute a skill @.agent/skills/modo-caos/SKILL.md na pasta @tracks/03-boardroom-simulator/:
1. Adicione uma seção "⚡ Stress Test de Cenário Macroeconômico" em @tracks/03-boardroom-simulator/index.html com 4 botões alternáveis:
   - "Cenário Base (Estável)"
   - "Choque de Juros (Selic +3%)" -> encarece o custo de capital e penaliza propostas de CAPEX alto (#slider-capex) e payback longo.
   - "Desvalorização Cambial (Dólar +25%)" -> pressiona custos de infraestrutura de nuvem/IA.
   - "Nova Regulação Estrita de IA" -> exige Governança (#slider-governance) mínima de 75% para evitar veto do CRO.
2. Quando o usuário clicar em qualquer cenário de estresse, recalcule instantaneamente o ROI (#kpi-roi), o Índice de Resiliência (#kpi-survival), o Payback (#kpi-payback), a posição na Matriz Risco x Retorno no Canvas (#boardroom-canvas) e os votos do C-Level!
3. Teste todos os cenários no Browser Sub-Agent e entregue um Walkthrough Artifact!
```

---

### 🔹 Missão 3: Personalizar com os Projetos Reais da Sua Empresa (`/adaptar-setor`)

Transforme este simulador em uma ferramenta real para discutir o orçamento da sua diretoria na próxima semana!

#### Copie e envie este prompt no Google Antigravity:
*(Ele já vem configurado com **Diretoria de Operações no Varejo & E-commerce** para funcionar em 1 clique caso você não edite nada; se preferir outra área, basta trocar na primeira linha)*

```text
Execute a skill @.agent/skills/adaptar-setor/SKILL.md na pasta @tracks/03-boardroom-simulator/ para o contexto de Diretoria de Operações no Varejo & E-commerce (caso eu tenha mantido este setor padrão, execute imediatamente sem parar para perguntar):
1. Atualize os Cenários Presets (PRESETS em @tracks/03-boardroom-simulator/app.js e os botões #btn-preset-1, #btn-preset-2, #btn-preset-3 em @tracks/03-boardroom-simulator/index.html) com iniciativas estratégicas realistas de IA Agêntica, logística omnichannel, prevenção a perdas e atendimento desse setor.
2. Adicione um botão "📄 Exportar Ata Executiva para o Conselho" (#btn-export-memo) que gera na tela (e permite copiar em 1 clique) um resumo executivo estruturado em Markdown com a iniciativa avaliada, o CAPEX, o ROI projetado e os pareceres de CFO, CTO e CRO.
3. Valide a exportação da ata no Browser Sub-Agent e gere um Walkthrough Artifact!
```

---

### 🔹 Missão 4: Auditoria Autônoma de Propostas (`/auditoria-executiva`)

Peça ao **Browser Sub-Agent** para testar os 3 Cenários Presets e o botão de Otimização com IA no navegador, documentando a calibragem ótima para o Conselho.

#### Copie e envie este prompt no Google Antigravity:

```text
Execute a skill @.agent/skills/auditoria-executiva/SKILL.md em @tracks/03-boardroom-simulator/:
1. Abra o simulador no Browser Sub-Agent.
2. Teste os 3 Cenários Presets (#btn-preset-1, #btn-preset-2 e #btn-preset-3) e, em seguida, acione o botão "🤖 Otimizar com IA" (#btn-optimize-ai).
3. Capture screenshots comparativos (antes e depois da otimização com IA) e gere um Walkthrough Artifact recomendando a alocação ótima para apresentação ao Conselho de Administração.
```

---

## 🧠 Resumo do Aprendizado Executivo

Com esta trilha, você vivenciou uma das práticas mais transformadoras da Era Agêntica:
- **Substituir o "Deck de Opinião Estático" pelo "Protótipo Interativo Auditado":** Em vez de passar semanas preparando slides estáticos sobre alocação de orçamento, você e sua equipe podem construir em minutos um simulador interativo onde a própria diretoria testa premissas e visualiza *trade-offs* ao vivo na reunião!
