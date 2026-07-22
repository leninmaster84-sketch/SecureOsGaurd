import { useEffect, useState } from "react";
import { DOWNLOAD_URL } from "../config.js";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#download", label: "Download" },
  { href: "#documentation", label: "Documentation" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo">
          <ShieldMark />
          <span>
            Secure OS <strong>Guard</strong>
          </span>
        </a>

        <nav className="navbar-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/leninmaster84-sketch/SecureOsGaurd"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </nav>

        <a href={DOWNLOAD_URL} className="btn btn-primary navbar-cta">
          Download
        </a>

        <button
          className="navbar-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="navbar-mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/leninmaster84-sketch/SecureOsGaurd"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href={DOWNLOAD_URL} className="btn btn-primary btn-block">
            Download for Windows
          </a>
        </div>
      )}
    </header>
  );
}

function ShieldMark() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2 L20 5.5 V11.5 C20 16.5 16.6 20.4 12 22 C7.4 20.4 4 16.5 4 11.5 V5.5 L12 2Z"
        stroke="var(--signal)"
        strokeWidth="1.6"
        fill="rgba(53,224,166,0.08)"
      />
      <path
        d="M8.5 12.2 L10.7 14.4 L15.5 9.4"
        stroke="var(--signal)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
