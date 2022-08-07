import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";
import {Slide} from "./Slide/index"
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
            <Slide
                img={data[0].img}
                header={data[0].header}
                caption={data[0].caption}
                link={data[0].link}
                githubLink={data[0].githubLink}
                interval={intervalz}
            />
            <Slide
                img={data[1].img}
                header={data[1].header}
                caption={data[1].caption}
                link={data[1].link}
                githubLink={data[1].githubLink}
                interval={intervalz}
            />
            <Slide
                img={data[2].img}
                header={data[2].header}
                caption={data[2].caption}
                link={data[2].link}
                githubLink={data[2].githubLink}
                interval={intervalz}
            />
        </Carousel>
    );
};
