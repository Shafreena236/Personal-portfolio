const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 82 },
      { name: 'SQL', level: 84 },
      { name: 'HTML', level: 92 },
      { name: 'CSS', level: 88 },
    ],
  },
  {
    title: 'Frameworks / Libraries',
    skills: [
      { name: 'React.js', level: 86 },
      { name: 'Flask', level: 78 },
      { name: 'Keras', level: 74 },
    ],
  },
  {
    title: 'Tools / Platforms',
    skills: [
      { name: 'Git', level: 84 },
      { name: 'VSCode', level: 94 },
      { name: 'n8n', level: 72 },
      { name: 'PowerBI', level: 76 },
      { name: 'Excel', level: 80 },
      { name: 'Canva', level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="shell section__inner">
        <h2 className="section-heading">Skills</h2>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="card">
              <h3 className="card-title">{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-row">
                    <div className="skill-row__meta">
                      <span>{skill.name}</span>
                      <span className="skill-row__level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-bar__fill" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
