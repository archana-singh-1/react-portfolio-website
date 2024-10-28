import React from "react";
import "./about.css"
function About(){
    return(
        <div className="aboutContain" id="about">
            <div className="do">
                <h2 className="whatIdo">What I do</h2>
                <div className="infobor"></div>

                <p className="introd">I'm a Full Stack Developer specializing in the MERN stack. I love building web apps, solving problems, and learning new things. I focus on creating simple, efficient solutions using modern tools to deliver quality results.</p>
                <p className="aboutzuvy">I completed the Zuvy Bootcamp by NavGurukul, where I learned MERN stack technologies and built several projects. This experience sharpened my coding skills and gave me hands-on practice in building full-stack applications.</p>
                <p className="aboutnav">I enrolled in the NavGurukul Foundation for Social Welfare, where I completed a software development course and learned various programming languages. The organization supports students from financially underprivileged backgrounds.</p>

                <div className="aboutNavgurukul">
                    <p className="whatNavguru">What is NavGurukul ?</p>
                    <div className="infobors"></div>
                    
                    <p className="navgurukuldetails">NavGurukul is a non-profit offering free software development training to youth from underprivileged backgrounds. It provides an alternative to traditional education, focusing on practical tech skills and real-world learning to help students build careers in technology.</p>
                </div>
                <div className="border"></div>
            </div>
            
        </div>
    )

}
export default About;