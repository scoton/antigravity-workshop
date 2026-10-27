# 🦸‍♂️ Trilha 04 (Atos 1 e 3 do Workshop): Flappy Executive Hero — Do Zero ao Super-Herói IA

> **Tempo estimado:** 7 minutos (Ato 1) + 10 minutos (Ato 3) — **100% autoguiado no Google Antigravity**  
> **Nível:** Iniciante a Avançado (Zero necessidade de programar manualmente)  
> **Conceitos do Google Antigravity praticados:** *Spec-Driven Development* (`SPEC_JOGO.md`), Construção Autônoma do Zero em Background, Multitarefa no *Agent Manager (`Cmd/Ctrl + E`)*, Multimodalidade (*Selfie → Caricatura de Super-Herói*), *Skills* (`/gerar-super-heroi`) e Auto-Verificação Visual via *Browser Sub-Agent*.

---

## 🎯 Por Que Esta Pasta Começa Quase Vazia?

Diferente das Trilhas `01`, `02` e `03` (que já trazem simuladores prontos para você modificar), **esta trilha começa quase vazia de propósito!**

Aqui você vai vivenciar o fluxo completo de um **Arquiteto de Produto na Era Agêntica**:
1. **Especificar antes de construir (*Spec-Driven Development*):** Você pede ao agente para redigir primeiro o documento de arquitetura e regras do jogo (`SPEC_JOGO.md`).
2. **Disparar o "Forno Assíncrono":** Com a especificação aprovada, o agente programa do zero os arquivos `index.html`, `style.css` e `game.js` e testa o jogo sozinho no navegador usando um **Piloto Automático de IA (`#btn-autopilot`)**. Enquanto ele trabalha por 3 a 4 minutos, você não fica esperando: você usa o **Agent Manager (`Cmd/Ctrl + E`)** para abrir uma segunda conversa e executar a [Trilha 05 — Radar MCP Brasil](../05-radar-mcp-brasil/README.md)!
3. **Personalização Multimodal (Sua Selfie vira Super-Herói!):** Quando o jogo fica pronto, você usa o utilitário [`selfie-studio.html`](./selfie-studio.html) para tirar uma foto rápida na webcam (ou escolher uma foto sua) e aciona a Skill `/gerar-super-heroi` para o agente transformar você em uma **Caricatura de Super-Herói / Super-Heroína** voando com capa esvoaçante e desviando das burocracias corporativas!

---

## 📂 Arquivos Iniciais Desta Pasta

| Arquivo | Função |
| :--- | :--- |
| `README.md` / [`LEIAME_PRIMEIRO.md`](./LEIAME_PRIMEIRO.md) | Este guia completo passo a passo para execução autônoma. |
| [`selfie-studio.html`](./selfie-studio.html) | Estúdio web local (100% privado no seu navegador) para capturar uma selfie com a webcam, recortar em medalhão e baixar como `minha-selfie.png`. |
| *(Serão criados pelo Agente)* | `SPEC_JOGO.md`, `index.html`, `style.css`, `game.js` e `hero-caricatura.png`. |

---

## 🛠️ Passo a Passo Completo (Autoguiado do Zero)

Mesmo que você não tenha participado presencialmente do evento, basta seguir as **4 etapas abaixo** dentro do **Google Antigravity**:

---

### 📋 Etapa 1: Gerar a Especificação do Produto (`SPEC_JOGO.md`)

1. Vincule a pasta raiz deste repositório no **Google Antigravity 2.0** (clicando em **`Select Project`** na caixa de chat ou no ícone de pasta **`+`** na barra lateral esquerda → **`New Project`** ou **`Create Project → + Add Folder`**, ou usando **`Quick Start`**).
2. No painel do Agente, copie e envie o prompt abaixo:

```text
Atue como um Arquiteto de Produto e Games. Crie dentro da pasta @tracks/04-flappy-hero/ um arquivo chamado SPEC_JOGO.md contendo a especificação completa para desenvolvermos do zero um jogo web (HTML5 Canvas + CSS + JS puro, zero dependências) estilo Flappy Bird chamado "Flappy Executive Hero: Escapando da Burocracia".

A especificação deve detalhar:
1. Mecânica e Física: Gravidade suave e fluida (60fps), espaçamento generoso entre obstáculos e controle por Barra de Espaço / Clique.
2. Obstáculos Bem-Humorados: Os "canos" devem ser barreiras corporativas com rótulos visíveis e divertidos, como "Reunião que podia ser e-mail", "Planilha V14_FINAL.xlsx", "Sistema Legado", "Orçamento Congelado", "Aprovação em 7 Níveis" e "Silo Organizacional".
3. Modo Piloto Automático IA (#btn-autopilot): Um botão na tela que, quando ativado, faz o herói calcular o pulo ideal sozinho para desviar das barreiras (ótimo para demonstração e testes automatizados).
4. Sistema de Avatar Super-Herói: O personagem deve ser desenhado com uma capa de super-herói esvoaçante animada no Canvas e rastro de partículas, suportando carregar a imagem `hero-caricatura.png` / `minha-selfie.png` ou trocar de foto direto na tela (#btn-upload-hero).
5. Efeitos Sonoros Sintetizados (Web Audio API) e placar com medalhas executivas.

Apenas crie o documento @tracks/04-flappy-hero/SPEC_JOGO.md primeiro para minha revisão.
```

3. **Dica Executiva:** Abra o arquivo `tracks/04-flappy-hero/SPEC_JOGO.md` gerado pelo agente. Se quiser deixar o jogo com a cara da sua empresa, adicione na lista de obstáculos algum jargão ou burocracia famosa do seu dia a dia!

---

### ⚙️ Etapa 2: Disparar a Construção Completa no "Forno Assíncrono"

Agora que o documento `SPEC_JOGO.md` está pronto, vamos ordenar que o agente implemente todo o jogo e faça o teste automatizado no navegador:

1. No mesmo chat do **Google Antigravity**, copie e envie:

```text
Excelente! Agora implemente o jogo completo dentro de @tracks/04-flappy-hero/ (sobrescrevendo o index.html de blueprint e criando style.css e game.js) seguindo 100% a especificação em @tracks/04-flappy-hero/SPEC_JOGO.md. Execute todas as etapas diretamente de ponta a ponta sem pausar para confirmações intermediárias.
Quando terminar de criar os arquivos:
1. Abra o jogo no Browser Sub-Agent.
2. Ative o botão de Piloto Automático IA (#btn-autopilot) para jogar automaticamente por alguns segundos, verificando que o herói desvia dos obstáculos corporativos e marca pontos sem erros no console.
3. Gere um Walkthrough Artifact com screenshots do jogo funcionando!
```

2. ⚡ **Experimente a Orquestração Paralela (`Cmd/Ctrl + E`):**
   - **Dica para Iniciantes:** Se aparecer um botão azul **`Proceed` / `Approve` / `Accept`** no chat do Antigravity pedindo confirmação do plano, **clique nele primeiro** para iniciar a criação dos arquivos!
   - Enquanto este agente programa os arquivos e abre o navegador (o que leva cerca de 3 minutos), pressione **`Cmd + E`** (Mac) ou **`Ctrl + E`** (Windows/Linux) — ou clique no botão **`+` (New Conversation)** — para abrir o **Agent Manager**.
   - Clique em **New Conversation** e siga o passo a passo da **[Trilha 05 — Radar Executivo MCP Brasil](../05-radar-mcp-brasil/README.md)** em paralelo!
   - Quando terminar (ou quando o Agent Manager notificar que a conversa da Trilha 04 concluiu), volte para esta conversa e veja o jogo pronto e testado no **Walkthrough Artifact**!

---

### 📸 Etapa 3: Capturar Sua Selfie Rápida ou Escolher um Avatar em 1 Clique (1 Minuto)

Agora vamos transformar **você** no protagonista do jogo!

1. Abra o arquivo [`tracks/04-flappy-hero/selfie-studio.html`](./selfie-studio.html) no seu navegador (ou clique em **📸 Abrir Selfie Studio** no Mission Hub `index.html`).
2. Clique em **🎥 Ligar Webcam** → faça uma pose de líder ou super-herói → clique em **📸 Capturar Selfie** *(ou, se estiver sem webcam, clique em um dos **4 Avatares Executivos de Super-Herói** prontos na tela!)*.
3. Clique em **⬇️ Baixar `minha-selfie.png`**.
   *(Nota: se o seu navegador salvar automaticamente na pasta `~/Downloads/minha-selfie.png`, não precisa mover o arquivo manualmente — a Skill abaixo encontra e copia da pasta `Downloads` sozinha para você!).*

---

### 🎨 Etapa 4: Transformar Sua Selfie em uma Caricatura de Super-Herói (`/gerar-super-heroi`)

Volte para a conversa desta trilha no **Google Antigravity** e envie o prompt abaixo:

```text
Execute a skill @.agent/skills/gerar-super-heroi/SKILL.md:
1. Localize a minha foto em `tracks/04-flappy-hero/minha-selfie.png` (caso ainda não esteja nessa pasta, busque automaticamente o arquivo mais recente `~/Downloads/minha-selfie*.png` e copie para `tracks/04-flappy-hero/minha-selfie.png`; se não houver nenhum arquivo, gere um Avatar Executivo de Super-Herói padrão).
2. Analise meus traços marcantes na imagem e gere uma versão em estilo Caricatura divertida de Super-Herói / Super-Heroína baseada em mim e salve em `tracks/04-flappy-hero/hero-caricatura.png`.
3. Atualize o jogo em @tracks/04-flappy-hero/ para que o protagonista voando seja o meu Super-Herói Caricatura (com recorte em medalhão dourado, capa vermelha esvoaçante animada no Canvas e um botão na tela para alternar ao vivo entre a Caricatura IA e a minha Selfie original!).
4. Abra o jogo no Browser Sub-Agent, ative o Piloto IA para fazer um voo de teste com o meu Super-Herói desviando das burocracias e gere o Walkthrough com o print final!
```

---

### 🚀 Etapa Bônus (Opcional): Evoluindo Seu Jogo

Se quiser continuar explorando o poder do Antigravity nesta trilha, experimente pedir:
- **Modo Café Expresso (Invencibilidade Temporária):** *"Adicione xícaras de café expresso flutuando entre os obstáculos. Quando o herói pegar um café, ative o 'Modo Hiper-Produtividade' por 5 segundos, voando em dobro da velocidade e destruindo qualquer burocracia pelo caminho com explosão de partículas!"*
- **Placar de Recordes Persistente:** *"Adicione um Hall da Fama em `localStorage` que salva os 5 maiores placares com o nome do executivo e a medalha conquistada (Estagiário, Diretor, C-Level, Lenda Agêntica)."*
