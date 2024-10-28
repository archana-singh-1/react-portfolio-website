import React from "react";
import "./footer.css"

function Footer(){
    return(
        <div className="footer">
            
                <h2 className="footerPort">Portfolio</h2>
                <div className="contactDetails">
                    <div className="aboutDetails">
                        <p className="aboutPort">About Portfolio</p>
                        <p className="informtext">Information</p>
                        <p className="informtext">Projects</p>
                        <p className="informtext">Skills</p>
                        
                    </div>

                    <div className="support">
                        <p className="aboutPort">Support</p>
                        <p className="informtext">Contact</p>
                    </div>

                    <div className="social">
                        <p className="aboutPort">Social</p>
                        <p className="informtext">LinkedIn</p>
                    </div>

                </div>
                <div className="footerBor"></div>
                <h2 className="year">2024@Portfolio-website</h2>
           
        </div>
      
    )
}
export default Footer;