function ProjectInfo({ title, techStack }) {
    return (
        <div className="project-info">
            <h3>{title}</h3>

            <p>
                Built using: {techStack.join(", ")}
            </p>
        </div>
    );
}

export default ProjectInfo;