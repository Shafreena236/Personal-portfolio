export default function Education() {
  return (
    <section id="education" className="section section--alt">
      <div className="shell section__inner">
        <h2 className="section-heading">Education</h2>

        <div className="stack-grid">
          <div className="card card--alt">
            <div className="timeline-card">
              <div>
                <h3 className="item-title">Bachelor of Engineering - Computer Science and Engineering</h3>
                <p className="item-accent">SRM Valliammai Engineering College</p>
                <p className="item-meta">Kattankulathur, India</p>
              </div>
              <p className="item-date">09/2023 - Present</p>
            </div>
          </div>

          <div className="card card--alt">
            <div className="timeline-card">
              <div>
                <h3 className="item-title">High School</h3>
                <p className="item-accent">Zion Matriculation Higher Secondary School</p>
                <p className="item-meta">Chennai, India</p>
              </div>
              <p className="item-date">06/2022 - 04/2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
