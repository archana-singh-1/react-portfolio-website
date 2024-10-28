import React from "react";
import "./navbar.css"
function Navbar(){
    return(
        <div className="navbarContain">
            <nav className="navbar">
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        </div>

    )
}
export default Navbar;