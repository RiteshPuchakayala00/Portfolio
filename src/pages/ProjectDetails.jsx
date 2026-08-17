import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";

function ProjectDetails() {
  const { projectId } = useParams();

  const project = projects.find(
    (item) => item.id === Number(projectId)
  );

  if (!project) {
    return (
      <section className="project-details-page">
        <h1>Project Not Found</h1>
        <Link to="/projects" className="btn primary">
          Back to Projects
        </Link>
      </section>
    );
  }

  return (
    <section className="project-details-page">
      <div className="section-title">
        <h2>{project.title}</h2>
        <p>Project Details</p>
      </div>

      <div className="project-details-content">
        <img
          src={project.image}
          alt={project.title}
          className="project-detail-image"
        />

        <div className="project-description-long">
          {project.longDescription ? (
            project.longDescription.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          ) : (
            <p>{project.description}</p>
          )}
        </div>

        <h3>Technologies</h3>

        <div className="tech-stack">
          {project.techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-detail-actions">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="btn primary"
          >
            View on GitHub
          </a>

          <Link to="/projects" className="btn secondary">
            Back to Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;