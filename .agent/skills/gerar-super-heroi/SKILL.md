---
name: gerar-super-heroi
description: >-
  Transforma a selfie do participante (minha-selfie.png) em uma caricatura
  divertida de Super-Herói ou Super-Heroína e integra como o personagem jogável
  do Flappy Executive Hero em tracks/04-flappy-hero/. Use sempre que o usuário
  pedir para criar o super-herói, usar a selfie no jogo ou acionar
  /gerar-super-heroi.
---

# Skill: Gerar Super-Herói Caricatura (`/gerar-super-heroi`)

Quando o usuário acionar esta skill para personalizar o personagem da **Trilha 04 (`tracks/04-flappy-hero/`)**:

1. **Localizar Automaticamente a Foto Base (`minha-selfie.png`):**
   - Verifique primeiro se existe `tracks/04-flappy-hero/minha-selfie.png` (ou outra imagem `.png`/`.jpg` na pasta `tracks/04-flappy-hero/`).
   - **Busca Automática na Pasta `Downloads`:** Como muitos participantes clicam em *"Baixar `minha-selfie.png`"* no `selfie-studio.html` e o navegador salva automaticamente em `~/Downloads/minha-selfie.png` (ou `~/Transferências/minha-selfie.png`), caso o arquivo não esteja em `tracks/04-flappy-hero/minha-selfie.png`, verifique imediatamente `~/Downloads/minha-selfie*.png` e copie o arquivo mais recente para `tracks/04-flappy-hero/minha-selfie.png`!
   - Caso não exista em nenhum dos dois locais, gere imediatamente um avatar executivo caricatural em `tracks/04-flappy-hero/hero-caricatura.png` (e oriente que o participante também pode trocar a foto ao vivo pelo botão `#btn-upload-hero` na tela do jogo).

2. **Analisar Traços Visuais e Gerar a Caricatura de Super-Herói:**
   - Se houver foto (`minha-selfie.png` ou imagem anexada), inspecione a imagem para identificar as características marcantes (formato e cor do cabelo, barba, formato dos óculos, sorriso, expressão facial).
   - Use a ferramenta de geração de imagens (se disponível no ambiente) para criar uma **ilustração estilo Caricatura Comic / Cartoon vibrante de Super-Herói ou Super-Heroína** com essas mesmas características marcantes, vestindo traje executivo-futurista de super-herói com capa, e salve em `tracks/04-flappy-hero/hero-caricatura.png`.
   - *Fallback inteligente:* Caso a ferramenta de geração de imagem não esteja habilitada na conta do participante, crie/atualize o renderizador caricatural direto em HTML5 Canvas que recorta o rosto de `minha-selfie.png` em estilo *Bobblehead Caricatura* (com contorno neon estilizado, óculos/máscara de herói alternável, traje de super-herói, capa vermelha/dourada ondulando com a física do voo e jato propulsor!).

3. **Integrar ao Jogo (`tracks/04-flappy-hero/index.html` e `game.js`):**
   - Atualize o jogo para usar o novo **Super-Herói** como personagem principal:
     - Desenhe o avatar recortado em medalhão circular/escudo dourado, acompanhado de uma **capa de super-herói animada via Canvas** que ondula conforme a velocidade vertical (`vy`) e partículas a cada impulso!
     - Adicione também na interface do jogo um botão **"📸 Trocar Foto / Carregar Selfie (`#btn-upload-hero`)"** via `<input type="file" accept="image/*">` e um botão para alternar entre **Modo Caricatura IA** e **Foto Original**.

4. **Validar no Browser Sub-Agent:**
   - Abra o jogo atualizado no **Browser Sub-Agent**, ative o Piloto Automático IA (`#btn-autopilot`) para realizar um voo de teste com o novo Super-Herói desviando dos obstáculos corporativos e gere um **Walkthrough Artifact** com um screenshot do Super-Herói em ação!
