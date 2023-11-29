import { useEffect } from "react";
import DefaultLanding from "./DefaultLanding";
import ProjectCard from "./ProjectCard";


const Landing = ({
    projects,
    setProjects,
    projectDisplay,
    setProjectDisplay,
    selectProject,
    setSelectProject,
    backgroundColor,
    setBackgroundColor,
    isContainerVisible,
    setIsContainerVisible,
    displayEmailForm,
 }) => {
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch('../projectdata.json');
                const data = await res.json();
                setProjects(data);
            } catch (error) {
                console.error(error);
            }
           
        }

        fetchProjects();
    }, []);

    const horizontalGradientVariables = [
        '--blue-to-purple-h',
        '--teal-to-green-h',
        '--orange-to-pink-h',
        '--gold-to-red-h',
        '--turquoise-to-royal-blue-h',
        '--crimson-to-dark-red-h',
        '--mauve-to-pink-h',
        '--silver-to-steel-blue-h'
      ];
    
      const verticalGradientVariables = [
        '--blue-to-purple-v',
        '--teal-to-green-v',
        '--orange-to-pink-v',
        '--gold-to-red-v',
        '--turquoise-to-royal-blue-v',
        '--crimson-to-dark-red-v',
        '--mauve-to-pink-v',
        '--silver-to-steel-blue-v'
      ];

      let previousIndex = -1; // Initialize with a value that is not a valid index.
    
      const getRandomGradient = ()=> {
        let randomIndex;

        // Keep generating a new index until it is different from the previous one.
        do {
          randomIndex = Math.floor(Math.random() * horizontalGradientVariables.length);
        } while (randomIndex === previousIndex);

        previousIndex = randomIndex;

        return [
          horizontalGradientVariables[randomIndex],
          verticalGradientVariables[randomIndex]
        ];
      };
    
      const handleColorChangeClick = () => {
        let randomGradient = getRandomGradient();

        setBackgroundColor(randomGradient);
      }

    return (
        <div className='landing--outer-container'>
            <div className="landing--inner-container">
                {/* empty divs for the top left border */}
                <div
                    className='top-left-horizontal-border'
                    style={{ background: `var(${backgroundColor[0]})`}}
                ></div>
                <div
                    className='top-left-vertical-border'
                    style={{ background: `var(${backgroundColor[1]})`}}
                ></div>

                {!projectDisplay ?
                    <DefaultLanding
                      backgroundColor={backgroundColor}
                      displayEmailForm={displayEmailForm}
                      // setDisplayEmailForm={setDisplayEmailForm}
                    /> :
                    <ProjectCard
                      project={selectProject}
                      backgroundColor={backgroundColor}
                      isContainerVisible={isContainerVisible}
                      setIsContainerVisible={setIsContainerVisible}
                    />
                }
                
            </div>
            <div className={ displayEmailForm ? "hidden" : 'landing--projects-container'}>
                <h2 className="landing--projects-title">
                  Projects
                </h2>
                {projects.map((project) => {
                    return (
                      <div className="landing--projects-info-container">
                        <button
                          className="landing--projects-project-title"
                          key={project.id}
                          style={{ borderImage: `var(${backgroundColor[1]}) 0 80%`}}
                          onClick={(id) => {
                            if (id !== project.id) {
                              setSelectProject(project);
                            }
            
                            setProjectDisplay(true);
                            handleColorChangeClick();
                            setIsContainerVisible(true);
                          }}
                        >
                            {project.title.toUpperCase()}
                        </button>
                      </div>
                    )
                })}
            </div>   
        </div>
    );
}
 
export default Landing;