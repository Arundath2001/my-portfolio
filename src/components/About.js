import React from "react";
import Workexp from "./Workexp";
import Education from "./Education";
import Certifications from "./Certifications";
import certificate1 from "../assets/webcertificate.jpg";
import certificate2 from "../assets/latexcertificate.jpg";

function About(){

    const certificates = [{ name : "The Complete Web Development Bootcamp" , imgUrl : certificate1 },
                        { name : "Mastering in Latex Software" , imgUrl : certificate2 }          
                            ];

    return(
        <div className="about">
            <h5>About Me</h5>
            <p className="about_para">Passionate web developer with a keen eye for detail and creativity, focused on creating responsive and
                user-friendly websites. Skilled in using the latest technologies to provide smooth and engaging online
                experiences
            </p>

            <Workexp />

            <Education />

            <Certifications certificates={certificates} />
        </div>
    );
}

export default About;