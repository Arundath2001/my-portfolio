import React from "react";
import note from "../assets/note.png";
import Iconlink from "./Iconlink";
import linkimg from "../assets/link.png";
import githubimg from "../assets/github.png";

function Projectcard(){

    return(
        <div className="projectcard">
            <div className="projectcard_img">
                <img src={note} alt="note" />
            </div>
            <div className="projectcard_text">
                <div className="projectcard_text_top">
                    <h4>Project Tile goes here</h4>
                    <p className="projectcard_para1">
                    This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content
                    </p>
                    <p className="projectcard_para2"><span>Tech stack : </span>HTML , JavaScript, SASS, React</p>
                </div>
                <div className="projectcard_text_down">
                    <Iconlink img={linkimg} text="Live Preview" />
                    <Iconlink img={githubimg} text="View Code" />
                </div>
            </div>
        </div>
    );

}

export default Projectcard;