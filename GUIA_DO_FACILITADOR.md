# 🎤 Guia do Facilitador — AI Bootcamp 2026 (Singularity Brazil)

Este documento foi desenhado para apoiar a sua condução do workshop de **50 minutos** no palco.

---

## 1. Cronograma de Palco (Run of Show — 50 Minutos)

| Minuto | Duração | Etapa | O que você faz no palco |
| :--- | :--- | :--- | :--- |
| **00:00 – 08:00** | 8 min | **Abertura & Provocação Estratégica** | • Conecta com a carta da Singularity Brazil: *"Todos aqui já passaram da fase do letramento em IA. Mas por que empresas onde todo mundo usa chatbot ainda demoram meses para reagir a uma crise ou lançar algo novo?"*<br>• Apresenta a tese: **Sair da Assistência Individual (Copiloto) para a Orquestração Agêntica (Centro de Comando)**.<br>• Mostra rapidamente na telona os 4 pilares do Google Antigravity: **1) Implementation Plan (Governança)**, **2) Browser Sub-Agent (Auto-verificação)**, **3) Agent Manager (Paralelismo)** e **4) Rules/Workflows (Cultura em Código)**. |
| **08:00 – 11:00** | 3 min | **Briefing do Hands-On & Escolha de Trilha** | • Mostra o QR Code / URL curta do repositório GitHub na tela.<br>• Apresenta o Portal Inicial (`index.html`) com as **3 Trilhas do Starter Kit** (*Crisis Commander*, *Orbital Defense* e *Boardroom War Room*).<br>• **Dica de condução:** Recomende a **Trilha 1 (Crisis Commander)** como padrão para quem estiver em dúvida, mencionando que quem quiser algo mais arcade pode ir na **Trilha 2** e quem quiser um simulador de conselho pode ir na **Trilha 3** (e todos levam as 3 trilhas no GitHub para casa!). |
| **11:00 – 43:00** | 32 min | **Execução Self-Paced (Circulação na Sala)** | • Os participantes seguem as **Missões 0 a 4** no `README.md`.<br>• **Deixe a sua tela projetada no palco** executando as missões em ritmo calmo: assim, qualquer executivo que preferir apenas assistir (ou cujo computador esteja sem bateria/Wi-Fi) acompanha a experiência completa pela telona!<br>• **Checkpoints no microfone:**<br>  - **Minuto 20:** *"Pessoal, quem já viu o Implementation Plan da Missão 1, lembrem de fazer um comentário em cima do plano antes de aprovar!"*<br>  - **Minuto 30:** *"Agora na Missão 2 é a hora de soltar as mãos do teclado e ver o Browser Sub-Agent jogando o jogo de vocês sozinho!"*<br>  - **Minuto 38:** *"Últimos 5 minutos práticos: abram o Agent Manager (`Cmd/Ctrl + E`) ou testem o comando `/modo-caos` da Missão 4!"* |
| **43:00 – 50:00** | 7 min | **Debrief Executivo & Q&A** | • Pede para 1 ou 2 participantes contarem em 30 segundos qual "Crise Setorial" ou mecânica criaram.<br>• Amarração executiva: *"Em 30 minutos vocês planejaram, construíram, auditaram visualmente e escalaram em paralelo uma aplicação funcional. Quando uma incerteza bater na porta da sua empresa na segunda-feira, qual será o seu tempo de ciclo entre a reunião de diretoria e o primeiro protótipo validado?"* |

---

## 2. Comparativo Rápido das 3 Trilhas (Para Sua Avaliação Pré-Evento)

Você pode testar as 3 trilhas agora mesmo abrindo o `index.html` raiz:

1. **Trilha 1 (`tracks/01-crisis-commander/`):**
   - **Ponto forte:** Conecta 100% com o discurso de "navegar incertezas" da Singularity Brazil e dá um prazer imediato ao participante quando ele vê os cartões do jogo mudarem para os dilemas reais do setor dele (ex.: Agro, Bancos, Saúde).
   - **Efeito UAU no Browser Sub-Agent:** O agente abre o jogo, lê o dilema, clica nas opções estratégicas e avança os trimestres sozinho.
2. **Trilha 2 (`tracks/02-orbital-defense/`):**
   - **Ponto forte:** É o mais visual e dinâmico (HTML5 Canvas a 60fps, ondas de asteroides/ameaças, escudos, pulso eletromagnético e modo **Piloto Automático de IA**).
   - **Efeito UAU no Browser Sub-Agent:** O agente inicia a partida, ativa o Piloto Automático, dispara o pulso EMP e tira screenshots da batalha espacial no *Walkthrough*.
3. **Trilha 3 (`tracks/03-boardroom-simulator/`):**
   - **Ponto forte:** Tem visual de ferramenta executiva de tomada de decisão, com sliders financeiros, gráfico de Matriz Risco x Retorno em Canvas e pareceres de 3 membros do Conselho (CFO, CTO e CRO).
   - **Efeito UAU no Browser Sub-Agent:** O agente preenche um cenário customizado, move os controles de risco/investimento, roda a simulação do Board e captura o veredito final.

---

## 3. Dicas Anti-Falha (Plano de Contingência para o Evento)

- **E se o participante não tiver Python instalado para rodar `python3 -m http.server 8080`?**
  - Todas as 3 trilhas foram construídas sem módulos CORS bloqueantes (`type="module"` não foi usado; usamos scripts clássicos auto-contidos). Isso significa que **basta dar duplo clique no arquivo `index.html`** (ou abrir direto pelo caminho `file:///...`) e tudo funciona 100% offline!
- **E se o Wi-Fi do evento oscilar no momento do download do GitHub?**
  - O repositório inteiro tem menos de **100 KB** (zero imagens pesadas, zero `node_modules`). Clona ou baixa o ZIP em menos de 1 segundo mesmo em conexão 4G roteada pelo celular.
