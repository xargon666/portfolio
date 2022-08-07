import React from "react";
import "../Carousel.css";
export const Slide = ({ img, header, caption, link, githubLink, interval }) => {
    return (
        <div data-interval={interval} className="card-wrapper">
            <div className="card-img">
                <img src={img} className="carousel-img" />
            </div>
            <div className="card-content">
                <h1 className="caption-header">{header}</h1>
                <p className="caption">{caption}</p>
                <a className="slide-link" href={link}>
                    Visit the Site
                </a>
                <a className="slide-githubLink" href={githubLink}>
                    Github
                </a>
            </div>
        </div>
    );
};
