import React from "react";
import Headmin from "./Headmain";
import html from "../assets/html.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import javascript from "../assets/js.png";
import node from "../assets/node.png";
import git from "../assets/github.png";
 
function Techstack(){

    return(
        <div id="techstack" className="techstack">

            <Headmin mainhead="My Tech Stack" subhead="Technologies I’ve been working with recently" />

            <div className="techstack_img">

                <img src={html} alt="html"/>                
                <img src={css} alt="html"/>                
                <img src={javascript} alt="html"/>                
                <img src={react} alt="html"/>                
                <img src={node} alt="html"/>                
                <img src={git} alt="html"/>                

            </div>

        </div>
    );

}

export default Techstack;