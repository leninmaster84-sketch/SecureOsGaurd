const FEATURES = [
  {
    tag: "01",
    title: "Password Protection",
    desc: "Protect access to your laptop using password-based authentication before the desktop loads.",
    icon: "lock",
  },
  {
    tag: "02",
    title: "Unauthorized Access Detection",
    desc: "Monitors suspicious or repeated incorrect authentication attempts on the device.",
    icon: "radar",
  },
  {
    tag: "03",
    title: "Security Alerts",
    desc: "Notifies you when suspicious login activity is detected, so you know what happened and when.",
    icon: "bell",
  },
  {
    tag: "04",
    title: "Startup Protection",
    desc: "Runs automatically when Windows starts, so protection is active from the moment you log in.",
    icon: "power",
  },
  {
    tag: "05",
    title: "Lightweight Application",
    desc: "Built as a lightweight desktop utility that runs quietly in the background without slowing you down.",
    icon: "feather",
  },
  {
    tag: "06",
    title: "Simple User Experience",
    desc: "Straightforward account setup and a simple authentication workflow — no configuration maze.",
    icon: "user",
  },
];

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <div className="eyebrow">FEATURES</div>
        <h2 className="section-heading">What Secure OS Guard watches over</h2>
        <p className="section-sub">
          A focused set of authentication and monitoring tools for a single Windows
          laptop.
        </p>

        <div className="feature-grid">
          {FEATURES.map((f) => (
            <div className="card feature-card" key={f.tag}>
              <div className="feature-icon">
                <FeatureIcon name={f.icon} />
              </div>
              <div className="mono-tag feature-tag">{f.tag}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureIcon({ name }) {
  const stroke = "var(--signal)";
  const common = { fill: "none", stroke, strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };

  switch (name) {
    case "lock":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" {...common}>
          <rect x="5" y="11" width="14" height="9" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </svg>
      );
    case "radar":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 12 L18 6" />
        </svg>
      );
    case "bell":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" {...common}>
          <path d="M6 10a6 6 0 0 1 12 0c0 4 1.5 5.5 1.5 5.5H4.5S6 14 6 10Z" />
          <path d="M10 18a2 2 0 0 0 4 0" />
        </svg>
      );
    case "power":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" {...common}>
          <path d="M12 4v7" />
          <path d="M7 6.5a8 8 0 1 0 10 0" />
        </svg>
      );
    case "feather":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" {...common}>
          <path d="M20 4C11 4 5 10 5 19h4c0-2 1-3 3-3l8-8V4Z" />
          <path d="M14 10 6 18" />
        </svg>
      );
    case "user":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="8" r="3.4" />
          <path d="M5 20c1.4-4 4-5.5 7-5.5s5.6 1.5 7 5.5" />
        </svg>
      );
    default:
      return null;
  }
}
