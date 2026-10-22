/**
 * TRILHA 01: CRISIS COMMANDER — Executive Decision Game
 * Dica para os participantes no Google Antigravity:
 * Na Missão 1, peça ao Agente para personalizar este array `SCENARIOS`
 * para o setor real da sua empresa e criar o botão "Consultor IA do Board"!
 */

const SCENARIOS = [
  {
    quarter: "Q1 2026",
    category: "Disrupção Competitiva",
    title: "Concorrente Nativo Agêntico Entra no País",
    description:
      "Uma startup global acaba de lançar uma operação no Brasil operando com esquadrões de agentes autônomos e oferecendo o mesmo serviço principal da sua empresa com SLA 4x mais rápido e preço 30% menor. Os clientes corporativos estão pedindo renegociação imediata.",
    choices: [
      {
        id: "btn-choice-0",
        title: "Acelerar Orquestração Agêntica no Core Business",
        tag: "Transformação Estrutural",
        description: "Redirecionar 20% do orçamento anual para redesenhar processos críticos com agentes autônomos e proteger a base de clientes.",
        impacts: { cash: -15, agility: +22, trust: +12, resilience: -5 },
        feedback: "O investimento consumiu caixa no curto prazo, mas o mercado reagiu com forte entusiasmo à velocidade da nova operação."
      },
      {
        id: "btn-choice-1",
        title: "Guerra de Preços e Contratos de Fidelidade",
        tag: "Defesa Comercial",
        description: "Conceder descontos agressivos de 25% exigindo cláusula de exclusividade de 24 meses dos grandes clientes.",
        impacts: { cash: -20, agility: -8, trust: +5, resilience: +5 },
        feedback: "Você segurou os clientes temporariamente, mas comprimiu severamente as margens sem resolver a defasagem tecnológica."
      },
      {
        id: "btn-choice-2",
        title: "Focar Apenas no Segmento Premium de Alta Complexidade",
        tag: "Retração Tática",
        description: "Abandonar os clientes de entrada e concentrar a operação apenas em contas que exigem atendimento consultivo presencial.",
        impacts: { cash: +10, agility: -12, trust: -10, resilience: +12 },
        feedback: "O caixa foi preservado no trimestre, mas analistas apontam perda de participação de mercado e baixa capacidade de inovação."
      }
    ]
  },
  {
    quarter: "Q2 2026",
    category: "Cibersegurança & Operações",
    title: "Apagão em Fornecedor Crítico de Nuvem e Dados",
    description:
      "Um ataque coordenado de ransomware atingiu o seu principal parceiro de logística e integração de dados às vésperas do fechamento trimestral. A operação corre risco de parar em 48 horas se você não decidir o protocolo de contingência.",
    choices: [
      {
        id: "btn-choice-0",
        title: "Ativar Redundância Multi-Cloud e Isolamento Total",
        tag: "Segurança Máxima",
        description: "Cortar imediatamente o acesso do fornecedor e migrar cargas críticas em regime de guerra com equipes 24/7.",
        impacts: { cash: -12, agility: +8, trust: +10, resilience: +20 },
        feedback: "A migração de emergência custou caro, mas evitou o contágio e blindou a reputação da companhia perante o mercado."
      },
      {
        id: "btn-choice-1",
        title: "Manter Conexão Parcial para Não Perder Vendas",
        tag: "Alto Risco",
        description: "Continuar operando nos sistemas legados do parceiro com monitoramento manual para evitar queda de receita na semana.",
        impacts: { cash: +12, agility: -5, trust: -18, resilience: -22 },
        feedback: "As vendas continuaram por 3 dias, mas um vazamento secundário de metadados gerou forte desgaste com clientes e reguladores."
      },
      {
        id: "btn-choice-2",
        title: "Internalizar o Sistema Crítico com Esquadrão Interno",
        tag: "Autonomia Técnica",
        description: "Usar agentes de engenharia para construir e homologar um conector próprio substituto em 72 horas.",
        impacts: { cash: -8, agility: +18, trust: +8, resilience: +10 },
        feedback: "A equipe de engenharia entregou o conector substituto em tempo recorde, reduzindo a dependência estrutural de terceiros."
      }
    ]
  },
  {
    quarter: "Q3 2026",
    category: "Regulação & Governança",
    title: "Nova Auditoria Obrigatória sobre Decisões Algorítmicas",
    description:
      "Uma nova norma regulatória exige que todas as decisões automatizadas de crédito, precificação e atendimento apresentem trilha de auditoria explicável em até 30 dias, sob pena de multa diária pesada.",
    choices: [
      {
        id: "btn-choice-0",
        title: "Implementar Governança Baseada em Artifacts e Sandboxes",
        tag: "Compliance Proativo",
        description: "Padronizar políticas determinísticas de segurança e logs de raciocínio auditáveis em todos os agentes da empresa.",
        impacts: { cash: -10, agility: +6, trust: +18, resilience: +18 },
        feedback: "Os auditores elogiaram a transparência dos relatórios automatizados, transformando o compliance em diferencial comercial."
      },
      {
        id: "btn-choice-1",
        title: "Desligar Todas as Automações de IA e Voltar ao Manual",
        tag: "Freio de Mão",
        description: "Suspender os agentes autônomos e contratar força-tarefa temporária para revisar processos manualmente.",
        impacts: { cash: -18, agility: -25, trust: -5, resilience: +8 },
        feedback: "Você evitou multas, mas o tempo de resposta ao cliente triplicou e a produtividade despencou ao nível de 2023."
      },
      {
        id: "btn-choice-2",
        title: "Recorrer Juridicamente e Adiar Adaptação",
        tag: "Aposta Jurídica",
        description: "Questionar a norma via associação setorial para ganhar 6 meses sem alterar os sistemas atuais.",
        impacts: { cash: +5, agility: 0, trust: -15, resilience: -15 },
        feedback: "A liminar caiu após 45 dias, gerando desgaste na imprensa e exigindo um plano emergencial às pressas."
      }
    ]
  },
  {
    quarter: "Q4 2026",
    category: "Choque Macroeconômico",
    title: "Disparo Cambial e Escassez de Infraestrutura de Computação",
    description:
      "Uma crise geopolítica elevou o dólar em 18% em duas semanas e encareceu os custos de nuvem e APIs internacionais. O CFO alerta que o custo de tecnologia vai estourar o orçamento anual se nada for feito.",
    choices: [
      {
        id: "btn-choice-0",
        title: "Arquitetura Híbrida: Nuvem + Modelos Locais (On-Device)",
        tag: "Eficiência Inteligente",
        description: "Roteamento inteligente: usar modelos de fronteira na nuvem para decisões complexas e modelos locais compactos para rotinas de alto volume.",
        impacts: { cash: +15, agility: +14, trust: +8, resilience: +12 },
        feedback: "O custo de inferência caiu 48% sem perda de qualidade, mantendo a soberania sobre os dados mais sensíveis."
      },
      {
        id: "btn-choice-1",
        title: "Corte Linear de 35% em Todos os Projetos de Inovação",
        tag: "Austeridade Rígida",
        description: "Congelar novas iniciativas digitais e impor cotas estritas de uso de tecnologia para todas as diretorias.",
        impacts: { cash: +18, agility: -22, trust: -10, resilience: -5 },
        feedback: "O balanço trimestral fechou no azul, mas dois lançamentos estratégicos foram cancelados e talentos-chave pediram demissão."
      },
      {
        id: "btn-choice-2",
        title: "Repassar 100% do Custo Cambial aos Clientes",
        tag: "Repasse de Preço",
        description: "Reajustar a tabela de preços extraordinariamente para preservar a margem bruta imediata.",
        impacts: { cash: +14, agility: -4, trust: -20, resilience: -8 },
        feedback: "A receita nominal subiu no primeiro mês, mas o churn aumentou significativamente no fechamento do ano."
      }
    ]
  },
  {
    quarter: "Q1 2027",
    category: "Cultura & Talentos",
    title: "Conflito entre Diretorias: 'Shadow AI' vs. TI Central",
    description:
      "As áreas de negócios criaram dezenas de automações paralelas por conta própria sem validação de segurança, alegando que a fila da TI demora meses. O CISO quer bloquear tudo hoje; o VP Comercial ameaça não bater a meta se bloquearem.",
    choices: [
      {
        id: "btn-choice-0",
        title: "Criar Plataforma Federada com Guardrails Pré-Aprovados",
        tag: "Democratização Governada",
        description: "Dar às áreas de negócio autonomia para criar agentes dentro de um ambiente oficial com Rules e políticas de segurança embutidas.",
        impacts: { cash: -6, agility: +20, trust: +10, resilience: +14 },
        feedback: "O atrito entre TI e Negócios desapareceu: a velocidade de experimentação dobrou dentro de um perímetro 100% auditado."
      },
      {
        id: "btn-choice-1",
        title: "Bloquear Tudo e Centralizar 100% na Fila da TI",
        tag: "Controle Absoluto",
        description: "Proibir qualquer agente fora da engenharia central e exigir especificação formal de 40 páginas por projeto.",
        impacts: { cash: -4, agility: -20, trust: -8, resilience: +12 },
        feedback: "O risco de vazamento caiu, mas a empresa voltou à lentidão burocrática e perdeu o timing de duas campanhas."
      },
      {
        id: "btn-choice-2",
        title: "Liberar Geral para Bater a Meta do Trimestre",
        tag: "Velocidade Sem Freio",
        description: "Ignorar os alertas de segurança temporariamente para priorizar o crescimento de receita a qualquer custo.",
        impacts: { cash: +12, agility: +10, trust: -12, resilience: -25 },
        feedback: "As metas comerciais vieram, mas agentes mal configurados enviaram propostas com descontos incorretos para centenas de clientes."
      }
    ]
  },
  {
    quarter: "Q2 2027",
    category: "Cadeia de Suprimentos",
    title: "Ruptura Climática e Gargalo Logístico Nacional",
    description:
      "Eventos climáticos extremos bloquearam três corredores logísticos essenciais. Seus sistemas tradicionais de previsão de estoque baseados em médias históricas ficaram completamente cegos.",
    choices: [
      {
        id: "btn-choice-0",
        title: "Ativar Gêmeo Digital e Simulação Multi-Agente em Tempo Real",
        tag: "Adaptação Dinâmica",
        description: "Colocar agentes em paralelo para simular rotas alternativas, renegociar fretes spot e ajustar preços dinamicamente por região.",
        impacts: { cash: -8, agility: +18, trust: +16, resilience: +15 },
        feedback: "Enquanto concorrentes ficaram sem produto nas prateleiras, sua operação redirecionou 88% da malha em menos de 12 horas."
      },
      {
        id: "btn-choice-1",
        title: "Comprar Estoque de Emergência Pagando Ágio de 40%",
        tag: "Força Bruta Financeira",
        description: "Usar o caixa da empresa para fretar transporte aéreo emergencial e cobrir os furos de abastecimento.",
        impacts: { cash: -24, agility: -4, trust: +10, resilience: +4 },
        feedback: "Os clientes receberam os produtos, mas o fluxo de caixa livre do trimestre foi severamente drenado."
      },
      {
        id: "btn-choice-2",
        title: "Suspender Entregas nas Regiões Afetadas",
        tag: "Contenção de Custo",
        description: "Pausar operações nos estados atingidos até que as rodovias e portos voltem à normalidade.",
        impacts: { cash: +6, agility: -10, trust: -22, resilience: -10 },
        feedback: "Você economizou no frete, mas clientes estratégicos migraram definitivamente para fornecedores mais resilientes."
      }
    ]
  },
  {
    quarter: "Q3 2027",
    category: "Estratégia & M&A",
    title: "Oportunidade Relâmpago de Aquisição Estratégica",
    description:
      "Um concorrente tradicional entrou em crise de liquidez e foi colocado à venda por metade do valor de mercado. Você tem apenas 5 dias úteis para fazer a due diligence completa e apresentar uma proposta vinculante.",
    choices: [
      {
        id: "btn-choice-0",
        title: "Due Diligence Agêntica Paralela + Aquisição Seletiva de Ativos",
        tag: "Precisão Cirúrgica",
        description: "Usar agentes especializados para auditar 50 mil contratos e código-fonte em 48h, comprando apenas a carteira premium sem o passivo legado.",
        impacts: { cash: -10, agility: +16, trust: +20, resilience: +10 },
        feedback: "A auditoria automatizada encontrou passivos ocultos a tempo, permitindo fechar um negócio histórico com risco controlado."
      },
      {
        id: "btn-choice-1",
        title: "Comprar a Empresa Inteira no Escuro para Ganhar Escala",
        tag: "Aposta Audaciosa",
        description: "Assinar o cheque imediatamente para impedir que outro player compre, deixando a integração para depois.",
        impacts: { cash: -28, agility: -15, trust: +8, resilience: -18 },
        feedback: "Você dobrou de tamanho no papel, mas herdou sistemas legados incompatíveis e dívidas trabalhistas pesadas."
      },
      {
        id: "btn-choice-2",
        title: "Declinar a Oferta e Crescer Organicamente",
        tag: "Prudência",
        description: "Evitar distrações de M&A e manter o foco exclusivo no roadmap interno.",
        impacts: { cash: +12, agility: +4, trust: -6, resilience: +8 },
        feedback: "A saúde financeira seguiu sólida, embora um rival tenha comprado os ativos e aumentado a pressão competitiva."
      }
    ]
  },
  {
    quarter: "Q4 2027",
    category: "Visão de Futuro",
    title: "O Salto para 2028: Redesenho do Modelo de Negócios",
    description:
      "Chegou a reunião decisiva do Conselho de Administração. Após quase dois anos de turbulências, você precisa definir a tese central de crescimento da organização para o próximo ciclo estratégico.",
    choices: [
      {
        id: "btn-choice-0",
        title: "Lançar Plataforma de Produtos Autônomos Baseados em Resultado",
        tag: "Vantagem Exponencial",
        description: "Deixar de vender licenças/horas tradicionais e passar a cobrar por resultado entregue pelos seus sistemas agênticos aos clientes.",
        impacts: { cash: +18, agility: +20, trust: +22, resilience: +12 },
        feedback: "O mercado reprecificou os múltiplos da sua empresa como líder da nova economia agêntica!"
      },
      {
        id: "btn-choice-1",
        title: "Distribuir Dividendos Máximos eManter Operação Conservadora",
        tag: "Colheita de Caixa",
        description: "Reduzir investimentos em P&D e devolver o excesso de caixa aos acionistas atuais.",
        impacts: { cash: +20, agility: -18, trust: +4, resilience: +4 },
        feedback: "Os acionistas de curto prazo comemoraram, mas a empresa entra em 2028 com fôlego reduzido de inovação."
      },
      {
        id: "btn-choice-2",
        title: "Pivotar 100% da Empresa para um Novo Mercado Inexplorado",
        tag: "All-In Radical",
        description: "Descontinuar as linhas atuais de receita para apostar tudo em uma nova fronteira tecnológica.",
        impacts: { cash: -22, agility: +24, trust: -10, resilience: -16 },
        feedback: "Uma aposta de altíssima octanagem que colocou a organização no limite da capacidade operacional."
      }
    ]
  }
];

let state = {
  currentIndex: 0,
  metrics: {
    cash: 60,
    agility: 60,
    trust: 60,
    resilience: 60
  },
  history: [],
  isGameOver: false,
  aiDemoTimer: null
};

function chooseOptimalDecisionIndex() {
  const scenario = SCENARIOS[state.currentIndex];
  if (!scenario) return 0;
  let bestIdx = 0;
  let bestScore = -Infinity;

  scenario.choices.forEach((choice, idx) => {
    let score = 0;
    Object.entries(state.metrics).forEach(([k, currentVal]) => {
      const delta = choice.impacts[k] || 0;
      const projected = clamp(currentVal + delta);
      if (projected <= 0) {
        score -= 1000; // Avoid fatal collapse at all costs
      } else if (projected <= 25) {
        score -= 80;
      }
      // Weight low metrics higher to keep balanced survival
      const urgencyWeight = currentVal < 45 ? 1.8 : 1.0;
      score += delta * urgencyWeight;
    });
    if (score > bestScore) {
      bestScore = score;
      bestIdx = idx;
    }
  });
  return bestIdx;
}

function toggleAiDemo() {
  const btn = document.getElementById("btn-ai-demo");
  if (state.aiDemoTimer) {
    clearInterval(state.aiDemoTimer);
    state.aiDemoTimer = null;
    if (btn) btn.textContent = "🤖 Modo Demo IA";
    return;
  }
  if (state.isGameOver) {
    restartGame();
  }
  if (btn) btn.textContent = "⏸️ Pausar Demo IA";
  const stepAi = () => {
    if (state.isGameOver) {
      clearInterval(state.aiDemoTimer);
      state.aiDemoTimer = null;
      if (btn) btn.textContent = "🤖 Modo Demo IA";
      return;
    }
    const bestIdx = chooseOptimalDecisionIndex();
    selectChoice(bestIdx);
  };
  stepAi();
  state.aiDemoTimer = setInterval(stepAi, 950);
}

function clamp(val) {
  return Math.max(0, Math.min(100, val));
}

function getBarColor(val) {
  if (val <= 25) return "var(--crimson)";
  if (val <= 45) return "var(--amber)";
  return "var(--emerald)";
}

function updateMetricsUI(deltas = null) {
  const keys = ["cash", "agility", "trust", "resilience"];
  keys.forEach((key) => {
    const val = state.metrics[key];
    document.getElementById(`val-${key}`).textContent = `${val}%`;
    const bar = document.getElementById(`bar-${key}`);
    bar.style.width = `${val}%`;
    bar.style.backgroundColor = getBarColor(val);

    const card = document.getElementById(`card-metric-${key}`);
    card.classList.remove("pulse-up", "pulse-down");
    if (deltas && deltas[key]) {
      card.classList.add(deltas[key] > 0 ? "pulse-up" : "pulse-down");
    }
  });
}

function formatImpactLabel(key, val) {
  const names = {
    cash: "Caixa",
    agility: "Agilidade",
    trust: "Mercado",
    resilience: "Resiliência"
  };
  const sign = val > 0 ? "+" : "";
  return `${names[key]} ${sign}${val}%`;
}

function renderScenario() {
  if (state.isGameOver) return;

  const scenario = SCENARIOS[state.currentIndex];
  document.getElementById("quarter-badge").textContent =
    `Trimestre ${state.currentIndex + 1} / ${SCENARIOS.length} • ${scenario.quarter}`;
  document.getElementById("scenario-category").textContent = scenario.category;
  document.getElementById("scenario-title").textContent = scenario.title;
  document.getElementById("scenario-description").textContent = scenario.description;

  const container = document.getElementById("choices-container");
  container.innerHTML = "";

  scenario.choices.forEach((choice, idx) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.id = choice.id || `btn-choice-${idx}`;
    btn.onclick = () => selectChoice(idx);

    const impactsHtml = Object.entries(choice.impacts)
      .filter(([, v]) => v !== 0)
      .map(([k, v]) => {
        const cls = v > 0 ? "impact-pos" : "impact-neg";
        return `<span class="impact-pill ${cls}">${formatImpactLabel(k, v)}</span>`;
      })
      .join("");

    btn.innerHTML = `
      <div class="choice-header">
        <span class="choice-title">${choice.title}</span>
        <span class="choice-tag">${choice.tag}</span>
      </div>
      <div class="choice-desc">${choice.description}</div>
      <div class="choice-impacts-preview">${impactsHtml}</div>
    `;
    container.appendChild(btn);
  });
}

function appendDecisionLog(quarter, title, choiceTitle, feedback) {
  const log = document.getElementById("decision-log");
  const item = document.createElement("div");
  item.className = "log-item";
  item.innerHTML = `
    <div class="log-item-header"><span>DECISÃO TOMADA</span><span>${quarter}</span></div>
    <div class="log-item-title">${choiceTitle}</div>
    <div class="log-item-outcome">${feedback}</div>
  `;
  log.prepend(item);
}

function selectChoice(choiceIndex) {
  if (state.isGameOver) return;

  const scenario = SCENARIOS[state.currentIndex];
  const choice = scenario.choices[choiceIndex];

  // Apply metric changes
  Object.keys(state.metrics).forEach((k) => {
    const delta = choice.impacts[k] || 0;
    state.metrics[k] = clamp(state.metrics[k] + delta);
  });

  state.history.push({
    quarter: scenario.quarter,
    scenario: scenario.title,
    decision: choice.title,
    feedback: choice.feedback,
    metricsAfter: { ...state.metrics }
  });

  updateMetricsUI(choice.impacts);
  appendDecisionLog(scenario.quarter, scenario.title, choice.title, choice.feedback);

  const banner = document.getElementById("feedback-banner");
  banner.style.display = "block";
  banner.innerHTML = `<strong>Impacto Imediato (${scenario.quarter}):</strong> ${choice.feedback}`;

  // Check if any metric hit 0
  const failedMetric = Object.entries(state.metrics).find(([, val]) => val <= 0);
  if (failedMetric) {
    state.isGameOver = true;
    renderEndScreen(false, failedMetric[0]);
    return;
  }

  // Advance or finish
  state.currentIndex++;
  if (state.currentIndex >= SCENARIOS.length) {
    state.isGameOver = true;
    renderEndScreen(true, null);
  } else {
    renderScenario();
  }
}

function getExecutiveProfile() {
  const m = state.metrics;
  const avg = Math.round((m.cash + m.agility + m.trust + m.resilience) / 4);
  if (avg >= 75) {
    return {
      archetype: "Arquiteto Exponencial & Antifrágil",
      summary: "Você não apenas sobreviveu às incertezas de 2026–2027, como usou cada crise para acelerar a maturidade agêntica e fortalecer a governança da organização."
    };
  }
  if (m.agility >= m.cash && m.agility >= 65) {
    return {
      archetype: "Catalisador de Transformação Agêntica",
      summary: "Sua liderança priorizou velocidade de adaptação e inovação tecnológica, mantendo a empresa à frente da disrupção competitiva."
    };
  }
  if (m.resilience >= 65 || m.cash >= 65) {
    return {
      archetype: "Guardião de Solidez & Governança",
      summary: "Você navegou a tempestade com forte disciplina financeira e controle de risco operacional, entregando uma empresa saudável ao Conselho."
    };
  }
  return {
    archetype: "Gestor de Sobrevivência Tática",
    summary: "Você conseguiu atravessar todos os 8 trimestres equilibrando pratos sob extrema pressão, mas a organização precisará recompor margens no próximo ciclo."
  };
}

function renderEndScreen(victory, failedKey) {
  const failureReasons = {
    cash: "Colapso de Liquidez (Caixa chegou a 0%). A empresa ficou sem capital de giro para honrar compromissos.",
    agility: "Paralisia Tecnológica (Agilidade chegou a 0%). A empresa perdeu relevância frente aos concorrentes nativos em IA.",
    trust: "Crise de Confiança no Conselho (Mercado chegou a 0%). Clientes e investidores retiraram o apoio à gestão.",
    resilience: "Colapso Operacional e Regulatório (Resiliência chegou a 0%). Falhas críticas de segurança e compliance interromperam a operação."
  };

  const m = state.metrics;
  const totalScore = Math.round((m.cash + m.agility + m.trust + m.resilience) * 2.5);
  const profile = getExecutiveProfile();

  document.getElementById("scenario-category").textContent = victory
    ? "MANDATO CONCLUÍDO COM SUCESSO"
    : "INTERRUPÇÃO DE MANDATO PELO CONSELHO";

  document.getElementById("scenario-title").textContent = victory
    ? `🏆 Perfil: ${profile.archetype} (${totalScore} pts)`
    : `⚠️ Gestão Encerrada no ${SCENARIOS[state.currentIndex].quarter}`;

  document.getElementById("scenario-description").textContent = victory
    ? profile.summary
    : failureReasons[failedKey];

  const container = document.getElementById("choices-container");
  container.innerHTML = `
    <div style="background: var(--bg-elevated); padding: 1.25rem; border-radius: 10px; border: 1px solid var(--border-subtle); margin-bottom: 1rem;">
      <div style="font-weight: 700; margin-bottom: 0.5rem;">Balanço Final dos Indicadores:</div>
      <div style="font-family: var(--font-mono); font-size: 0.9rem; color: var(--text-secondary);">
        💰 Caixa: ${m.cash}% &nbsp;|&nbsp; ⚡ Agilidade: ${m.agility}% &nbsp;|&nbsp; 📈 Mercado: ${m.trust}% &nbsp;|&nbsp; 🛡️ Resiliência: ${m.resilience}%
      </div>
    </div>
    <button id="btn-play-again" class="btn btn-primary" style="padding: 0.9rem; font-size: 0.95rem;" onclick="restartGame()">
      Jogar Novamente / Testar Nova Estratégia
    </button>
  `;
}

function restartGame() {
  if (state.aiDemoTimer) {
    clearInterval(state.aiDemoTimer);
    state.aiDemoTimer = null;
  }
  const demoBtn = document.getElementById("btn-ai-demo");
  if (demoBtn) demoBtn.textContent = "🤖 Modo Demo IA";
  state = {
    currentIndex: 0,
    metrics: { cash: 60, agility: 60, trust: 60, resilience: 60 },
    history: [],
    isGameOver: false,
    aiDemoTimer: null
  };
  document.getElementById("feedback-banner").style.display = "none";
  document.getElementById("decision-log").innerHTML = `
    <div class="log-item">
      <div class="log-item-header"><span>INÍCIO DO MANDATO</span><span>Q1 2026</span></div>
      <div class="log-item-title">Posse no Comando Executivo</div>
      <div class="log-item-outcome">O Conselho aguarda sua resposta aos choques estratégicos dos próximos 8 trimestres.</div>
    </div>
  `;
  updateMetricsUI();
  renderScenario();
}

// Initialize on load
window.addEventListener("DOMContentLoaded", () => {
  updateMetricsUI();
  renderScenario();
});
