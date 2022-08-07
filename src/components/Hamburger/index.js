import React, { useState } from "react";
import { fallDown as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./Hamburger.css";
import icon from "../../static/img/hamburger/HAMBURGER_MAIN.png";

export const Hamburger = () => {
    const imgElement = <img src={icon} />
    const [imgState,setImgState] = useState(imgElement)
    
    const isMenuOpen = (state) => {
        if (state.isOpen) setImgState(false)
        if (!state.isOpen) setImgState(imgElement)
    }
    

    return (
        <Menu
            right
            onStateChange={isMenuOpen}
            customBurgerIcon={imgState}
        >
            <Link id="menu-about" className="menu-item" to="/about">
                About
            </Link>
            <Link id="menu-home" className="menu-item" to="/">
                Home
            </Link>
            <Link id="menu-portfolio" className="menu-item" to="/portfolio">
                Portfolio
            </Link>
        </Menu>
    );
};
