import { useState } from 'react';
import { X } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Government and Legal Assistant AI',
    shortDesc: 'AI-powered chatbot for legal information retrieval.',
    overview: 'A legal-information assistant built to help users get quicker answers to government and legal queries through an AI-powered chat interface.',
    fullDesc: 'Engineered a chatbot using Python and NLP techniques to deliver accurate responses to legal queries through API integration.',
    tech: ['Python', 'NLP', 'API Integration'],
  },
  {
    id: 2,
    title: 'Kindergarten Activity Sheet Evaluator AI',
    shortDesc: 'AI tool for automated worksheet assessment.',
    overview: 'An evaluation system designed to review kindergarten worksheets faster by processing student responses and reducing manual checking effort.',
    fullDesc: 'Automated worksheet evaluation using Python and data/image processing techniques to analyze student responses efficiently.',
    tech: ['Python', 'Data Processing', 'Image Processing'],
  },
  {
    id: 3,
    title: 'Eco-Friendly Shopping Website',
    shortDesc: 'Sustainable e-commerce platform with CRUD operations.',
    overview: 'A shopping platform centered on sustainable purchasing, with structured product, user, and transaction management.',
    fullDesc: 'Architected a web application using Java, MySQL, HTML, and CSS to manage products, users, and transactions efficiently.',
    tech: ['Java', 'MySQL', 'HTML', 'CSS'],
  },
  {
    id: 4,
    title: 'Dream House Finder AI (Chennai)',
    shortDesc: 'AI-based property recommendation system.',
    overview: 'A Chennai-focused property recommendation tool that helps users discover relevant homes based on their preferences.',
    fullDesc: 'Developed a recommendation system using Python and basic machine learning to filter and suggest properties based on user preferences.',
    tech: ['Python', 'Machine Learning', 'Recommendation System'],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section">
      <div className="shell section__inner">
        <h2 className="section-heading">Projects</h2>
        <p className="section-copy">A curated selection of AI, software, and product-focused work.</p>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} onClick={() => setSelectedProject(project)} className="project-card">
              <div className="project-card__number">{String(project.id).padStart(2, '0')}</div>
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__subtitle">{project.shortDesc}</p>
                <p className="project-card__overview">{project.overview}</p>
                <div className="tag-row">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
            <div className="modal-panel__content">
              <button type="button" onClick={() => setSelectedProject(null)} className="modal-panel__close">
                <X size={28} />
              </button>

              <h2 className="modal-panel__title">{selectedProject.title}</h2>
              <div className="modal-panel__sections">
                <div>
                  <h3 className="subheading">Overview</h3>
                  <p className="body-text">{selectedProject.overview}</p>
                </div>
                <div>
                  <h3 className="subheading">Implementation</h3>
                  <p className="body-text">{selectedProject.fullDesc}</p>
                </div>
              </div>

              <div className="tag-row">
                {selectedProject.tech.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
