import React from "react";
import { Code2, Smartphone } from "lucide-react";
import "./Homemain.css";

function Homemain() {
    return (
        <div className="home-section">
            {/* LEFT SECTION (original) */}
            <div className="home-left">
                <h1>
                    Hi <span className="home-wave">👋</span>,<br />
                    My name is<br />
                    <span className="home-name-gradient">Arundath</span><br />
                    I build things for the web & mobile
                </h1>
            </div>

            {/* RIGHT SECTION (new clean cards) */}
            <div className="home-right">
                <div className="home-devcard">
                    <div className="home-devicon-wrapper">
                        <Code2 size={50} className="home-devicon" />
                    </div>
                    <h3>Web Development</h3>
                    <p>Crafting clean, fast, and modern web experiences.</p>
                </div>

                <div className="home-devcard">
                    <div className="home-devicon-wrapper">
                        <Smartphone size={50} className="home-devicon" />
                    </div>
                    <h3>App Development</h3>
                    <p>Building smooth and intuitive mobile applications.</p>
                </div>
            </div>
        </div>
    );
}

export default Homemain;
