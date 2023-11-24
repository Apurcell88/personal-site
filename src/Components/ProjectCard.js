const ProjectCard = ({
    project,
    backgroundColor,
    isContainerVisible,
    setIsContainerVisible
    
 }) => {
    const handleAnimationEnd = () => {
        setIsContainerVisible(!isContainerVisible);
      }
    return (
        <div
          onAnimationEnd={handleAnimationEnd}
          className={isContainerVisible ? `project-card--container` : 'stay'}
        >
            <div className="project-card--title-container">
                <h1 className="project-card--title">{project.title}</h1>
            </div>
            <div
              className="project-card--description-container"
              style={{ borderImage: `var(${backgroundColor[0]}) 0 80%`}}
            >
                <p>{project.description}</p>
            </div>
            <div
              className="project-card--navigation-container"
            >
                <button
                    className="project-card--button"
                    style={{ borderImage: `var(${backgroundColor[1]}) 0 80%`}}
                >
                    <a
                        className="project-card--link"
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        View Site
                    </a>
                </button>
                <button
                    className="project-card--button"
                    style={{ borderImage: `var(${backgroundColor[1]}) 0 80%`}}
                >
                    <a
                        className="project-card--link"
                        href={project.gitHubUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                    </a>
                </button>
             </div>
        </div>
    );
}
 
export default ProjectCard;