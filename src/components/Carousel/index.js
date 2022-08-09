import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";
import { Slide } from "./Slide/index";
export default ({ data }) => {
    const [intervalz, setIntervalz] = useState(50000); //initial state here represents the interval for first image.

    const onChange = (index, item) => {
        setIntervalz(50000);
    };

    return (
        <Carousel
            onChange={onChange}
            interval={intervalz}
            infiniteLoop={true}
            useKeyboardArrows
            autoPlay
            showThumbs={false}
        >
            {data.map((slide) => (
                <Slide
                    img={slide.img}
                    header={slide.header}
                    caption={slide.caption}
                    link={slide.link}
                    githubLink={slide.githubLink}
                    interval={intervalz}
                />
            ))}
        </Carousel>
    );
};
