# 🚀 AI Bootcamp 2026 (Singularity Brazil) — Workshop Prático: Google Antigravity

Bem-vindo(a) ao laboratório prático (**Self-Paced Hands-On**) do **AI Bootcamp 2026**!

Neste workshop de **~33 minutos**, você vai experimentar na prática a transição da fase de **Copilotos (Assistência Individual)** para a **Orquestração Agêntica (Centro de Comando)** usando o **Google Antigravity**.

> **A Coreografia em 3 Atos de Hoje ("O Forno Assíncrono"):**
> 1. **Ato 1 (`04-flappy-hero`):** Você atua como Arquiteto de Produto, gera uma especificação completa (`SPEC_JOGO.md`) e coloca o **Agente 1** para construir e testar um jogo inteiro do zero em background (*Flappy Executive Hero*).
> 2. **Ato 2 (`05-radar-mcp-brasil`):** Sem ficar esperando o jogo terminar, você abre o **Agent Manager (`Cmd/Ctrl + E`)** e comanda o **Agente 2** conectado a um **Servidor MCP Brasil** que consulta em tempo real o **CNPJ real da sua empresa na Receita Federal** + as taxas de hoje do **Banco Central (Selic, CDI, IPCA e Dólar)** para construir um **Painel Executivo de Inteligência Macroeconômica**!
> 3. **Ato 3 (`04-flappy-hero`):** Você volta para a Aba 1, vê o jogo pronto e transforma uma **selfie sua em uma Caricatura de Super-Herói/Super-Heroína** desviando das burocracias corporativas!

---

## 🧭 Mapa do Repositório

| Módulo | Pasta no Repositório | O que você vai fazer |
| :--- | :--- | :--- |
| **🦸‍♂️ Atos 1 e 3: Flappy Executive Hero** | `tracks/04-flappy-hero/` | **Começa quase vazia!** Você gera a especificação (`SPEC_JOGO.md`), dispara a construção autônoma e no final usa o `selfie-studio.html` + `/gerar-super-heroi` para voar com a sua própria caricatura de Super-Herói! |
| **🇧🇷 Ato 2: Radar Executivo com Servidor MCP Brasil** | `mcp/` & `tracks/05-radar-mcp-brasil/` | Conecta o agente a dados públicos brasileiros em tempo real (**CNPJ + Selic, CDI, IPCA e Dólar do Banco Central**) para construir um Dashboard Executivo personalizado para a sua empresa! (Veja também [`mcp/GUIA_MCP_BRASIL.md`](mcp/GUIA_MCP_BRASIL.md)). |
| **🧪 Laboratório Extra (3 Simuladores Prontos)** | `tracks/01-crisis-commander/`<br>`tracks/02-orbital-defense/`<br>`tracks/03-boardroom-simulator/` | **Starter Kits completos** (*Crisis Commander*, *Orbital Defense* e *Boardroom War Room*) prontos para você explorar caso termine antes ou para praticar com sua equipe pós-evento! |

---

## 🏛️ Anatomia de um "Workspace Executivo" no Google Antigravity

Um **Workspace** no Antigravity não serve apenas para equipes de engenharia de software — ele é uma **"Sala de Guerra Digital" (War Room)** que você pode criar para qualquer iniciativa estratégica (ex.: `planejamento-2027/`, `comite-m-and-a/`, `inteligencia-setorial/`). Observe como este próprio repositório está organizado em **4 camadas executivas**:

| Camada no Workspace | Onde Fica | Papel na Organização Agêntica |
| :--- | :--- | :--- |
| **1. Rules (`AGENTS.md` & `.agent/rules/`)** | Raiz e `.agent/rules/` | **Governança Sempre Ativa:** O "Código de Conduta e Compliance" que todo agente lê obrigatoriamente antes de agir. |
| **2. Skills (`.agent/skills/<nome>/SKILL.md`)** | `.agent/skills/` | **Playbooks Sob Demanda (*Progressive Disclosure*):** Procedimentos especializados que não poluem a memória do agente e são ativados automaticamente quando o tema surge na conversa **ou** via comando `/` (`/radar-mcp-brasil`, `/gerar-super-heroi`). |
| **3. MCP Servers (`mcp/`)** | `mcp/mcp_brasil_zero_deps.py` | **Conexão com Dados Reais:** Protocolo universal que conecta os agentes a APIs externas (Receita Federal, Banco Central) ou sistemas internos da sua empresa. |
| **4. Automations (`/automation`)** | Comando `/automation` | **Execução Recorrente em Background:** Agentes agendados (diários/semanais) que rodam sozinhos com permissões auditadas e entregam relatórios prontos. |

---

## ⏱️ Roteiro Self-Paced em 3 Atos (33 Minutos)

### 🏁 Preparação Rápida (2 minutos)

1. Baixe/Clone este repositório e abra a pasta no **Google Antigravity**:
   ```bash
   git clone https://github.com/scoton/antigravity-workshop.git
   cd antigravity-workshop
   ```
2. Para visualizar o portal inicial no navegador, rode no terminal (ou peça ao agente):
   ```bash
   python3 -m http.server 8080
   ```
   *(Ou simplesmente abra o arquivo `index.html` diretamente no navegador).*

---

### 📋 ATO 1: O Arquiteto de Produto — *Spec-Driven Development* (7 minutos)

**💡 O Conceito Executivo:** Grandes resultados com agentes autônomos começam com uma **especificação clara de arquitetura e critérios de aceite**. Em vez de pedir *"faça um jogo"* de forma vaga, vamos pedir ao Antigravity para primeiro redigir uma especificação completa (`SPEC_JOGO.md`), revisá-la e então disparar a construção autônoma.

#### Passo 1.1 — Gerar a Especificação Completa (`SPEC_JOGO.md`)
No painel do Agente, envie o prompt abaixo:

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

#### Passo 1.2 — Revisar e Disparar a Construção no "Forno Assíncrono"
1. Abra o arquivo `tracks/04-flappy-hero/SPEC_JOGO.md` criado pelo agente (se quiser, adicione o nome de uma "burocracia interna" famosa da sua empresa na lista de obstáculos!).
2. Agora dispare o **Prompt de Construção Completa** abaixo:

```text
Excelente! Agora implemente o jogo completo dentro de @tracks/04-flappy-hero/ (criando index.html, style.css e game.js) seguindo 100% a especificação em @tracks/04-flappy-hero/SPEC_JOGO.md.
Quando terminar de criar os arquivos:
1. Abra o jogo no Browser Sub-Agent.
2. Ative o botão de Piloto Automático IA (#btn-autopilot) para jogar automaticamente por alguns segundos, verificando que o herói desvia dos obstáculos corporativos e marca pontos sem erros no console.
3. Gere um Walkthrough Artifact com screenshots do jogo funcionando!
```

> ⚡ **ATENÇÃO — NÃO FIQUE ESPERANDO!** Assim que o agente começar a trabalhar nesse comando (o que levará cerca de 3 a 4 minutos), **passe imediatamente para o Ato 2 abaixo!**

---

### 🇧🇷 ATO 2: Conexão com o Mundo Real — *Agent Manager & Servidor MCP Brasil* (14 minutos)

**💡 O Conceito Executivo:** Enquanto seu "Engenheiro Autônomo #1" constrói e testa o *Flappy Executive Hero* em background, você vai abrir o **Agent Manager (`Cmd/Ctrl + E`)**, iniciar uma **segunda conversa em paralelo** e conectar um agente a **dados oficiais do Brasil em tempo real via MCP (Model Context Protocol)**!

#### Passo 2.1 — Abrir uma Nova Conversa no Agent Manager
1. Pressione `Cmd + E` (Mac) ou `Ctrl + E` (Windows/Linux) para abrir o **Agent Manager**.
2. Clique em **New Conversation / Novo Agente** para iniciar um segundo agente trabalhando em paralelo.

#### Passo 2.2 — Consultar o CNPJ da Sua Empresa + Banco Central via MCP Brasil
Copie o prompt abaixo, trocando `[SEU_CNPJ_AQUI]` pelo **CNPJ da sua empresa** *(ou use um CNPJ público de referência, como WEG `84.429.695/0001-11`, Embraer `07.689.002/0001-89`, Itaú `60.872.504/0001-23`, Magalu `47.960.950/0001-21` ou Petrobras `33.000.167/0001-01`)*:

```text
Execute o workflow @.agent/workflows/radar-mcp-brasil.md para o CNPJ [SEU_CNPJ_AQUI, ex: 84.429.695/0001-11]:
1. Utilize o servidor MCP Brasil em @mcp/mcp_brasil_zero_deps.py para consultar em tempo real os dados oficiais deste CNPJ na Receita Federal/BrasilAPI (Razão Social, CNAE Principal, Capital Social, Porte, UF e Quadro Societário) e os indicadores atuais do Banco Central (Taxa Selic, CDI, IPCA e Dólar).
2. Com base nos dados reais retornados, construa dentro de @tracks/05-radar-mcp-brasil/ um "Painel Executivo de Inteligência Macroeconômica e Setorial" (index.html, style.css e app.js) personalizado para esta empresa, com simulador interativo de impacto de Selic, Câmbio e IPCA no setor do CNAE dela.
3. Abra o painel no Browser Sub-Agent para validar e gere um Walkthrough Artifact com o diagnóstico estratégico!
```

*(Nota: Para conhecer também o ecossistema completo do `github.com/mcp-brasil/mcp-brasil` e do `mcp.apibrasil.io`, consulte o guia [`mcp/GUIA_MCP_BRASIL.md`](mcp/GUIA_MCP_BRASIL.md)).*

#### Passo 2.3 (Próximo Nível — 1 min): Agendar como Automação Recorrente (`/automation`)
E se, toda **segunda-feira às 08h00**, antes da sua reunião de diretoria, o Antigravity consultasse o Banco Central sozinho e atualizasse esse briefing? Experimente digitar no chat:

```text
/automation Crie uma automação semanal toda segunda-feira às 08h00 para consultar os indicadores atualizados do Banco Central via mcp/mcp_brasil_zero_deps.py e atualizar o resumo executivo da minha empresa em tracks/05-radar-mcp-brasil/.
```

---

### 🦸‍♂️ ATO 3: O Retorno Triunfal & Sua Caricatura de Super-Herói (10 minutos)

**💡 O Conceito Executivo:** Agora volte ao **Agent Manager (`Cmd/Ctrl + E`)** e clique na sua **primeira conversa** (a da Trilha `04-flappy-hero`). Veja que, enquanto você analisava dados do Banco Central e da Receita Federal na Aba 2, o Agente 1 construiu o jogo completo, abriu o navegador, testou com o Piloto IA e entregou o **Walkthrough Artifact**!

Agora vamos para o grand finale: **colocar você mesmo como o Super-Herói/Super-Heroína do jogo!**

#### Passo 3.1 — Capturar Sua Selfie Rápida (1 minuto)
1. No navegador, abra `tracks/04-flappy-hero/selfie-studio.html` (disponível no botão do Mission Hub).
2. Clique em **Ligar Webcam → 📸 Capturar Selfie → ⬇️ Baixar `minha-selfie.png`** e salve o arquivo dentro da pasta `tracks/04-flappy-hero/minha-selfie.png` (ou coloque qualquer foto sua nessa pasta).

#### Passo 3.2 — Transformar Sua Selfie em Super-Herói Caricatura!
De volta à conversa da **Trilha 04** no Antigravity, digite `/gerar-super-heroi` ou envie o prompt abaixo:

```text
Execute o workflow @.agent/workflows/gerar-super-heroi.md:
1. Analise a minha foto em @tracks/04-flappy-hero/minha-selfie.png (observando meus traços marcantes como cabelo, óculos, barba, sorriso e expressão).
2. Gere uma versão em estilo Caricatura divertida de Super-Herói / Super-Heroína baseada em mim (salva em `tracks/04-flappy-hero/hero-caricatura.png`).
3. Atualize o jogo em @tracks/04-flappy-hero/ para que o protagonista voando seja o meu Super-Herói Caricatura (com recorte em medalhão/escudo, capa vermelha e dourada esvoaçante animada no Canvas e botão na tela para alternar entre a Caricatura IA e a minha Selfie original!).
4. Abra o jogo no Browser Sub-Agent, faça um voo de teste com o meu Super-Herói desviando das burocracias e gere o Walkthrough com o print final!
```

> 💡 **Memória Organizacional (Transformando Conversas em Skills):** Sempre que você e sua equipe descobrirem um fluxo de alto valor no Antigravity, não deixe o conhecimento morrer no histórico do chat! Basta pedir: *"Transforme o fluxo que acabamos de executar em uma nova Skill reutilizável dentro de `.agent/skills/` para toda a equipe."*

---

## 🧪 Laboratório Extra (Para quem terminar antes ou para explorar pós-evento!)

O repositório também inclui **3 Simuladores Executivos completos** prontos para você evoluir usando os workflows `/modo-caos`, `/adaptar-setor` e `/auditoria-executiva`:

1. **`tracks/01-crisis-commander/`:** Jogo de tomada de decisão sob incerteza (estilo *Reigns*) ao longo de 8 trimestres (2026–2027).
2. **`tracks/02-orbital-defense/`:** Jogo arcade tático em HTML5 Canvas (60 FPS) com escudos, Pulso EMP e Piloto Automático de IA.
3. **`tracks/03-boardroom-simulator/`:** Simulador C-Level de Conselho de Administração com Matriz Risco x Retorno e votos de CFO, CTO e CRO.
