export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-inner">
        <div className="eyebrow">ABOUT</div>
        <h2 className="section-heading">About the project</h2>
        <p className="about-text">
          Secure OS Guard is a final-year project developed to explore desktop
          security, authentication systems, unauthorized access monitoring, and
          security alert mechanisms.
        </p>
        <p className="about-disclaimer mono-tag">
          Note: Secure OS Guard is a student project. It adds an extra layer of
          authentication and monitoring, but it does not claim to provide complete or
          guaranteed security.
        </p>
      </div>
    </section>
  );
}
