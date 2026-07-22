const STEPS = [
  {
    n: "STEP 01",
    title: "Install",
    desc: "Download and install Secure OS Guard on your Windows laptop.",
  },
  {
    n: "STEP 02",
    title: "Create Your Account",
    desc: "Create an account and configure your password inside the application.",
  },
  {
    n: "STEP 03",
    title: "Stay Protected",
    desc: "Use authentication on login and receive alerts for suspicious access attempts.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section section-alt">
      <div className="container">
        <div className="eyebrow">HOW IT WORKS</div>
        <h2 className="section-heading">Three steps to a protected laptop</h2>
        <p className="section-sub">No account juggling, no complex setup wizard.</p>

        <div className="steps">
          {STEPS.map((s, i) => (
            <div className="step-card" key={s.n}>
              <div className="step-num mono-tag">{s.n}</div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
              {i < STEPS.length - 1 && <div className="step-connector" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
