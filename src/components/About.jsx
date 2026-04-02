export default function About() {
  return (
    <section id="about" className="section">
      <div className="shell section__inner">
        <h2 className="section-heading">About Me</h2>

        <div className="two-column">
          <div className="about-copy">
            <p>
              Passionate Computer Science student with a strong interest in technology, innovation, and solving real-world problems.
            </p>
            <p>
              I enjoy exploring new tools, analyzing challenges from different perspectives, and turning ideas into practical solutions through hands-on learning and experimentation.
            </p>
            <p className="summary-traits">
              Curiosity - Adaptability - Collaborative Thinking - Leadership
            </p>
          </div>

          <div className="card">
            <h3 className="card-title">Professional Summary</h3>
            <ul className="bullet-list">
              <li className="bullet-list__item">
                <span className="bullet-list__dot"></span>
                <span>Strong interest in technology, innovation, and real-world problem solving.</span>
              </li>
              <li className="bullet-list__item">
                <span className="bullet-list__dot"></span>
                <span>Enjoys exploring new tools and analyzing challenges from different perspectives.</span>
              </li>
              <li className="bullet-list__item">
                <span className="bullet-list__dot"></span>
                <span>Brings curiosity, adaptability, collaborative thinking, and leadership to projects and team initiatives.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
