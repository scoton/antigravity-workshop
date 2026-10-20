/**
 * TRILHA 02: ANTIGRAVITY ORBITAL DEFENSE
 * Dica para os participantes no Google Antigravity:
 * Na Missão 1, peça ao Agente para adicionar "Drones Autônomos Orbitais"
 * e um "Boss Setorial" a cada 3 ondas!
 */

const canvas = document.getElementById("orbital-canvas");
const ctx = canvas.getContext("2d");

let game = {
  running: true,
  autopilot: true,
  score: 0,
  wave: 1,
  hull: 100,
  energy: 100,
  turretAngle: 0,
  lastFireTime: 0,
  lastSpawnTime: 0,
  empRadius: 0,
  threats: [],
  projectiles: [],
  particles: []
};

const CENTER_X = canvas.width / 2;
const CENTER_Y = canvas.height / 2;

function logEvent(msg) {
  const log = document.getElementById("combat-log");
  const entry = document.createElement("div");
  const time = new Date().toLocaleTimeString("pt-BR", { hour12: false });
  entry.textContent = `[${time}] ${msg}`;
  log.prepend(entry);
  while (log.children.length > 15) {
    log.removeChild(log.lastChild);
  }
}

function updateHud() {
  document.getElementById("stat-score").textContent = game.score;
  document.getElementById("stat-wave").textContent = game.wave;
  document.getElementById("stat-hull").textContent = `${Math.max(0, Math.round(game.hull))}%`;
  document.getElementById("stat-energy").textContent = `${Math.round(game.energy)}%`;
}

function spawnThreat() {
  const edge = Math.floor(Math.random() * 4);
  let x, y;
  if (edge === 0) { x = Math.random() * canvas.width; y = -20; }
  else if (edge === 1) { x = canvas.width + 20; y = Math.random() * canvas.height; }
  else if (edge === 2) { x = Math.random() * canvas.width; y = canvas.height + 20; }
  else { x = -20; y = Math.random() * canvas.height; }

  const angle = Math.atan2(CENTER_Y - y, CENTER_X - x);
  const speed = 0.85 + Math.random() * 0.75 + game.wave * 0.12;
  const radius = 10 + Math.random() * 8;

  const labels = ["VOLATILIDADE", "RUPTURA", "LATÊNCIA", "ATAQUE", "INCERTEZA"];
  game.threats.push({
    x,
    y,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    radius,
    hp: radius > 14 ? 2 : 1,
    label: labels[Math.floor(Math.random() * labels.length)]
  });
}

function spawnThreatWave(count = 5) {
  for (let i = 0; i < count; i++) {
    spawnThreat();
  }
  logEvent(`Onda de choque detectada: +${count} ameaças no radar.`);
}

function fireProjectile(targetX, targetY) {
  const angle = Math.atan2(targetY - CENTER_Y, targetX - CENTER_X);
  game.turretAngle = angle;
  const speed = 7.5;
  game.projectiles.push({
    x: CENTER_X + Math.cos(angle) * 28,
    y: CENTER_Y + Math.sin(angle) * 28,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    life: 110
  });
}

function createExplosion(x, y, color = "#f59e0b", count = 12) {
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 1 + Math.random() * 3.5;
    game.particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 1,
      color
    });
  }
}

function triggerEmpBlast() {
  if (game.energy < 40) {
    logEvent("Energia insuficiente para Pulso EMP (mínimo 40%).");
    return;
  }
  game.energy -= 40;
  game.empRadius = 10;
  const destroyed = game.threats.length;
  game.threats.forEach((t) => createExplosion(t.x, t.y, "#0ea5e9", 14));
  game.threats = [];
  game.score += destroyed * 25;
  logEvent(`Pulso EMP disparado! ${destroyed} ameaças neutralizadas.`);
  updateHud();
}

function repairShield() {
  if (game.energy < 30) {
    logEvent("Energia insuficiente para reparo de escudo (mínimo 30%).");
    return;
  }
  game.energy -= 30;
  game.hull = Math.min(100, game.hull + 25);
  logEvent("Escudo orbital recarregado (+25% Integridade).");
  updateHud();
}

function toggleGameRunning() {
  game.running = !game.running;
  const btn = document.getElementById("btn-start-game");
  btn.textContent = game.running ? "Pausar Operação" : "Retomar Operação";
  logEvent(game.running ? "Simulação retomada." : "Simulação em pausa tática.");
}

function toggleAutopilot() {
  game.autopilot = !game.autopilot;
  const btn = document.getElementById("btn-toggle-autopilot");
  btn.textContent = game.autopilot ? "🤖 Piloto IA: ATIVO" : "🤖 Piloto IA: MANUAL";
  btn.className = game.autopilot ? "btn btn-active-ai" : "btn";
  logEvent(game.autopilot ? "Piloto Automático Agêntico ativado." : "Controle manual assumido.");
}

function resetGame() {
  game.score = 0;
  game.wave = 1;
  game.hull = 100;
  game.energy = 100;
  game.threats = [];
  game.projectiles = [];
  game.particles = [];
  game.running = true;
  logEvent("Arena orbital reiniciada.");
  updateHud();
}

canvas.addEventListener("mousedown", (e) => {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const tx = (e.clientX - rect.left) * scaleX;
  const ty = (e.clientY - rect.top) * scaleY;
  fireProjectile(tx, ty);
});

function update(timestamp) {
  if (!game.running) return;

  // Regenerate reactor energy gradually
  game.energy = Math.min(100, game.energy + 0.08);

  // Wave progression based on score
  const expectedWave = 1 + Math.floor(game.score / 250);
  if (expectedWave > game.wave) {
    game.wave = expectedWave;
    logEvent(`Avanço para Onda ${game.wave}! Velocidade das ameaças aumentou.`);
  }

  // Spawn threats periodically
  const spawnInterval = Math.max(450, 1400 - game.wave * 110);
  if (timestamp - game.lastSpawnTime > spawnInterval) {
    spawnThreat();
    game.lastSpawnTime = timestamp;
  }

  // AI Autopilot targeting closest threat
  if (game.autopilot && game.threats.length > 0 && timestamp - game.lastFireTime > 260) {
    let closest = null;
    let minDist = Infinity;
    for (const t of game.threats) {
      const d = Math.hypot(t.x - CENTER_X, t.y - CENTER_Y);
      if (d < minDist) {
        minDist = d;
        closest = t;
      }
    }
    if (closest) {
      // Lead target slightly
      fireProjectile(closest.x + closest.vx * 12, closest.y + closest.vy * 12);
      game.lastFireTime = timestamp;
    }
  }

  // Update EMP expanding ring
  if (game.empRadius > 0) {
    game.empRadius += 14;
    if (game.empRadius > canvas.width) {
      game.empRadius = 0;
    }
  }

  // Update projectiles
  for (let i = game.projectiles.length - 1; i >= 0; i--) {
    const p = game.projectiles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.life--;
    if (p.life <= 0 || p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
      game.projectiles.splice(i, 1);
    }
  }

  // Update threats & collisions
  for (let i = game.threats.length - 1; i >= 0; i--) {
    const t = game.threats[i];
    t.x += t.vx;
    t.y += t.vy;

    // Check collision with core shield
    const distToCore = Math.hypot(t.x - CENTER_X, t.y - CENTER_Y);
    if (distToCore < 36 + t.radius) {
      game.hull = Math.max(0, game.hull - 12);
      createExplosion(t.x, t.y, "#ef4444", 16);
      game.threats.splice(i, 1);
      logEvent("Alerta: Impacto direto no escudo orbital (-12% Integridade)!");
      if (game.hull <= 0) {
        logEvent("Escudo esgotado! Reiniciando protocolo de emergência...");
        game.hull = 100;
        game.score = Math.max(0, game.score - 100);
      }
      continue;
    }

    // Check collision with projectiles
    for (let j = game.projectiles.length - 1; j >= 0; j--) {
      const p = game.projectiles[j];
      if (Math.hypot(t.x - p.x, t.y - p.y) < t.radius + 5) {
        game.projectiles.splice(j, 1);
        t.hp--;
        if (t.hp <= 0) {
          createExplosion(t.x, t.y, "#f59e0b", 12);
          game.threats.splice(i, 1);
          game.score += 25;
        } else {
          createExplosion(p.x, p.y, "#0ea5e9", 5);
        }
        break;
      }
    }
  }

  // Update particles
  for (let i = game.particles.length - 1; i >= 0; i--) {
    const pt = game.particles[i];
    pt.x += pt.vx;
    pt.y += pt.vy;
    pt.alpha -= 0.03;
    if (pt.alpha <= 0) {
      game.particles.splice(i, 1);
    }
  }

  updateHud();
}

function draw() {
  ctx.fillStyle = "#060911";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Radar rings
  ctx.strokeStyle = "rgba(148, 163, 184, 0.08)";
  ctx.lineWidth = 1;
  [90, 175, 250].forEach((r) => {
    ctx.beginPath();
    ctx.arc(CENTER_X, CENTER_Y, r, 0, Math.PI * 2);
    ctx.stroke();
  });

  // EMP shockwave
  if (game.empRadius > 0) {
    ctx.strokeStyle = "rgba(14, 165, 233, 0.65)";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(CENTER_X, CENTER_Y, game.empRadius, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Orbital Core Shield
  ctx.strokeStyle = game.hull > 35 ? "rgba(16, 185, 129, 0.45)" : "rgba(239, 68, 68, 0.65)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(CENTER_X, CENTER_Y, 36, 0, Math.PI * 2);
  ctx.stroke();

  // Orbital Turret & Core
  ctx.save();
  ctx.translate(CENTER_X, CENTER_Y);
  ctx.rotate(game.turretAngle);
  ctx.fillStyle = "#f59e0b";
  ctx.fillRect(0, -4, 30, 8);
  ctx.restore();

  ctx.fillStyle = "#0ea5e9";
  ctx.beginPath();
  ctx.arc(CENTER_X, CENTER_Y, 16, 0, Math.PI * 2);
  ctx.fill();

  // Projectiles
  ctx.fillStyle = "#f59e0b";
  for (const p of game.projectiles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  // Threats
  for (const t of game.threats) {
    ctx.fillStyle = t.hp > 1 ? "#ef4444" : "#f97316";
    ctx.beginPath();
    ctx.arc(t.x, t.y, t.radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "rgba(248, 250, 252, 0.78)";
    ctx.font = "600 10px monospace";
    ctx.textAlign = "center";
    ctx.fillText(t.label, t.x, t.y - t.radius - 5);
  }

  // Particles
  for (const pt of game.particles) {
    ctx.save();
    ctx.globalAlpha = Math.max(0, pt.alpha);
    ctx.fillStyle = pt.color;
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, 2.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

function loop(timestamp) {
  update(timestamp);
  draw();
  requestAnimationFrame(loop);
}

spawnThreatWave(3);
requestAnimationFrame(loop);
