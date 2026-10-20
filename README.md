# 🚀 AI Bootcamp 2026 (Singularity Brazil) — Workshop Prático: Google Antigravity

Bem-vindo(a) ao laboratório prático (**Self-Paced Hands-On**) do **AI Bootcamp 2026**!

Neste workshop de **~33 minutos**, você vai experimentar na prática a transição da fase de **Copilotos (Assistência Individual)** para a **Orquestração Agêntica (Centro de Comando)** usando o **Google Antigravity**.

> **O objetivo não é aprender a programar linha por linha.**
> Seu papel aqui é atuar como um **Arquiteto e Maestro de Agentes Autônomos**: definir a intenção estratégica, revisar e aprovar planos de execução (*Artifacts*), delegar tarefas em paralelo no *Agent Manager* e exigir provas visuais auditáveis geradas pelo *Browser Sub-Agent*.

---

## 🧭 Escolha a Sua Trilha (Starter Kits Inclusos)

Este repositório já inclui **3 projetos funcionais (Zero-Dependência)** prontos para rodar.
Durante a sessão ao vivo de 33 minutos, **escolha 1 das 3 trilhas abaixo** para evoluir nas Missões 1 a 4 (você poderá explorar as outras duas trilhas depois do evento, no seu tempo!):

| Trilha | Pasta no Repositório | O que é o Projeto | Perfil Ideal |
| :--- | :--- | :--- | :--- |
| **1. Crisis Commander** *(Recomendada)* | `tracks/01-crisis-commander/` | **Jogo de Decisão Estratégica sob Incerteza** (estilo *Reigns*). Você é o CEO atravessando choques regulatórios, cambiais e operacionais de 2026 a 2027, equilibrando Caixa, Agilidade, Confiança do Mercado e Resiliência. | Executivos, Líderes de Negócio, Estrategistas e Gestores de Produto. |
| **2. Antigravity Orbital Defense** | `tracks/02-orbital-defense/` | **Jogo Arcade & Estratégia Visual em Tempo Real** (HTML5 Canvas). Comande uma estação orbital interceptando ondas de ameaças, gerenciando energia de escudos, drones autônomos e piloto automático de IA. | Perfis visuais, entusiastas de jogos, líderes de tecnologia e engenharia. |
| **3. Boardroom War Room** | `tracks/03-boardroom-simulator/` | **Simulador de Conselho de Administração & Estresse de Cenários**. Submeta uma decisão estratégica real, ajuste alavancas de investimento/risco e veja 3 Conselheiros (CFO, CTO e CRO) debaterem o impacto em uma matriz visual. | C-Levels, Conselheiros, Diretores Financeiros/Operações e Consultores. |

---

## ⏱️ Roteiro Self-Paced (33 Minutos | 4 Missões)

### 🏁 Missão 0: Decolagem e Centro de Comando (3 minutos)

1. **Baixe e abra o Google Antigravity:**
   - Caso ainda não tenha instalado, baixe em: [https://antigravity.google](https://antigravity.google)
2. **Clone ou baixe este repositório e abra a pasta no Antigravity:**
   ```bash
   git clone https://github.com/SEU-USUARIO/ai-bootcamp-2026-antigravity.git
   cd ai-bootcamp-2026-antigravity
   ```
   *(Dica: Você também pode clicar em **Code -> Download ZIP** no GitHub, extrair a pasta e ir em **File -> Open Folder** no Antigravity).*
3. **Conheça os 2 Modos de Trabalho do Antigravity:**
   - **Editor View:** Onde você vê os arquivos do projeto e o painel lateral do Agente.
   - **Agent Manager (`Cmd + E` no Mac / `Ctrl + E` no Windows/Linux):** Seu **Centro de Comando (Mission Control)** para disparar e acompanhar múltiplos agentes trabalhando em paralelo.
4. **Veja o Starter Kit rodando:**
   - Peça no chat do Antigravity (ou rode no terminal integrado):
     ```bash
     python3 -m http.server 8080
     ```
   - Acesse `http://localhost:8080` (ou peça ao agente: *"Inicie um servidor local na porta 8080 e abra o portal inicial no navegador"*).

---

### 📋 Missão 1: Do Prompt ao Contrato Executivo — *Planning Mode & Artifacts* (8 minutos)

**💡 O Conceito Executivo:** Em ambientes corporativos complexos, dar autonomia cega para a IA é um risco; mas microgerenciar cada linha de texto/código destrói a produtividade. No Antigravity, o **Planning Mode** faz o agente investigar o sistema atual e entregar um **Implementation Plan (Artifact)** antes de alterar qualquer arquivo. Você revisa o plano como um executivo revisa uma proposta estratégica — podendo inclusive **comentar diretamente em qualquer parágrafo do plano** antes de aprovar.

#### Passo a Passo:
1. No painel do Agente, certifique-se de que o modo está em **Planning** (ou inicie seu prompt com `/plan`).
2. Copie o prompt abaixo correspondente à **Trilha que você escolheu** (dica: troque `[SEU SETOR]` pelo setor real da sua empresa, como *Agronegócio, Bancos/Fintech, Saúde, Varejo, Energia ou Indústria*):

<details open>
<summary><b>👉 Prompt para Trilha 1: Crisis Commander</b></summary>

```text
Analise o jogo em @tracks/01-crisis-commander/ e crie um Implementation Plan para duas melhorias estratégicas:
1. Personalize os cenários de crise para o setor de [SEU SETOR, ex: Finanças / Varejo / Saúde / Agro], criando 4 novos dilemas hiper-realistas para 2026-2027.
2. Adicione um botão "Consultor IA do Board" (com limite de 2 usos por partida) que analisa o dilema atual e destaca visualmente a decisão que melhor protege a empresa contra falência, explicando o trade-off.
Não altere o código ainda; apresente primeiro o Implementation Plan para minha revisão.
```
</details>

<details>
<summary><b>👉 Prompt para Trilha 2: Antigravity Orbital Defense</b></summary>

```text
Analise o jogo em @tracks/02-orbital-defense/ e crie um Implementation Plan para duas melhorias:
1. Crie um sistema de "Drones Autônomos de Defesa": a cada 150 pontos, o jogador pode lançar um drone orbital que orbita a estação e intercepta ameaças automaticamente.
2. Adicione um evento de "Alerta de Boss Setorial" a cada 3 ondas, com barra de vida própria e escudo regenerativo.
Não altere o código ainda; apresente primeiro o Implementation Plan para minha revisão.
```
</details>

<details>
<summary><b>👉 Prompt para Trilha 3: Boardroom War Room</b></summary>

```text
Analise o simulador em @tracks/03-boardroom-simulator/ e crie um Implementation Plan para duas melhorias:
1. Adicione 3 novos cenários pré-configurados específicos para o setor de [SEU SETOR, ex: Finanças / Varejo / Saúde / Agro].
2. Crie um recurso de "Simulação Monte Carlo Simplificada (3 Cenários)": ao rodar a simulação, mostre lado a lado a projeção Otimista, Base e Pessimista (Estresse Severo), destacando qual conselheiro veta ou aprova cada cenário.
Não altere o código ainda; apresente primeiro o Implementation Plan para minha revisão.
```
</details>

3. **Interaja com o Artifact (O Pulo do Gato):**
   - Quando o Antigravity abrir o **Implementation Plan**, passe o mouse sobre qualquer linha do plano, clique no ícone de **Comentário** e adicione uma orientação executiva (por exemplo: *"Garanta que exista um indicador visual de alerta vermelho quando qualquer métrica ficar abaixo de 25%"*).
   - Clique em **Proceed / Approve** para autorizar o agente a executar o plano!

---

### 🌐 Missão 2: O Agente que Testa o Próprio Trabalho — *Browser Sub-Agent & Walkthrough* (9 minutos)

**💡 O Conceito Executivo:** Como saber se o que o agente construiu realmente funciona sem precisar testar tudo manualmente? O Antigravity possui um **Browser Sub-Agent** integrado: um agente que abre um navegador real, enxerga a tela, clica nos botões, joga o jogo / preenche o simulador, verifica erros e entrega um **Walkthrough Artifact** com screenshots e gravação em vídeo da execução.

#### Passo a Passo:
1. Assim que o agente concluir a implementação da Missão 1, envie o seguinte comando:

```text
Agora valide o seu trabalho na prática usando o Browser Sub-Agent:
1. Abra a aplicação no navegador (iniciando o servidor local se necessário).
2. Interaja com a interface: inicie uma partida/simulação, teste os novos botões e recursos que você acabou de criar na Missão 1 e avance por pelo menos 3 interações completas.
3. Verifique se não há nenhum erro no console ou problema visual.
4. Gere um Walkthrough Artifact contendo o resumo executivo do que foi validado e os screenshots das telas em funcionamento.
```

2. **Observe a mágica acontecer:**
   - Veja o navegador controlado pelo agente clicando nos elementos da sua aplicação sozinho.
   - Ao final, abra o documento **Walkthrough** gerado pelo agente e veja as capturas de tela e o relatório de verificação!

---

### ⚡ Missão 3: Escala e Adaptação em Paralelo — *Agent Manager (Multi-Agentes)* (8 minutos)

**💡 O Conceito Executivo:** A verdadeira vantagem competitiva em cenários de incerteza não é fazer uma única tarefa 20% mais rápido, mas **testar múltiplas frentes estratégicas simultaneamente**. Com o **Agent Manager**, você coordena múltiplos agentes trabalhando em paralelo, como um CEO liderando diretores de áreas diferentes.

#### Passo a Passo:
1. Pressione `Cmd + E` (Mac) ou `Ctrl + E` (Windows/Linux) para abrir o **Agent Manager** (ou clique no ícone do Agent Manager no topo da janela).
2. Você vai disparar **2 tarefas independentes** (você pode rodar na mesma trilha em sequência rápida ou, melhor ainda, disparar um agente na sua trilha principal e um segundo agente preparando uma segunda trilha em paralelo!):

**Agente Paralelo A — Painel de Telemetria e Exportação Executiva:**
```text
Na minha trilha atual, adicione um botão "Exportar Relatório Executivo (.md)" que gera e baixa instantaneamente um dossiê executivo da partida/simulação atual contendo: todas as decisões tomadas, o estado final dos indicadores e um diagnóstico automático de estilo de liderança (ex: Arrojado, Conservador, Resiliente ou Antifrágil). Valide no navegador ao terminar.
```

**Agente Paralelo B — Ativando outra Trilha simultaneamente:**
```text
Enquanto trabalho na minha trilha principal, abra o portal inicial (@index.html) e personalize o cabeçalho com o nome da minha empresa/equipe, adicionando um painel de "Resumo Rápido das 3 Trilhas" que permita comparar os 3 simuladores em uma única visão executiva.
```

3. Acompanhe no **Agent Manager** o status de cada agente trabalhando de forma assíncrona!

---

### 🛡️ Missão 4: Governança e Cultura em Código — *Rules & Workflows* (5 minutos)

**💡 O Conceito Executivo:** Como garantir que dezenas de agentes autônomos dentro da sua empresa respeitem suas políticas de segurança, compliance, identidade visual e arquitetura? No Antigravity, você transforma governança em código vivo através de **Rules** (`AGENTS.md` e `.agent/rules/`) e **Workflows** (`.agent/workflows/`).

#### Passo a Passo:
1. Abra a pasta `.agent/` deste repositório no explorador de arquivos para ver como regras e playbooks são escritos em Markdown simples:
   - `.agent/rules/padroes-executivo-web.md`: Define as restrições arquiteturais e visuais que o agente já seguiu automaticamente desde a Missão 1!
   - `.agent/workflows/modo-caos.md`: Um playbook padronizado de teste de estresse.
   - `.agent/workflows/auditoria-executiva.md`: Um playbook de auditoria automatizada.
2. No chat do Agente, digite `/` para ver os Workflows disponíveis e execute um deles:
   - Digite `/modo-caos` (ou peça: *"Execute o workflow `.agent/workflows/modo-caos.md` na minha trilha atual"*) para injetar um evento **Cisne Negro** com cronômetro de pressão!
   - Ou digite `/auditoria-executiva` para que o agente realize uma inspeção completa com evidências visuais.

---

## 🏆 Missão Bônus (Para quem terminar antes ou para fazer pós-evento!)

Sobrou tempo ou quer explorar mais depois do AI Bootcamp? Experimente estes desafios:

1. **Teste as outras 2 Trilhas:** Use o comando `/adaptar-setor` na Trilha 2 (`02-orbital-defense`) ou na Trilha 3 (`03-boardroom-simulator`).
2. **Modo Apresentação para a Diretoria:** Peça ao agente:
   > *"Crie um modo de 'Simulação Automática (Demo Mode)' na minha trilha que jogue/simule sozinho na tela mostrando os melhores recursos para eu apresentar para minha equipe na segunda-feira."*
3. **Crie a sua própria Rule corporativa:** Crie um arquivo `.agent/rules/minha-empresa.md` definindo o tom de voz, as cores da sua marca e os KPIs prioritários do seu negócio, e peça ao agente para refatorar a interface seguindo a nova regra.

---

## 🧠 Resumo Executivo: O Que Levamos para a Segunda-Feira?

| Conceito no Antigravity | O que significa para a sua Liderança |
| :--- | :--- |
| **Planning Mode & Implementation Plan** | **Alinhamento antes da execução:** Substitua reuniões intermináveis de escopo por planos estruturados onde líderes revisam e comentam antes do esforço técnico. |
| **Browser Sub-Agent & Walkthrough** | **Governança baseada em evidência:** Não aceite apenas "está pronto"; exija verificação automatizada ponta a ponta com provas visuais. |
| **Agent Manager (Multi-Agentes)** | **Capacidade de adaptação sob incerteza:** Quando o mercado mudar, dispare 3 hipóteses em paralelo e decida com base em protótipos reais, não em opiniões. |
| **Rules & Workflows (`.agent/`)** | **Ativos organizacionais reutilizáveis:** O conhecimento e os padrões da sua empresa deixam de ficar apenas na cabeça das pessoas e passam a guiar todos os agentes automaticamente. |
