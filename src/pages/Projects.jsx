import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch projects');
        }
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="section-title">
        <h2>Projects</h2>
        <p>Some of my recent work</p>
      </div>

      {loading && <p style={{ textAlign: 'center', marginTop: '2rem' }}>Loading projects...</p>}
      
      {error && (
        <div style={{ textAlign: 'center', color: '#ff6b6b', marginTop: '2rem', padding: '1rem', border: '1px solid #ff6b6b', borderRadius: '8px' }}>
          <p>Error loading projects: {error}</p>
          <p>Please ensure the backend server is running.</p>
        </div>
      )}

      {!loading && !error && (
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              longDescription={project.longDescription}
              techStack={project.techStack}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;
