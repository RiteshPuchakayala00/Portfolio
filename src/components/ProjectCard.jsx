import { Link } from "react-router-dom";
import { useState } from "react";
import ProjectInfo from "./ProjectInfo";

function ProjectCard({ id, title, description, longDescription, techStack, image, link }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article className="project-card">
      <div className="project-cover">
        <img src={image} alt={title} />
      </div>
      <div className="project-content">
        <ProjectInfo
          title={title}
          techStack={techStack}
        />

        <p>{description}</p>

        <button
          className="project-btn"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Hide Details" : "View Details"}
        </button>

        {showDetails && (
          <div className="project-details">
            <p>
              {longDescription ? longDescription[0] : `This project uses ${techStack.join(", ")} technologies.`}
            </p>

            <Link
              to={`/projects/${id}`}
              className="project-btn"
            >
              Open Project
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;