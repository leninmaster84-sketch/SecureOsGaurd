import { useState } from "react";

const DOCS = [
  {
    q: "What is Secure OS Guard?",
    a: "Secure OS Guard is a Windows desktop application that adds an extra layer of authentication and unauthorized-access monitoring on top of your existing Windows login.",
  },
  {
    q: "Who is it for?",
    a: "Anyone who wants an additional check on who is trying to access their Windows laptop, alongside their normal Windows account login.",
  },
  {
    q: "How does the application work?",
    a: "After installation, you create an account and set a password inside the app. It then checks authentication attempts, tracks incorrect password attempts, and raises an alert when it detects suspicious activity.",
  },
  {
    q: "How do I install it?",
    a: "Download SecureOSGuard_Installer.exe from the Download section above and run it, then follow the on-screen installation steps.",
  },
  {
    q: "How do I use the application?",
    a: "Open the application, log in with the account you created, and keep it running in the background — it can also be configured to start automatically with Windows.",
  },
  {
    q: "How do I report an issue?",
    a: "Open an issue on the project's GitHub repository with a description of what happened, since this is a student project maintained on GitHub.",
  },
];

export default function Documentation() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="documentation" className="section">
      <div className="container">
        <div className="eyebrow">DOCUMENTATION</div>
        <h2 className="section-heading">Basic documentation</h2>
        <p className="section-sub">
          Answers to common questions about the project. Detailed technical docs live
          in the GitHub repository.
        </p>

        <div className="docs-list">
          {DOCS.map((d, i) => {
            const isOpen = openIndex === i;
            return (
              <div className={`docs-item ${isOpen ? "docs-item-open" : ""}`} key={d.q}>
                <button
                  className="docs-question"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{d.q}</span>
                  <span className="docs-caret" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && <p className="docs-answer">{d.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
