import React, {useState} from 'react';

function Project() {

    const [projects] = useState([
        {
            title: "Shot-Map",
            description: "Webiste for sharing good locations for taking a photo.",
            link: "https://shot-map.heroku.com",
            github: "https://github.com/JayARTman/Shot-map"
        },
        {
            title: "The-Wine-Cage",
            description: "Fun site where you can find a random movie and a wine pairing to match!",
            link: "https://bootcamp-project1.github.io/The-wine-cage/",
            github: "https://github.com/bootcamp-project1/The-wine-cage"
        },
        {
            title: "E-Commerce-Backend",
            description: "A command-line application built to assist online shop owners with keeping track of their inventory",
            link: "https://github.com/pstenger23/e-commerce-backend",
            github: "https://github.com/pstenger23/e-commerce-backend"
        },
        {
            title: "Note-Taker",
            description: "Application that helps you keep track of tasks or little things you would like to remember throughout the day",
            link: "https://evening-plains-17462.herokuapp.com/",
            github: "https://github.com/pstenger23/note-taker"
        }
    ]);
    // const [currentProject, setCurrentProject] = useState();
    return(
        <div className='project'>
            {projects.map((project) => (
                <div className='project-container'>
                    <div>
                        <img
                        src={require(`../../assets/projects/${project.title}.jpg`)}
                        alt={project.title}
                        className='project-img'
                        />
                    </div>
                    <div>
                        <h3 className="project-text">{project.title}</h3>
                    </div>
                    <div>
                        <p className="project-text">{project.description}</p>
                    </div>
                    <div>
                        <a href={project.link}><span>Web</span></a>
                    </div>
                    <div>
                        <a href={project.github}><span>GitHub</span></a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Project;