import { DOWNLOAD_URL, APP_VERSION, APP_PLATFORM, APP_LICENSE } from "../config.js";

export default function DownloadSection() {
  return (
    <section id="download" className="section download-section">
      <div className="container">
        <div className="card download-card">
          <div className="download-info">
            <div className="eyebrow">DOWNLOAD</div>
            <h2 className="section-heading">Download Secure OS Guard</h2>

            <dl className="download-specs">
              <div>
                <dt className="mono-tag">Version</dt>
                <dd>{APP_VERSION}</dd>
              </div>
              <div>
                <dt className="mono-tag">Platform</dt>
                <dd>{APP_PLATFORM}</dd>
              </div>
              <div>
                <dt className="mono-tag">License</dt>
                <dd>{APP_LICENSE}</dd>
              </div>
            </dl>

            <a href={DOWNLOAD_URL} className="btn btn-primary download-btn">
              Download for Windows
            </a>
            <p className="download-filename mono-tag">SecureOSGuard_Installer.exe</p>
          </div>
        </div>
      </div>
    </section>
  );
}
