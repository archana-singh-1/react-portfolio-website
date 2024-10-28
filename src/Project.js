import React from "react";
import "./project.css";

function Project(){
    return(
        <div className="projectContain" id="project">
            <div className="containProject">
                <h2 className="project">Projects</h2>
                <div className="projectbor"></div>
                <div className="allproject">
                    <div className="movieImg">
                        <img src="./movie.png" className="img1" alt=""/>
                        <div className="dondiv">
                            <a href="https://movie-review-flame.vercel.app/" className="live">Live Demo</a>
                        </div>
                    </div>

                    <div className="movieImg">
                        <img src="recipe.png" className="img1" alt=""/>
                        <div className="dondiv"><a href="https://recipe-website-mu-seven.vercel.app/" className="live">Live Demo</a></div>
                    </div>
                </div>

                <div className="donation">
                    <div className="movieImg">
                        <img src="donation.png" className="img1" alt=""/>
                        <div className="dondiv"><a href="https://donation-dynamics-project.vercel.app/" className="live">Live Demo</a></div>
                    </div>


                    <div className="movieImg">
                        <img src="ui.png" className="img1" alt=""/>
                        <div className="dondiv"><a href="https://archana-singh-1.github.io/internshala_ui_design/" className="live">Live Demo</a></div>
                    </div>

                </div>
                <div className="borders"></div>
            </div>
            
            

        </div>
    )

}
export default Project;