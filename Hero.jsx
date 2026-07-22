import { DOWNLOAD_URL, GITHUB_URL } from "../config.js";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="eyebrow">STATUS: MONITORING ACTIVE</div>
          <h1 className="hero-title">
            Secure your Windows laptop with an extra layer of protection
          </h1>
          <p className="hero-sub">
            Secure OS Guard is a Windows security application designed to add an
            additional layer of authentication and unauthorized-access monitoring
            to your device.
          </p>
          <div className="hero-actions">
            <a href={DOWNLOAD_URL} className="btn btn-primary">
              Download for Windows
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              View on GitHub
            </a>
          </div>
          <p className="hero-note mono-tag">
            v1.0.0 · Windows 10/11 (64-bit) · Open Source Student Project
          </p>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <RadarMonitor />
        </div>
      </div>
    </section>
  );
}

// Signature visual: a radar-style monitor sweeping for unauthorized access,
// with a login card sitting at the center — ties the abstract "monitoring"
// idea directly to what the app actually watches over.
function RadarMonitor() {
  return (
    <div className="radar">
      <svg viewBox="0 0 360 360" className="radar-svg">
        <circle cx="180" cy="180" r="150" className="radar-ring ring-1" />
        <circle cx="180" cy="180" r="110" className="radar-ring ring-2" />
        <circle cx="180" cy="180" r="70" className="radar-ring ring-3" />

        <g className="radar-sweep">
          <defs>
            <linearGradient id="sweepGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--signal)" stopOpacity="0" />
              <stop offset="100%" stopColor="var(--signal)" stopOpacity="0.35" />
            </linearGradient>
          </defs>
          <path d="M180 180 L180 30 A150 150 0 0 1 315 105 Z" fill="url(#sweepGrad)" />
        </g>

        <circle cx="180" cy="180" r="150" className="radar-ring-static" />

        <g className="radar-blip blip-1">
          <circle cx="270" cy="130" r="4" fill="var(--signal)" />
        </g>
        <g className="radar-blip blip-2">
          <circle cx="105" cy="250" r="3.5" fill="var(--accent)" />
        </g>
        <g className="radar-blip blip-3">
          <circle cx="255" cy="255" r="3" fill="var(--danger)" />
        </g>
      </svg>

      <div className="radar-center-card">
        <div className="radar-center-row">
          <LockIcon />
          <span>Login verified</span>
        </div>
        <div className="radar-center-sub">0 unauthorized attempts today</div>
      </div>
    </div>
  );
}

function LockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="11" width="14" height="9" rx="2" stroke="var(--signal)" strokeWidth="1.8" />
      <path
        d="M8 11V8a4 4 0 0 1 8 0v3"
        stroke="var(--signal)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
