# 📊 Trilha 03: Boardroom War Room — Simulador de Conselho C-Level

> **Tempo estimado:** 15 a 20 minutos (100% autoguiado no Google Antigravity)  
> **Nível:** Iniciante a Avançado (Zero necessidade de programar manualmente)  
> **Conceitos do Google Antigravity praticados:** *Planning Mode*, Visualização de Dados Interativa (SVG), Simulação Multi-Stakeholder (CFO, CTO, CRO), *Skills* (`/adaptar-setor`, `/modo-caos`, `/auditoria-executiva`) e Validação no *Browser Sub-Agent*.

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

1. Abra a pasta raiz do repositório no **Google Antigravity**.
2. Caso ainda não tenha um servidor local rodando, execute no terminal na raiz do projeto:
   ```bash
   python3 -m http.server 8080
   ```
3. Acesse no navegador: `http://localhost:8080/tracks/03-boardroom-simulator/index.html` *(ou abra o arquivo `index.html` diretamente no navegador)*.
4. Clique no **Cenário 3: M&A Internacional (`#btn-preset-3`)** para ver o Conselho vetar a proposta por falta de governança, e em seguida clique em **🤖 Otimizar com IA (3 a 0) (`#btn-optimize-ai`)** para ver a calibragem ótima!

---

## 🛠️ Passo a Passo Autoguiado no Google Antigravity

Copie qualquer uma das **4 missões abaixo** e cole no painel do Agente no **Google Antigravity**:

---

### 🔹 Missão 1: Adicionar o 4º Conselheiro C-Level (CISO / Jurídico & ESG)

Em decisões envolvendo Inteligência Artificial e dados, o voto de **Segurança Cibernética, Privacidade (LGPD) e Sustentabilidade** tornou-se decisivo no Conselho. Vamos incluir esse 4º assento na mesa!

#### Copie e envie este prompt no Google Antigravity:

```text
Evolua o simulador de Conselho em @tracks/03-boardroom-simulator/:
1. Adicione um 4º card de Conselheiro no painel de Pareceres do C-Level em @tracks/03-boardroom-simulator/index.html e @tracks/03-boardroom-simulator/app.js: "CISO & Diretoria Jurídica / LGPD".
2. Crie uma regra dinâmica onde esse conselheiro avalia o nível de governança de dados e segurança cibernética do portfólio selecionado (bloqueando o consenso caso projetos de IA de alto risco sejam escolhidos sem pelo menos 1 iniciativa de Governança/Segurança ativa!).
3. Adicione no topo do painel um "Índice de Consenso do Conselho (0 a 4 votos favoráveis)".
4. Valide o novo conselheiro no Browser Sub-Agent e gere um Walkthrough Artifact com screenshots!
```

---

### 🔹 Missão 2: Stress Test Macroeconômico na Sala do Conselho (`/modo-caos`)

Um bom portfólio estratégico precisa resistir a mudanças bruscas de cenário econômico. Vamos criar uma barra de **Testes de Estresse Macroeconômico**!

#### Copie e envie este prompt no Google Antigravity:

```text
Execute a Skill /modo-caos na pasta @tracks/03-boardroom-simulator/:
1. Adicione uma seção "⚡ Stress Test de Cenário Macroeconômico" com 4 botões alternáveis:
   - "Cenário Base (Estável)"
   - "Choque de Juros (Selic +3%)" -> encarece o custo de capital e penaliza projetos de payback longo.
   - "Desvalorização Cambial (Dólar +25%)" -> aumenta o custo de projetos intensivos em nuvem/hardware importado.
   - "Nova Regulação Estrita de IA" -> exige investimento obrigatório em compliance e valoriza projetos de governança.
2. Quando o usuário clicar em qualquer cenário de estresse, recalcule instantaneamente o ROI, o Payback, a posição das bolhas no gráfico SVG Risco x Retorno e os votos do C-Level!
3. Teste todos os cenários no Browser Sub-Agent e entregue um Walkthrough Artifact!
```

---

### 🔹 Missão 3: Personalizar com os Projetos Reais da Sua Empresa (`/adaptar-setor`)

Transforme este simulador em uma ferramenta real para discutir o orçamento da sua diretoria na próxima semana!

#### Copie e envie este prompt no Google Antigravity:
*(Substitua `[SEU SETOR / SUA ÁREA]` pelo seu contexto real)*

```text
Execute a Skill /adaptar-setor na pasta @tracks/03-boardroom-simulator/ para o contexto de [SEU SETOR / SUA ÁREA, ex: Diretoria de Operações no Varejo / Indústria Farmacêutica / Banco Digital]:
1. Substitua as iniciativas do portfólio em @tracks/03-boardroom-simulator/app.js por 8 projetos estratégicos realistas de IA, automação agêntica, eficiência operacional e governança típicos desse setor, com custos, retornos e riscos calibrados.
2. Adicione um botão "📄 Exportar Ata Executiva para o Conselho" (#btn-export-memo) que gera na tela (e permite copiar em 1 clique) um resumo executivo estruturado em Markdown com as iniciativas aprovadas, o orçamento alocado, o ROI esperado e os pareceres de CFO, CTO e CRO.
3. Valide a exportação da ata no Browser Sub-Agent e gere um Walkthrough Artifact!
```

---

### 🔹 Missão 4: Auditoria Autônoma de Portfólio (`/auditoria-executiva`)

Peça ao **Browser Sub-Agent** para simular 3 perfis de investidor (Conservador, Moderado e Arrojado) no navegador e documentar qual portfólio gera o melhor retorno ajustado ao risco.

#### Copie e envie este prompt no Google Antigravity:

```text
Execute a Skill /auditoria-executiva em @tracks/03-boardroom-simulator/:
1. Abra o simulador no Browser Sub-Agent.
2. Teste o botão "Otimizar com IA" (#btn-optimize-ai) em 3 níveis diferentes de Orçamento e Apetite a Risco (Conservador, Moderado e Agressivo).
3. Capture screenshots comparativos e gere um Walkthrough Artifact recomendando a alocação ótima para apresentação ao Conselho de Administração.
```

---

## 🧠 Resumo do Aprendizado Executivo

Com esta trilha, você vivenciou uma das práticas mais transformadoras da Era Agêntica:
- **Substituir o "Deck de Opinião Estático" pelo "Protótipo Interativo Auditado":** Em vez de passar semanas preparando slides estáticos sobre alocação de orçamento, você e sua equipe podem construir em minutos um simulador interativo onde a própria diretoria testa premissas e visualiza *trade-offs* ao vivo na reunião!
