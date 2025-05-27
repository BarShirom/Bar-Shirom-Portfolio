import "./Portfolio.css";
import { projects } from "../../data/projectsData";

  

const Portfolio = () => {
  return (
    <section className="portfolio-container">
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
            <div className="portfolio-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
