/**
 * TRILHA 03: BOARDROOM WAR ROOM — Simulador de Conselho & Cenários
 * Dica para os participantes no Google Antigravity:
 * Na Missão 1, peça ao Agente para adicionar cenários do seu setor
 * e uma visão comparativa Otimista / Base / Estresse Severo!
 */

const PRESETS = [
  {
    title: "Migração de Operações Críticas para Agentes Autônomos",
    capex: 25,
    autonomy: 70,
    governance: 65,
    timeline: 9
  },
  {
    title: "Malha Logística Preditiva para Choques Climáticos e Cambiais",
    capex: 40,
    autonomy: 80,
    governance: 75,
    timeline: 12
  },
  {
    title: "Aquisição Internacional Acelerada por Due Diligence Agêntica",
    capex: 75,
    autonomy: 85,
    governance: 40,
    timeline: 6
  }
];

function loadPreset(idx) {
  const p = PRESETS[idx];
  document.getElementById("input-initiative").value = p.title;
  document.getElementById("slider-capex").value = p.capex;
  document.getElementById("slider-autonomy").value = p.autonomy;
  document.getElementById("slider-governance").value = p.governance;
  document.getElementById("slider-timeline").value = p.timeline;
  runSimulation();
}

function optimizeWithAI() {
  // Calibrates the current initiative for Unanimous Board Approval (3-0) with high ROI & Resilience
  document.getElementById("slider-capex").value = 35;
  document.getElementById("slider-autonomy").value = 85;
  document.getElementById("slider-governance").value = 80;
  document.getElementById("slider-timeline").value = 8;
  runSimulation();
}

function setVoteBadge(elId, status) {
  const el = document.getElementById(elId);
  if (status === "APPROVE") {
    el.textContent = "APROVADO";
    el.className = "advisor-vote status-approved";
  } else if (status === "CAUTION") {
    el.textContent = "RESSALVAS";
    el.className = "advisor-vote status-caution";
  } else {
    el.textContent = "VETADO";
    el.className = "advisor-vote status-vetoed";
  }
}

function drawMatrix(riskScore, returnScore) {
  const canvas = document.getElementById("boardroom-canvas");
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;

  ctx.fillStyle = "#070b13";
  ctx.fillRect(0, 0, w, h);

  // Quadrant lines
  ctx.strokeStyle = "rgba(148, 163, 184, 0.16)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(w / 2, 15);
  ctx.lineTo(w / 2, h - 20);
  ctx.moveTo(20, h / 2);
  ctx.lineTo(w - 15, h / 2);
  ctx.stroke();

  // Labels
  ctx.fillStyle = "rgba(148, 163, 184, 0.65)";
  ctx.font = "600 10px monospace";
  ctx.fillText("ALTO RETORNO", 24, 24);
  ctx.fillText("BAIXO RISCO", 24, h - 8);
  ctx.fillText("ALTO RISCO", w - 82, h - 8);

  // Plot point
  const px = 30 + (Math.min(100, Math.max(0, riskScore)) / 100) * (w - 60);
  const py = h - 30 - (Math.min(100, Math.max(0, returnScore)) / 100) * (h - 60);

  // Target halo
  ctx.strokeStyle = "rgba(245, 158, 11, 0.4)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(px, py, 14, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = "#f59e0b";
  ctx.beginPath();
  ctx.arc(px, py, 6, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#f8fafc";
  ctx.font = "700 10px sans-serif";
  ctx.fillText("PROPOSTA", Math.min(w - 70, px + 10), Math.max(20, py - 8));
}

function runSimulation() {
  const initiative = document.getElementById("input-initiative").value;
  const capex = Number(document.getElementById("slider-capex").value);
  const autonomy = Number(document.getElementById("slider-autonomy").value);
  const governance = Number(document.getElementById("slider-governance").value);
  const timeline = Number(document.getElementById("slider-timeline").value);

  document.getElementById("lbl-capex").textContent = `R$ ${capex}M`;
  document.getElementById("lbl-autonomy").textContent = `${autonomy}%`;
  document.getElementById("lbl-governance").textContent = `${governance}%`;
  document.getElementById("lbl-timeline").textContent = `${timeline} meses`;

  // Calculate metrics
  const governanceGap = Math.max(0, autonomy - governance);
  const roi = Math.round(autonomy * 2.6 + governance * 0.6 - capex * 0.85 + (18 - timeline) * 2.2);
  const survivalIndex = Math.max(
    10,
    Math.min(99, Math.round(55 + governance * 0.55 - governanceGap * 0.75 - (capex > 65 ? 12 : 0)))
  );
  const payback = Math.max(3.5, Math.min(24, Number((capex * 0.18 + timeline * 0.45 - autonomy * 0.04).toFixed(1))));

  const roiEl = document.getElementById("kpi-roi");
  roiEl.textContent = `${roi >= 0 ? "+" : ""}${roi}%`;
  roiEl.style.color = roi >= 100 ? "var(--emerald)" : roi >= 40 ? "var(--amber)" : "var(--crimson)";

  const survEl = document.getElementById("kpi-survival");
  survEl.textContent = `${survivalIndex} / 100`;
  survEl.style.color = survivalIndex >= 70 ? "var(--cyan)" : survivalIndex >= 50 ? "var(--amber)" : "var(--crimson)";

  document.getElementById("kpi-payback").textContent = `${payback} meses`;

  // CFO evaluation
  let cfoVote = "APPROVE";
  let cfoText = `O CAPEX de R$ ${capex}M com payback de ${payback} meses gera excelente retorno ajustado ao capital.`;
  if (capex > 70 && roi < 110) {
    cfoVote = "VETO";
    cfoText = `Comprometimento de caixa excessivo (R$ ${capex}M) para um retorno de apenas ${roi}%. Recomendo fasear em 2 ondas.`;
  } else if (capex > 50 || payback > 14) {
    cfoVote = "CAUTION";
    cfoText = `Aprovo com gatilhos de liberação trimestral: o payback de ${payback} meses exige rigor no fluxo de caixa.`;
  }

  // CTO evaluation
  let ctoVote = "APPROVE";
  let ctoText = `Com ${autonomy}% de orquestração agêntica em ${timeline} meses, ganhamos velocidade real de adaptação.`;
  if (autonomy < 35) {
    ctoVote = "CAUTION";
    ctoText = `Nível de autonomia muito tímido (${autonomy}%). Ficaremos presos no ganho incremental de copilotos sem transformar o processo.`;
  } else if (timeline < 5 && autonomy > 80) {
    ctoVote = "CAUTION";
    ctoText = `Rollout de ${autonomy}% de autonomia em apenas ${timeline} meses exigirá esquadrões dedicados e integração MCP acelerada.`;
  }

  // CRO evaluation
  let croVote = "APPROVE";
  let croText = `Cobertura de governança (${governance}%) é compatível com o nível de autonomia (${autonomy}%), garantindo auditoria via Artifacts.`;
  if (governanceGap > 25) {
    croVote = "VETO";
    croText = `Risco Inaceitável: ${autonomy}% de autonomia com apenas ${governance}% de governança deixará a operação exposta a falhas sem sandbox.`;
  } else if (governanceGap > 10) {
    croVote = "CAUTION";
    croText = `Exijo elevar os guardrails de Safety Policies antes do go-live para cobrir o gap de ${governanceGap} pontos.`;
  }

  setVoteBadge("vote-cfo", cfoVote);
  setVoteBadge("vote-cto", ctoVote);
  setVoteBadge("vote-cro", croVote);
  document.getElementById("text-cfo").textContent = cfoText;
  document.getElementById("text-cto").textContent = ctoText;
  document.getElementById("text-cro").textContent = croText;

  // Overall Board Verdict
  const votes = [cfoVote, ctoVote, croVote];
  const vetoes = votes.filter((v) => v === "VETO").length;
  const cautions = votes.filter((v) => v === "CAUTION").length;

  const badge = document.getElementById("verdict-badge");
  const vTitle = document.getElementById("verdict-title");
  const vSummary = document.getElementById("verdict-summary");

  if (vetoes > 0) {
    badge.textContent = `PROPOSTA BLOQUEADA NO BOARD (${vetoes} VETO)`;
    badge.className = "verdict-status status-vetoed";
    vTitle.textContent = `Revisão Obrigatória para "${initiative}"`;
    vSummary.textContent =
      "O Conselho bloqueou a execução imediata devido ao desequilíbrio entre exposição ao risco, capital alocado e maturidade de governança.";
  } else if (cautions > 0) {
    badge.textContent = `APROVADO COM CONDICIONANTES (${3 - cautions} Favoráveis, ${cautions} Ressalvas)`;
    badge.className = "verdict-status status-caution";
    vTitle.textContent = `Sinal Verde Parcial para "${initiative}"`;
    vSummary.textContent =
      "A tese estratégica é sólida, mas o Conselho determinou acompanhamento mensal dos indicadores de governança e payback.";
  } else {
    badge.textContent = "APROVAÇÃO UNÂNIME DO CONSELHO (3 A 0)";
    badge.className = "verdict-status status-approved";
    vTitle.textContent = `Execução Imediata Autorizada: "${initiative}"`;
    vSummary.textContent =
      "Equilíbrio exemplar entre ambição agêntica, retorno financeiro e blindagem de governança corporativa.";
  }

  const riskCoord = Math.min(95, Math.max(10, 100 - survivalIndex));
  const returnCoord = Math.min(95, Math.max(10, Math.round(roi / 2.6)));
  drawMatrix(riskCoord, returnCoord);
}

window.addEventListener("DOMContentLoaded", () => {
  runSimulation();
});
