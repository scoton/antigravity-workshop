# 🛡️ Trilha 02: Orbital Defense — Escudo Estratégico (HTML5 Canvas 60 FPS)

> **Tempo estimado:** 15 a 20 minutos (100% autoguiado no Google Antigravity)  
> **Nível:** Iniciante a Avançado (Zero necessidade de programar manualmente)  
> **Conceitos do Google Antigravity praticados:** *Planning Mode*, Física e Renderização a 60 FPS, *Skills* (`/modo-caos`, `/adaptar-setor`, `/auditoria-executiva`) e Testes Visuais Automatizados no *Browser Sub-Agent*.

---

## 🎯 Sobre Esta Trilha

**Orbital Defense: Escudo Estratégico** é um jogo *arcade* tático em tempo real renderizado a **60 quadros por segundo (60 FPS)** em HTML5 Canvas puro (`zero dependências externas`).

Você comanda uma estação orbital que protege o *Core Business* da organização contra uma chuva de **ameaças estratégicas e operacionais** (*Crise Cambial, Ataque Cibernético, Ruptura de Suprimentos, Obsolescência Tecnológica, Concorrente Agêntico*).

O jogo já conta com:
- 🎯 **Mira e Disparo Tático:** Controle via mouse ou toque no Canvas.
- 💥 **Pulso Eletromagnético (EMP):** Pressione `Barra de Espaço` ou clique em **⚡ Pulso EMP (`#btn-emp`)** para limpar todas as ameaças da tela em momentos críticos.
- 🤖 **Piloto Automático de IA (`#btn-autopilot`):** Um agente tático embutido que calcula trajetórias em tempo real, prioriza os alvos mais próximos da base e dispara automaticamente!

---

## 📂 Arquivos Desta Pasta

| Arquivo | Função |
| :--- | :--- |
| [`index.html`](./index.html) | Estrutura do painel tático, HUD de telemetria (Score, Onda, Integridade do Escudo, Carga EMP) e controles de Piloto IA. |
| [`style.css`](./style.css) | Visual *Cyber-Defense Command Center* com neon ciano/âmbar e layout responsivo. |
| [`game.js`](./game.js) | Motor físico em HTML5 Canvas (60 FPS), sistema de partículas de explosão, gerador de ondas de ameaças e algoritmo do Piloto Automático IA. |

---

## 🚀 Passo 0: Como Abrir e Testar o Jogo Atual (1 Minuto)

1. Abra a pasta raiz do repositório no **Google Antigravity**.
2. Se ainda não iniciou um servidor local, rode no terminal na raiz do projeto:
   ```bash
   python3 -m http.server 8080
   ```
3. Abra no navegador: `http://localhost:8080/tracks/02-orbital-defense/index.html` *(ou dê dois cliques no arquivo `index.html`)*.
4. Clique em **▶ Iniciar Missão** e depois ative o botão **🤖 Piloto IA: ON (`#btn-autopilot`)** para assistir à IA defendendo a base sozinha!

---

## 🛠️ Passo a Passo Autoguiado no Google Antigravity

Copie qualquer um dos prompts abaixo e envie no painel do Agente do **Google Antigravity** para evoluir o jogo e ver o agente testar tudo sozinho no navegador!

---

### 🔹 Missão 1: Criar uma "Boss Fight" de Fim de Trimestre (`/modo-caos`)

Vamos elevar a adrenalina do jogo adicionando uma **Nave-Mãe "Cisne Negro"** que aparece a cada mudança de onda e exige múltiplos impactos (ou um Pulso EMP tático) para ser neutralizada!

#### Copie e envie este prompt no Google Antigravity:

```text
Execute a Skill /modo-caos na pasta @tracks/02-orbital-defense/:
1. Adicione em @tracks/02-orbital-defense/game.js um "Boss Cisne Negro" (um mega-asteroide blindado com barra de vida própria, aura vermelha pulsante e rótulo "CRISE SISTÊMICA GLOBAL") que surge a cada 300 pontos (ou quando o usuário clicar em um novo botão "🔥 Invocar Boss" #btn-spawn-boss na tela).
2. Ao destruir o Boss, gere uma explosão épica de partículas douradas, recarregue 100% do Pulso EMP e restaure +25% do escudo da base.
3. Atualize o algoritmo do Piloto Automático IA (#btn-autopilot) para priorizar o Boss quando ele estiver perigosamente próximo.
4. Abra o jogo no Browser Sub-Agent, ative o Piloto IA, invoque o Boss para testar o combate e gere um Walkthrough Artifact com screenshots!
```

---

### 🔹 Missão 2: Sistema de Power-Ups Executivos (Tiro Triplo & Escudo)

Quando sua organização neutraliza uma ameaça, ela captura aprendizado e recursos. Vamos fazer com que ameaças destruídas soltem **cápsulas de Power-Up**!

#### Copie e envie este prompt no Google Antigravity:

```text
Evolua o jogo em @tracks/02-orbital-defense/ adicionando um sistema de Power-Ups Estratégicos no Canvas:
1. Quando um asteroide for destruído, dê 25% de chance de surgir um ícone brilhante flutuante que pode ser atingido por um tiro (ou coletado automaticamente pelo Piloto IA):
   - "⚡ ESQUADRÃO AGÊNTICO": Ativa Disparo Triplo em leque por 8 segundos.
   - "🛡️ HEDGE CAMBIAL": Reduz a velocidade de queda das ameaças em 50% (Câmera Lenta) por 6 segundos.
   - "💰 LIQUIDEZ EXTRA": Recupera +20% de integridade do escudo imediatamente.
2. Mostre no HUD superior qual Power-Up está ativo no momento e adicione efeitos sonoros sintetizados via Web Audio API para os disparos e explosões.
3. Valide no Browser Sub-Agent com o Piloto IA ativado e gere um Walkthrough Artifact!
```

---

### 🔹 Missão 3: Personalizar as Ameaças para o Seu Mercado (`/adaptar-setor`)

Adapte o radar orbital para que os meteoros tragam os nomes dos **riscos reais que tiram o sono da diretoria do seu setor**.

#### Copie e envie este prompt no Google Antigravity:
*(Substitua `[SEU SETOR]` pela sua área de atuação)*

```text
Execute a Skill /adaptar-setor na pasta @tracks/02-orbital-defense/ para o setor de [SEU SETOR, ex: Bancos e Fintechs / Varejo / Energia / Indústria]:
1. Personalize a lista de ameaças em @tracks/02-orbital-defense/game.js com os 10 maiores riscos reais desse setor (ex.: fraude em Pix, inadimplência, ruptura logística, ataque DDoS, mudança regulatória, etc.), classificando-os em 3 tamanhos/velocidades diferentes.
2. Adicione no painel lateral ou inferior um "Relatório Pós-Missão" que mostra quantas ameaças de cada categoria foram neutralizadas durante a partida.
3. Teste a partida no Browser Sub-Agent com o Piloto IA e documente o resultado em um Walkthrough Artifact!
```

---

### 🔹 Missão 4: Stress Test de Performance a 60 FPS (`/auditoria-executiva`)

Peça ao agente para realizar uma bateria de testes automatizados no navegador validando o Piloto IA, o Pulso EMP e a estabilidade de FPS.

#### Copie e envie este prompt no Google Antigravity:

```text
Execute a Skill /auditoria-executiva em @tracks/02-orbital-defense/:
1. Abra o jogo no Browser Sub-Agent.
2. Inicie a missão, ative o Piloto Automático IA (#btn-autopilot), dispare o Pulso EMP (#btn-emp) e deixe o jogo rodar por 15 segundos sob carga intensa.
3. Confirme que não há erros de JavaScript no console, capture screenshots da ação em tela cheia e gere um Walkthrough Artifact com o laudo técnico.
```

---

## 🧠 Resumo do Aprendizado Executivo

Nesta trilha você comprovou como o **Google Antigravity** lida com sistemas dinâmicos em tempo real (física, colisão, áudio sintetizado e agentes autônomos de teste):
- Em vez de testar manualmente cada mudança jogando por vários minutos, você criou um **Piloto Automático IA (`#btn-autopilot`)** que permite ao próprio **Browser Sub-Agent** homologar novas funcionalidades em segundos!
