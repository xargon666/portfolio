import React from "react";
import "./About.css";
import img from "../../static/img/profile/profile.jpg";
export const About = () => {
    return (
        <>
            <div className="main-container bg-image" id="bg-about">
                <div className="container">
                    <div className="card-wrapper">
                        <div className="card-img">
                            <img src={img}></img>
                        </div>
                        <div className="card-content">
                            <p>
                                Something of an introvert, habitually looking off into the distance, I've
                                never been able to settle on anything for long.
                                The complex problem solving and creative design
                                aspects of web development however really get me
                                hooked. When I'm given a problem to solve it's
                                fun finding a solution, and I always learn
                                something along the way. 
                                <br/><br/>
                                I have recently completed an intense 13 week
                                course with Futureproof to turbo charge my
                                skillset, and now feel confident calling myself
                                a full-stack developer. I'm looking forward to
                                new challenges, and the opportunity to grow my
                                talents further.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
