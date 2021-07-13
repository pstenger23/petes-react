import React from 'react';
import photo from '../../assets/projects/shot-map.png'
function Portfolio(props) {

    const currentProject = 
    {
        name: "Shot-Map",
        description: "Webiste for sharing good locations for taking a photo.",
        link: "shot-map.heroku",
        github: "github.com/shot-map"
    }
    return(
        <div>
            <img src={photo} alt="shot-map" className="img-thumbnail"/>
            <h2>{currentProject.name}</h2>
            <p>{currentProject.description}</p>
            <p ><a className="project-link" href={currentProject.link}>Website</a></p>
            <p ><a className="project-link" href={currentProject.github}>GitHub</a></p>
        </div>
    )
}
export default Portfolio;