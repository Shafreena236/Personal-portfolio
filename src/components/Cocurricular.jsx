const activities = [
  { title: 'Paper Presentation', detail: 'Prediction of Health Insurance Scam using AI', place: 'SIMATS, India' },
  { title: 'Minor Degree', detail: 'Business Data Analytics', place: 'SRM VEC, India' },
  { title: 'Hackathon Participant', detail: 'SIH', place: "St. Joseph's College, Jeppiar Institute of Technology, India" },
  { title: 'Director of Media and Photography', detail: 'Rotaract Club', place: 'SRM VEC' },
];

export default function Cocurricular() {
  return (
    <section id="activities" className="section section--alt">
      <div className="shell section__inner">
        <h2 className="section-heading">Co-curricular & Extra Activities</h2>

        <div className="cards-grid">
          {activities.map((activity) => (
            <div key={activity.title} className="card card--alt">
              <h3 className="card-title">{activity.title}</h3>
              <p className="body-text">{activity.detail}</p>
              <p className="item-meta">{activity.place}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
