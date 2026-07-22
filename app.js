/* ============================================
   SecureOSGuard — App Logic
   Download Counter + Particle Canvas
   ============================================ */

// ==============================
// PARTICLE BACKGROUND
// ==============================
(function () {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function rand(min, max) { return Math.random() * (max - min) + min; }

  function createParticles() {
    particles = [];
    const count = Math.floor(W * H / 18000);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: rand(0, W), y: rand(0, H),
        vx: rand(-0.15, 0.15), vy: rand(-0.25, -0.05),
        radius: rand(0.8, 2.2),
        alpha: rand(0.1, 0.45),
        color: Math.random() > 0.5 ? '124,111,247' : '0,210,255'
      });
    }
  }
  createParticles();

  function drawBg() {
    ctx.clearRect(0, 0, W, H);

    // Radial glow
    const g1 = ctx.createRadialGradient(W * 0.5, -H * 0.1, 0, W * 0.5, -H * 0.1, H * 0.9);
    g1.addColorStop(0, 'rgba(124,111,247,0.18)');
    g1.addColorStop(1, 'transparent');
    ctx.fillStyle = g1;
    ctx.fillRect(0, 0, W, H);

    const g2 = ctx.createRadialGradient(W * 0.85, H * 0.85, 0, W * 0.85, H * 0.85, H * 0.6);
    g2.addColorStop(0, 'rgba(0,210,255,0.1)');
    g2.addColorStop(1, 'transparent');
    ctx.fillStyle = g2;
    ctx.fillRect(0, 0, W, H);

    // Grid
    ctx.strokeStyle = 'rgba(124,111,247,0.04)';
    ctx.lineWidth = 1;
    const gs = 48;
    for (let x = 0; x < W; x += gs) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y < H; y += gs) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }
  }

  function animate() {
    drawBg();
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.y < -10) { p.y = H + 10; p.x = rand(0, W); }
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }
  animate();
})();

// ==============================
// NAVBAR SCROLL EFFECT
// ==============================
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) {
    if (window.scrollY > 30) {
      nav.style.background = 'rgba(5,5,8,0.92)';
    } else {
      nav.style.background = 'rgba(5,5,8,0.6)';
    }
  }
});

// ==============================
// DOWNLOAD COUNTER
// ==============================
const NAMESPACE = 'secureosgaurd-lx2026';
const KEY = 'downloads';
const API_BASE = `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}`;

async function fetchCount() {
  try {
    const res = await fetch(`${API_BASE}`);
    if (!res.ok) throw new Error();
    const data = await res.json();
    return data.count || data.value || 0;
  } catch {
    // fallback: localStorage
    return parseInt(localStorage.getItem('sog_dl_count') || '0');
  }
}

async function incrementCount() {
  try {
    const res = await fetch(`${API_BASE}/up`, { method: 'GET' });
    if (!res.ok) throw new Error();
    const data = await res.json();
    const count = data.count || data.value || 0;
    localStorage.setItem('sog_dl_count', count);
    return count;
  } catch {
    const local = parseInt(localStorage.getItem('sog_dl_count') || '0') + 1;
    localStorage.setItem('sog_dl_count', local);
    return local;
  }
}

function animateNumber(el, from, to, duration) {
  if (!el) return;
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(from + (to - from) * ease);
    el.textContent = current.toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

async function initCounter() {
  const dlEl = document.getElementById('dl-count');
  const statEl = document.getElementById('stat-dl');
  const count = await fetchCount();
  if (dlEl) animateNumber(dlEl, 0, count, 1200);
  if (statEl) animateNumber(statEl, 0, count, 1200);
}

async function countDownload() {
  const count = await incrementCount();
  const dlEl = document.getElementById('dl-count');
  const statEl = document.getElementById('stat-dl');
  const prev = parseInt(localStorage.getItem('sog_dl_count') || '0') - 1;
  if (dlEl) animateNumber(dlEl, prev, count, 600);
  if (statEl) animateNumber(statEl, prev, count, 600);
}

// Init on page load
initCounter();
