import React from "react";
// import {Header,Footer,Calculator} from '../../components'
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
    return (
        <>
            <div className="main-container bg-image" id="bg-home">
                <Link to="/about">
                  <div class="logo-hover" id="logo-main"></div>
                </Link>
                <Link to="/contact">
                  <div class="logo-hover" id="logo-contact"></div>
                </Link>
            </div>
        </>
    );
};
