import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ProjectDetails() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/projects/${projectId}`)
      .then((res) => {
        if (!res.ok) {
          if (res.status === 404) {
            throw new Error('project not found');
          }
          throw new Error('Failed to fetch project details');
        }
        return res.json();
      })
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [projectId]);

  if (loading) {
    return (
      <section className="project-details-page">
        <h2 style={{ textAlign: 'center' }}>Loading project...</h2>
      </section>
    );
  }

  if (error || !project) {
    return (
      <section className="project-details-page">
        <h1>{error === 'project not found' ? 'Project Not Found' : `Error: ${error}`}</h1>
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