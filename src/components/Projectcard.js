import React from "react";
import Iconlink from "./Iconlink";
import linkimg from "../assets/link.png";
import githubimg from "../assets/github.png";

function Projectcard(props) {

    return (
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
                    <div className="projectcard_live_links">
                        <Iconlink img={linkimg} text={props.text1} link={props.live1} />

                        {props.live2 && (
                            <Iconlink img={linkimg} text={props.text2} link={props.live2} />
                        )}
                    </div>

                    {props.code && (
                        <Iconlink img={githubimg} text="View Code" link={props.code} />
                    )}
                </div>
            </div>
        </div>
    );

}

export default Projectcard;