---
description: Transforma a selfie do participante em uma caricatura divertida de Super-Herói/Super-Heroína e integra como o personagem jogável do Flappy Executive Hero.
---

# Workflow: Gerar Super-Herói Caricatura (`/gerar-super-heroi`)

Quando o usuário acionar este workflow para personalizar o personagem da **Trilha 04 (`tracks/04-flappy-hero/`)**:

1. **Localizar a Foto Base (Selfie) — Com Busca Automática em `~/Downloads`:**
   - Verifique primeiro se existe o arquivo `tracks/04-flappy-hero/minha-selfie.png` (ou outra imagem `.png`/`.jpg` na pasta `tracks/04-flappy-hero/`).
   - **Auto-Descoberta Inteligente:** Caso o arquivo ainda não esteja em `tracks/04-flappy-hero/minha-selfie.png`, verifique automaticamente na pasta `~/Downloads/` do usuário (ex.: `ls -t ~/Downloads/minha-selfie*.png`) e copie o arquivo mais recente para `tracks/04-flappy-hero/minha-selfie.png`!
   - Caso não haja nenhuma foto nem em `tracks/04-flappy-hero/` nem em `~/Downloads/`, oriente o usuário a abrir `tracks/04-flappy-hero/selfie-studio.html` (onde ele pode tirar uma selfie ou escolher 1 dos 4 Avatares Executivos de Super-Herói em 1 clique!) — e gere imediatamente um **Super-Herói Executivo Caricatural**!

2. **Analisar Traços Visuais e Gerar a Caricatura de Super-Herói:**
   - Se houver foto (`minha-selfie.png` ou imagem anexada), inspecione a imagem para identificar as características marcantes (formato e cor do cabelo, barba, formato dos óculos, sorriso, expressão facial).
   - Use a ferramenta de geração de imagens (se disponível no ambiente) para criar uma **ilustração estilo Caricatura Comic / Cartoon vibrante de Super-Herói ou Super-Heroína** com essas mesmas características marcantes, vestindo traje executivo-futurista de super-herói com capa, e salve em `tracks/04-flappy-hero/hero-caricatura.png`.
   - *Fallback inteligente:* Caso a ferramenta de geração de imagem não esteja habilitada na conta do participante, crie um renderizador caricatural direto em HTML5 Canvas que recorta o rosto de `minha-selfie.png` em estilo *Bobblehead Caricatura* (com contorno estilizado, óculos/máscara de herói opcional, corpo de super-herói, capa vermelha/dourada ondulando com a física do voo e jato propulsor!).

3. **Integrar ao Jogo (`tracks/04-flappy-hero/index.html` e `game.js`):**
   - Atualize o jogo para usar o novo **Super-Herói** como personagem principal:
     - Desenhe o avatar recortado em medalhão circular/hexagonal ou com remoção automática de fundo, acompanhado de uma **capa de super-herói animada via Canvas** que ondula conforme a velocidade vertical (`vy`) e partículas douradas a cada impulso!
     - Adicione também na interface do jogo um botão **"📸 Trocar Foto / Carregar Selfie (`#btn-upload-hero`)"** via `<input type="file" accept="image/*">` e webcam para que o jogador possa trocar a foto do herói a qualquer momento direto na tela do jogo.

4. **Validar no Browser Sub-Agent:**
   - Abra o jogo atualizado no **Browser Sub-Agent**, inicie uma partida com o novo Super-Herói voando entre os obstáculos corporativos e gere um **Walkthrough Artifact** com um screenshot do Super-Herói em ação!
