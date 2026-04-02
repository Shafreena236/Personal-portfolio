export default function Hero() {
  return (
    <section className="hero-section">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">COMPUTER SCIENCE STUDENT</p>
          <h1 className="hero-title">
            Hi, I&apos;m <span className="hero-title__highlight">Shafreena Ahmed</span>
          </h1>
          <p className="hero-description">
            Passionate about technology, innovation, and solving real-world problems through hands-on learning and experimentation.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="button-primary"
            >
              View My Projects
            </button>
            <a href="/resume.pdf" download="SHAFREENA_AHMED_Resume.pdf" className="button-secondary">
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-portrait-wrap">
            <div className="hero-portrait">
              <img src="/images/profile.jpg.jpeg" alt="Shafreena Ahmed" className="hero-portrait__image" />
            </div>
            <div className="hero-badge">Chennai, India</div>
          </div>
        </div>
      </div>
    </section>
  );
}
