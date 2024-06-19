import React from "react";
import Iconlink from "./Iconlink";
import linkimg from "../assets/link.png";
import githubimg from "../assets/github.png";

function Projectcard(props){

    return(
        <div className="projectcard">
            <div className="projectcard_img">
                <img src={props.img} alt="note" />
            </div>
            <div className="projectcard_text">
                <div className="projectcard_text_top">
                    <h4> {props.title} </h4>
                    <p className="projectcard_para1">
                    {props.content}
                    </p>
                    <p className="projectcard_para2"><span>Tech stack : </span> {props.techstack} </p>
                </div>
                <div className="projectcard_text_down">
                    <Iconlink img={linkimg} text="Live Preview" link={props.live}  />
                    <Iconlink img={githubimg} text="View Code" link={props.code} />
                </div>
            </div>
        </div>
    );

}

export default Projectcard;