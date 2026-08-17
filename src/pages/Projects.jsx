import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-title">
        <h2>Projects</h2>
        <p>Some of my recent work</p>
      </div>

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
    </section>
  );
}

export default Projects;
