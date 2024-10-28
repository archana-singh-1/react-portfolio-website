import React from "react";
import "./container.css"
import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";

function Container(){
    return(
        <div className="container">
            <div className="detail" id="home">
            <div className="introduction">
                <h3 className="intro">Hi all, I'm Archana Singh</h3>
                <p class="aboutme">
                    Hi, I'm Archana Singh, a passionate Full Stack Developer specializing in technologies such as HTML, CSS, JavaScript, React, and Node.js. 
                    I love creating dynamic and responsive web applications that provide excellent user experiences. My enthusiasm for web development drives me 
                    to continuously learn and adapt, focusing on building user-friendly interfaces and efficient back-end systems. I've worked on several projects, 
                    including a Donation Website, where I developed a platform that allows users to easily donate to various causes, and a News API Project, which 
                    fetches and displays the latest news articles from different sources. These projects showcase my ability to transform ideas into reality and 
                    demonstrate my skills in both front-end and back-end development.
                </p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/archana-singh7/" target="_blank" aria-label="LinkedIn" className="linkedin">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                            <path d="M21.448 0H2.552C1.144 0 0 1.144 0 2.552v19.897C0 22.856 1.144 24 2.552 24h18.896C22.856 24 24 22.856 24 21.448V2.552C24 1.144 22.856 0 21.448 0zM7.243 20.452H4.317V10.999h2.926v9.453zm-1.463-10.758c-.939 0-1.585-.617-1.585-1.387 0-.797.667-1.385 1.676-1.385.939 0 1.586.588 1.591 1.385 0 .77-.647 1.387-1.676 1.387zM20.452 20.452h-2.926v-4.755c0-1.149-.021-2.619-1.597-2.619-1.601 0-1.848 1.250-1.848 2.544v4.830H11.25V10.999h2.81v1.284h.038c.392-.743 1.353-1.529 2.792-1.529 2.991 0 3.541 1.963 3.541 4.514v5.184h-.002z"/>
                        </svg>
                    </a>
                    <a href="https://github.com/archana-singh-1" target="_blank" aria-label="GitHub" className="github">
                       
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                            <path d="M12 0C5.372 0 0 5.372 0 12c0 5.304 3.438 9.8 8.205 11.387.6.111.82-.26.82-.577 0-.287-.011-1.246-.017-2.26-3.338.725-4.043-1.607-4.043-1.607-.546-1.388-1.333-1.758-1.333-1.758-1.088-.743.084-.728.084-.728 1.204.084 1.836 1.235 1.836 1.235 1.069 1.832 2.803 1.303 3.487.996.108-.775.418-1.303.762-1.603-2.665-.302-5.466-1.333-5.466-5.935 0-1.312.468-2.384 1.237-3.221-.124-.302-.536-1.525.117-3.176 0 0 1.007-.323 3.301 1.23.957-.267 1.986-.398 3.004-.402 1.018.004 2.048.135 3.006.402 2.293-1.553 3.3-1.23 3.3-1.23.653 1.651.242 2.874.118 3.176.77.837 1.237 1.909 1.237 3.221 0 4.611-2.805 5.628-5.467 5.935.429.373.813 1.103.813 2.223 0 1.607-.014 2.903-.017 3.293 0 .318.218.694.825.577C20.563 21.8 24 17.304 24 12c0-6.628-5.372-12-12-12z"/>
                        </svg>
                    </a>
                    <button className="resume-button" onclick="window.open('./Archana_resume (1).pdf', '_blank')">See My Resume</button>

                </div>
            </div>

            <div class="scene">
                <img src="./image.jpeg" class="imageCircle" alt=""/>
            </div>
            </div>
            
          
            
            <About id="about" />
            <Skill id="skills" />
            <Project id="project" />
            <Contact id="contact" />
            <Footer/>
        </div>
    )
}
export default Container;