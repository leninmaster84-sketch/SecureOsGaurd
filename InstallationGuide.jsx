const GUIDE_STEPS = [
  "Click Download for Windows.",
  "Download SecureOSGuard_Installer.exe.",
  "Run the installer.",
  "Follow the installation steps.",
  "Create your user account.",
  "Set your password.",
  "Start using Secure OS Guard.",
];

export default function InstallationGuide() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="eyebrow">INSTALLATION GUIDE</div>
        <h2 className="section-heading">Get set up in a few minutes</h2>
        <p className="section-sub">Follow these steps in order.</p>

        <ol className="guide-list">
          {GUIDE_STEPS.map((step, i) => (
            <li key={i}>
              <span className="mono-tag guide-index">{String(i + 1).padStart(2, "0")}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
