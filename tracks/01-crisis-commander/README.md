# 🏛️ Trilha 01: Crisis Commander — Jogo de Decisão Executiva sob Incerteza

> **Tempo estimado:** 15 a 20 minutos (100% autoguiado no Google Antigravity)  
> **Nível:** Iniciante a Avançado (Zero necessidade de programar manualmente)  
> **Conceitos do Google Antigravity praticados:** *Planning Mode*, Revisão de *Implementation Plan*, *Skills* (`/adaptar-setor`, `/modo-caos`, `/auditoria-executiva`) e Auto-Verificação Visual via *Browser Sub-Agent*.

---

## 🎯 Sobre Esta Trilha

**Crisis Commander** é um simulador executivo de tomada de decisão sob incerteza inspirado na mecânica do jogo *Reigns*. Você assume a cadeira de CEO ao longo de **8 trimestres consecutivos (Q1 2026 a Q4 2027)** e precisa escolher entre **3 caminhos estratégicos** a cada dilema (`#btn-choice-0`, `#btn-choice-1`, `#btn-choice-2`) ou acionar o **🤖 Modo Demo IA (`#btn-ai-demo`)**.

Cada escolha altera imediatamente **4 indicadores vitais da organização**:
1. 💰 **Caixa & Liquidez** (`#val-cash`)
2. ⚡ **Agilidade & IA** (`#val-agility`)
3. 📈 **Confiança do Mercado** (`#val-trust`)
4. 🛡️ **Resiliência & Segurança** (`#val-resilience`)

> **Regra de Sobrevivência:** Se qualquer um dos 4 indicadores chegar a **0%** (colapso de liquidez, paralisia tecnológica, crise de confiança ou colapso operacional), sua gestão sofre intervenção imediata do Conselho!

---

## 📂 Arquivos Desta Pasta

| Arquivo | Função |
| :--- | :--- |
| [`index.html`](./index.html) | Interface principal do simulador executivo, placar dos 4 KPIs, carta de decisão e botão **Modo Demo IA (`#btn-ai-demo`)**. |
| [`style.css`](./style.css) | Estilização *Dark Executive*, barras de progresso animadas, alertas visuais de risco e responsividade. |
| [`game.js`](./game.js) | Motor de estado dos 8 trimestres, baralho de dilemas estratégicos, cálculo de impacto nos KPIs e agente autônomo de demonstração. |

---

## 🚀 Passo 0: Como Abrir e Testar o Jogo Atual (1 Minuto)

Antes de pedir ao agente do **Google Antigravity** para evoluir o simulador, veja como ele funciona hoje:

1. Abra a pasta raiz do repositório no **Google Antigravity**.
2. Caso ainda não tenha um servidor local rodando, abra o terminal integrado (ou peça ao agente) e execute na raiz do repositório:
   ```bash
   python3 -m http.server 8080
   ```
3. Acesse no navegador: `http://localhost:8080/tracks/01-crisis-commander/index.html` *(ou abra o arquivo `index.html` diretamente no navegador)*.
4. Clique no botão **🤖 Modo Demo IA** no topo direito para ver o piloto automático tomar decisões equilibradas sozinho!

---

## 🛠️ Passo a Passo Autoguiado no Google Antigravity

Você pode executar as **4 missões abaixo** em sequência ou escolher a que mais chama sua atenção. Basta copiar o prompt de cada missão e colar no painel do Agente no **Google Antigravity**!

---

### 🔹 Missão 1: Personalizar o Jogo para o Seu Setor (`/adaptar-setor`)

Vamos transformar este simulador genérico em uma **ferramenta de treinamento estratégico sob medida para o seu setor de atuação** (ex.: *Agronegócio, Saúde Suplementar, Varejo, Mercado Financeiro, Energia, Educação, Indústria ou Logística*).

#### 1. Copie e envie este prompt no Google Antigravity:
*(Substitua `[SEU SETOR]` pelo seu mercado real)*

```text
Execute a Skill /adaptar-setor na pasta @tracks/01-crisis-commander/ para o setor de [SEU SETOR, ex: Agronegócio / Saúde / Varejo Financeiro]:
1. Reescreva os 8 dilemas trimestrais em @tracks/01-crisis-commander/game.js para refletirem decisões reais, pressões competitivas, dilemas de IA e gargalos regulatórios típicos desse setor no Brasil.
2. Adapte os títulos, cargos dos conselheiros e rótulos dos 4 indicadores em @tracks/01-crisis-commander/index.html para a linguagem executiva desse mercado.
3. Antes de alterar o código, gere um Implementation Plan para minha revisão.
4. Após implementar, abra o jogo no Browser Sub-Agent, ative o botão #btn-ai-demo por 4 rodadas para validar os novos cenários e gere um Walkthrough Artifact com screenshots!
```

#### 2. O que observar no Antigravity:
- Veja como o agente cria primeiro um **Implementation Plan (Artifact)**. Passe o mouse sobre qualquer linha do plano se quiser deixar um comentário ou ajuste antes de aprovar.
- Após aprovar, observe o **Browser Sub-Agent** abrir o navegador sozinho, clicar no botão de Demo IA e capturar evidências visuais no **Walkthrough**.

---

### 🔹 Missão 2: Injetar Eventos "Cisne Negro" (`/modo-caos`)

No mundo real, planos lineares são interrompidos por choques externos inesperados. Vamos criar um mecanismo de **Evento Cisne Negro** na interface.

#### Copie e envie este prompt no Google Antigravity:

```text
Execute a Skill /modo-caos na pasta @tracks/01-crisis-commander/:
1. Adicione um botão de destaque "⚡ Disparar Cisne Negro" (#btn-black-swan) na barra superior do simulador em @tracks/01-crisis-commander/index.html.
2. Crie em @tracks/01-crisis-commander/game.js um baralho especial de 4 eventos extremos de crise ("Ataque Ransomware Global", "Choque Cambial +30%", "Ruptura de Fornecedor Crítico de IA", "Nova Regulação Emergencial").
3. Quando o botão for acionado (ou com 20% de chance automática a cada trimestre), exiba um alerta visual dramático com animação de tremor na tela (screen shake em CSS) e efeito sonoro via Web Audio API, exigindo uma decisão de contenção imediata.
4. Valide o novo botão no Browser Sub-Agent e documente o teste em um Walkthrough Artifact!
```

---

### 🔹 Missão 3: Criar um "Comitê Consultivo de IA" em Tempo Real

Que tal adicionar um painel onde **3 agentes conselheiros (CFO, CTO e Diretor de Risco)** debatem rapidamente os prós e contras de cada carta antes de você clicar na Opção A ou B?

#### Copie e envie este prompt no Google Antigravity:

```text
Evolua o simulador em @tracks/01-crisis-commander/ adicionando um painel "Parecer do Comitê Executivo" logo abaixo da carta de decisão:
1. Para cada trimestre, mostre uma recomendação curta de 1 linha de três perspectivas: CFO (foco em Caixa), CTO (foco em Inovação) e CRO (foco em Governança), indicando qual indicador atual está mais vulnerável.
2. Destaque visualmente em amarelo/vermelho qualquer indicador que esteja abaixo de 25% ou acima de 80%, alertando o jogador sobre o risco iminente antes do clique.
3. Teste a nova funcionalidade no Browser Sub-Agent e gere um Walkthrough Artifact com screenshot!
```

---

### 🔹 Missão 4: Auditoria Executiva Automatizada (`/auditoria-executiva`)

Por fim, coloque o agente para atuar como um **Auditor de Qualidade (QA) autônomo** que joga os 8 trimestres inteiros sozinho e entrega um relatório executivo de balanceamento.

#### Copie e envie este prompt no Google Antigravity:

```text
Execute a Skill /auditoria-executiva em @tracks/01-crisis-commander/:
1. Abra o simulador no Browser Sub-Agent.
2. Execute uma partida completa de 8 trimestres usando o Modo Demo IA (#btn-ai-demo) e também teste o botão de Reiniciar.
3. Verifique que não há erros no console do navegador e produza um Walkthrough Artifact contendo prints do início, meio e fim da simulação, além de um diagnóstico sobre o equilíbrio matemático dos 4 indicadores.
```

---

## 🧠 Resumo do Aprendizado Executivo

Ao concluir esta trilha, você praticou os 3 pilares da liderança na Era Agêntica:
1. **Intenção Estratégica > Digitação de Código:** Você definiu o contexto de negócio e os riscos do setor sem precisar editar sintaxe manualmente.
2. **Governança via *Implementation Plan*:** Você revisou o plano arquitetural antes da execução.
3. **Verificação Baseada em Evidência:** O próprio agente validou a interface no navegador real (*Browser Sub-Agent*) e entregou provas visuais (*Walkthrough*).
