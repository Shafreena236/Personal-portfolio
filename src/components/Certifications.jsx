const certifications = [
  { title: 'Programming, Data Structures and Algorithms using Python', issuer: 'NPTEL' },
  { title: 'AI Principles and Practices', issuer: 'Udemy' },
  { title: 'Introduction to Data Science', issuer: 'Udemy' },
  { title: 'Data Science & Analytics', issuer: 'HP Life' },
  { title: 'Mastering Neural Networks with Keras', issuer: 'Udemy' },
  { title: 'Python Workshop', issuer: 'Prince InfoTech' },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="shell section__inner">
        <h2 className="section-heading">Certificates</h2>

        <div className="cards-grid cards-grid--three">
          {certifications.map((certification) => (
            <div key={certification.title} className="card">
              <h3 className="item-title item-title--small">{certification.title}</h3>
              <p className="item-meta">{certification.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
