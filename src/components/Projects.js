import React from "react";
import Headmain from "./Headmain";
import Projectcard from "./Projectcard";
import note from "../assets/note.png";
import beinex from "../assets/beinex.png";
import cubegame from "../assets/cubegame.png";
import rohith from "../assets/rohith.png";
import Bhoomika from "../assets/Bhoomika.png";
import Artiq from "../assets/Artiq.png";
import './Projects.css';

function Projects() {
    const projects = [{
        img: Bhoomika,
        title: "Artiq Design Landing Page",
        content: "Develop a real estate website where users can seamlessly browse available properties, schedule viewings, and list their own properties for sale. Additionally, create an admin panel to manage website content, handle property listings, view enquiries, and oversee other administrative functions to ensure smooth operation and user satisfaction.",
        techstack: "React, JavaScript, CSS, Node",
        live: "https://www.bhoomikarealestate.com/",
        code: "https://github.com/Arundath2001/bhoomika2024"
        },{
        img: Artiq,
        title: "Artiq Design Landing Page",
        content: "Developed a visually stunning landing page for Artiq Design Studio, showcasing their diverse design services. The site features an elegant layout, intuitive navigation, and eye-catching visuals, providing a compelling and seamless digital experience for the brand.",
        techstack: "React, JavaScript, CSS",
        live: "https://artiqdesignstudio.netlify.app/",
        code: "https://github.com/Arundath2001/Artiq-design-studio"
        },{
        img: rohith,
        title: "Portfolio Website",
        content: "Developed an engaging portfolio website, showcasing skills, projects, and achievements. The site features a clean layout, user-friendly navigation, and dynamic visuals, creating an impressive online presence that highlights work and expertise.",
        techstack: "React, JavaScript, CSS",
        live: "https://rohithrameshan.netlify.app/",
        code: "https://github.com/Arundath2001/rohith_portfolio"
        },
        {
            img: note,
            title: "Keeper Website",
            content: "Boost your note-taking efficiency with our carefully designed Keeper App, tailored for smooth and intuitive personal note management. Effortlessly create, view, and delete notes, ensuring a clutter-free and organized workflow.",
            techstack: "JavaScript, CSS, React",
            live: "https://setnotes.netlify.app/",
            code: "https://github.com/Arundath2001/Keeper"
        },
        {
            img: beinex,
            title: "Beinex Website",
            content: "A fully developed clone of the Beinex website using HTML and SCSS, demonstrating responsive design and adherence to modern web development standards.",
            techstack: "HTML, SCSS",
            live: "https://arundath2001.github.io/UITask/",
            code: "https://github.com/Arundath2001/UITask"
        },
        {
            img : cubegame,
            title : "Memory Game",
            content : "Experience the excitement of \"Memory Game,\" a web-based challenge designed to test and enhance your memory skills. Four colored cubes blink in sequence, each paired with a sound. Your task is to click the cubes in the correct order as the sequences grow more complex.",
            techstack : "HTML, CSS, JavaScript",
            live : "https://playcubegame.netlify.app/",
            code : "https://github.com/Arundath2001/CubeGame"
        }
    ];

    return (
        <div id="projects" className="projects">
            <Headmain mainhead="Projects" subhead="Things I’ve built so far" />
            <div className="project_row">
                {projects.map((data, index) => (
                    <Projectcard
                        key={index}
                        img={data.img}
                        title={data.title}
                        content={data.content}
                        techstack={data.techstack}
                        live={data.live}
                        code={data.code}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;
