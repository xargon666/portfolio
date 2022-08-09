import React from "react";
import { Carousel } from "../../components/index";
import "./Portfolio.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img01 from "../../static/img/carousel/01_potato.jpg";
import img02 from "../../static/img/carousel/02_lemon.jpg";
import img03 from "../../static/img/carousel/03_herring.jpg";

const data = [
    {
        img: img01,
        header: "Potato or Pepsi?",
        caption:
            `Created while learning how to send data from the client using the fetch() API, then capturing data using express and saving it on the server in a store variable.\n
            The app generates the image of either a can of pepsi or a potato, dependent on random chance. The simple experiment was quite popular!\n`,
        link:"https://potato-or-pepsi.netlify.app",
        githubLink:"#",
        interval:5000
    },
    {
        img: img02,
        header: "Lemon Party",
        caption:
            `The first team project I undertook on the futureproof course, building on what we had learned so far, this site is a basic forum that features reactions and gifs using vanilla javascript. Information is stored in the backend in json format.\n`,
        link:"https://journal-project-lemon.netlify.app/",
        githubLink:"#",
        interval:5000
    },
    {
        img: img03,
        header: "Read Herring",
        caption:
            `The result of a week long team project and our final project of the Futureproof course, this site features a forum, a search page for finding books by title using the google books api, a user login and a user profile page where books can added to favourites and displayed on bookshelf.\n`,
        link:"https://read-herring.netlify.app/",
        githubLink:"#",
        interval:5000
    },
];

export const Portfolio = () => {

    return (
        <div className="main-container bg-image" id="bg-portfolio">
            <div className="container">
                <div className="portfolio-wrapper">
                    <div className="carousel-wrapper">
                        <Carousel data={data}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
