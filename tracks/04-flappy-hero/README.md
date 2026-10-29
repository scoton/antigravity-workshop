# 🐦 Trilha 04 (Atos 1 e 3 do Workshop): Flappy Executive Bird — Escapando da Burocracia

> **Tempo estimado:** 7 minutos (Ato 1) + 5 minutos (Ato 3) — **100% autoguiado no Google Antigravity**  
> **Nível:** Iniciante a Avançado (Zero necessidade de programar manualmente)  
> **Conceitos do Google Antigravity praticados:** *Spec-Driven Development* (`SPEC_JOGO.md` estruturado), Construção Autônoma do Zero em Background, Multitarefa no *Agent Manager (`Cmd/Ctrl + E`)* e Auto-Verificação Visual Rápida via *Browser Sub-Agent*.

---

## 🎯 Por Que Esta Pasta Começa Quase Vazia?

Diferente das Trilhas Extras `01`, `02` e `03` (que já trazem simuladores prontos para você modificar), **esta trilha começa quase vazia de propósito!**

Aqui você vai vivenciar o fluxo completo de um **Arquiteto de Produto na Era Agêntica**:
1. **Especificar antes de construir (*Spec-Driven Development*):** Você pede ao agente para redigir primeiro o documento estruturado de arquitetura e regras do jogo (`SPEC_JOGO.md`).
2. **Disparar o "Forno Assíncrono":** Com a especificação aprovada, o agente programa do zero os arquivos `index.html`, `style.css` e `game.js` (com o **pássaro clássico do Flappy Bird** e barreiras corporativas com **placas horizontais grandes de alta legibilidade**) e valida visualmente no navegador. Enquanto ele trabalha em background, você não fica esperando: você usa o **Agent Manager (`Cmd/Ctrl + E`)** para abrir uma segunda conversa e executar a [Trilha 05 — Radar MCP Brasil](../05-radar-mcp-brasil/README.md)!
3. **Retorno e Playtest no Ato 3 (Zero Consumo Extra de Tokens):** Quando terminar o Ato 2, você simplesmente retorna à Conversa 1 no Agent Manager, inspeciona o **Walkthrough Artifact** com o print da auditoria automatizada e joga o resultado pronto!

---

## 📂 Arquivos Iniciais Desta Pasta

| Arquivo | Função |
| :--- | :--- |
| `README.md` / [`LEIAME_PRIMEIRO.md`](./LEIAME_PRIMEIRO.md) | Este guia completo passo a passo para execução autônoma. |
| [`index.html`](./index.html) | Página inicial de Blueprint (será substituída automaticamente pelo jogo quando o agente concluir a Etapa 2). |
| *(Serão criados pelo Agente)* | `SPEC_JOGO.md`, `index.html`, `style.css` e `game.js`. |

---

## 🛠️ Passo a Passo Completo (Autoguiado do Zero)

Mesmo que você não tenha participado presencialmente do evento, basta seguir as **3 etapas abaixo** dentro do **Google Antigravity**:

---

### 📋 Etapa 1 (Ato 1): Gerar a Especificação Completa do Produto (`SPEC_JOGO.md`)

1. Vincule a pasta raiz deste repositório no **Google Antigravity 2.0** pela **Opção A (Zero Tokens)**: clique no botão **`Select Project`** na caixa de chat ou no ícone de pasta **`+`** na barra lateral esquerda → **`New Project`** ou **`Create New Project → + Add Folder`** *(ou pela Opção B: clique em `Create New Project` → selecione `Quick Start`)*.
2. **⚡ Modelo Recomendado (`Gemini 3.8 Flash`):** No seletor de modelo da caixa de chat, selecione **`Gemini 3.8 Flash (High)`** ou **`Gemini 3.8 Flash (Medium)`** (caso disponível) para máxima velocidade e para não esgotar sua cota gratuita (modelos como *Argon* ou *Claude* consomem até 3x mais créditos).
3. No painel do Agente, copie e envie o prompt abaixo:

```text
Atue como um Arquiteto de Produto e Games. Crie dentro da pasta @tracks/04-flappy-hero/ um arquivo bem estruturado chamado SPEC_JOGO.md contendo a especificação completa para desenvolvermos do zero um jogo web (HTML5 Canvas + CSS + JS puro, zero dependências) estilo Flappy Bird chamado "Flappy Executive Bird: Escapando da Burocracia".

A especificação deve detalhar estes 4 pilares:
1. Mecânica, Física e Estados do Jogo: Gravidade suave e fluida (60fps), espaçamento generoso entre obstáculos, telas claras de Início, Em Voo e Game Over, e controle responsivo por Barra de Espaço ou Clique do Mouse (sem modo piloto automático).
2. Obstáculos Bem-Humorados e de Alta Legibilidade: Os "canos" devem ser barreiras corporativas com rótulos divertidos ("Reunião que podia ser e-mail", "Planilha V14_FINAL.xlsx", "Sistema Legado", "Orçamento Congelado", "Aprovação em 7 Níveis" e "Silo Organizacional"). IMPORTANTE PARA LEGIBILIDADE: nunca esprema o texto verticalmente dentro do cano; desenhe placas horizontais largas de alto contraste (fundo escuro com borda neon e fonte grande `bold 16px sans-serif` branca/amarela) centralizadas na boca de cada obstáculo e exiba também no topo do Canvas um banner grande com o nome da próxima barreira ("⚠️ Próxima Burocracia: ...").
3. Personagem Clássico (Pássaro do Flappy Bird): Desenhe diretamente no Canvas uma figura única e carismática do pássaro clássico estilo Flappy Bird original (corpo amarelo-ouro arredondado, olho grande expressivo, bico laranja e asinha branca animada batendo a cada pulo).
4. Efeitos Sonoros e Progressão Executiva: Efeitos sonoros sintetizados via Web Audio API (pulo, ponto marcado e colisão) e placar com recorde salvo em `localStorage` e medalhas executivas (Estagiário, Gerente, Diretor e C-Level).

Apenas crie o documento @tracks/04-flappy-hero/SPEC_JOGO.md primeiro para minha revisão.
```

4. **Dica Executiva:** Abra o arquivo `tracks/04-flappy-hero/SPEC_JOGO.md` gerado pelo agente. Se quiser deixar o jogo com a cara da sua empresa, adicione na lista de obstáculos algum jargão ou burocracia famosa do seu dia a dia!

---

### ⚙️ Etapa 2 (Ato 1): Disparar a Construção Completa no "Forno Assíncrono"

Agora que o documento `SPEC_JOGO.md` está pronto, vamos ordenar que o agente implemente todo o jogo e faça uma verificação visual rápida no navegador:

1. No mesmo chat do **Google Antigravity**, copie e envie:

```text
Excelente! Agora implemente o jogo completo dentro de @tracks/04-flappy-hero/ (sobrescrevendo o index.html de blueprint e criando style.css e game.js) seguindo 100% a especificação em @tracks/04-flappy-hero/SPEC_JOGO.md, garantindo que o pássaro clássico do Flappy Bird fique bem desenhado e os rótulos das burocracias fiquem grandes e fáceis de ler nas placas horizontais e no banner superior. Execute todas as etapas diretamente de ponta a ponta sem pausar para confirmações intermediárias.
Quando terminar de criar os arquivos:
1. Garanta que um servidor web local esteja ativo na porta 8080 (em background) e faça uma única visita rápida no Browser Sub-Agent abrindo `http://localhost:8080/tracks/04-flappy-hero/index.html` e dando 1 clique inicial apenas para verificar que o Canvas, o pássaro clássico e o placar renderizaram sem erros no console (não fique jogando várias partidas no navegador).
2. Capture 1 screenshot, gere imediatamente o Walkthrough Artifact e exiba no final da sua resposta o link clicável `http://localhost:8080/tracks/04-flappy-hero/index.html` para eu abrir e jogar!
```

2. ⚡ **Experimente a Orquestração Paralela (`Cmd/Ctrl + E`):**
   - **Dica para Iniciantes:** Se aparecer um botão azul **`Proceed` / `Approve` / `Accept`** no chat do Antigravity pedindo confirmação do plano, **clique nele primeiro** para iniciar a criação dos arquivos!
   - Enquanto este agente programa os arquivos e abre o navegador, pressione **`Cmd + E`** (Mac) ou **`Ctrl + E`** (Windows/Linux) — ou clique no botão **`+` (New Conversation)** — para abrir o **Agent Manager**.
   - Clique em **New Conversation** e siga o passo a passo da **[Trilha 05 — Radar Executivo MCP Brasil](../05-radar-mcp-brasil/README.md)** em paralelo!

---

### 🏆 Etapa 3 (Ato 3): Retorno à Conversa 1, Auditoria do Walkthrough e Playtest!

1. Após concluir o painel da sua empresa no Ato 2, clique novamente na **Conversa 1** (na barra lateral esquerda do Antigravity).
2. Inspecione o **Walkthrough Artifact** entregue pelo Agente 1 — veja a captura de tela do **Browser Sub-Agent** comprovando que o pássaro clássico e as placas das burocracias corporativas renderizaram perfeitamente!
3. Abra [`tracks/04-flappy-hero/index.html`](./index.html) no seu navegador, jogue usando a `Barra de Espaço` ou `Clique do Mouse` e veja até qual medalha executiva (*Estagiário*, *Gerente*, *Diretor*, *C-Level*) você chega!

---

### 🚀 Etapa Bônus (Opcional — Laboratório Extra): Evoluindo Seu Jogo

Se quiser continuar explorando o poder do Antigravity nesta trilha após o workshop, experimente pedir:
- **Modo Café Expresso (Invencibilidade Temporária):** *"Adicione xícaras de café expresso flutuando entre os obstáculos. Quando o pássaro pegar um café, ative o 'Modo Hiper-Produtividade' por 5 segundos, voando em dobro da velocidade e destruindo qualquer burocracia pelo caminho com explosão de partículas!"*
- **Placar de Recordes Persistente:** *"Adicione um Hall da Fama em `localStorage` que salva os 5 maiores placares com o nome do executivo e a medalha conquistada (Estagiário, Diretor, C-Level, Lenda Agêntica)."*
