import React from "react";
import Headmain from "./Headmain";
import Projectcard from "./Projectcard";

function Projects(){

    return(

        <div id="projects" className="projects">
            <Headmain mainhead="Projects" subhead="Things I’ve built so far" />

            <div className="project_row">
                <Projectcard />
                <Projectcard />
                <Projectcard />
            </div>
            
        </div>

    );

}

export default Projects;