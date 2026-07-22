import { GITHUB_URL } from "../config.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>Secure OS Guard — Final-year student project.</span>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </div>
    </footer>
  );
}
