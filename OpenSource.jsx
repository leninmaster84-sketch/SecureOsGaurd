import { GITHUB_URL } from "../config.js";

export default function OpenSource() {
  return (
    <section className="section section-alt">
      <div className="container open-source-inner">
        <div>
          <div className="eyebrow">OPEN SOURCE</div>
          <h2 className="section-heading">Open Source Project</h2>
          <p className="section-sub" style={{ marginBottom: 0 }}>
            Secure OS Guard is developed as an open-source final-year project focused
            on desktop authentication, unauthorized access monitoring, and security
            alerts.
          </p>
        </div>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          View Source Code
        </a>
      </div>
    </section>
  );
}
