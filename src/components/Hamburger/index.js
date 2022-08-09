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
    
    const data = [
        {id:"menu-home",dest:"/",text:"Home"},
        {id:"menu-about",dest:"/about",text:"About"},
        {id:"menu-portfolio",dest:"/portfolio",text:"Portfolio"}
    ]

    return (
        <Menu
            right
            onStateChange={isMenuOpen}
            customBurgerIcon={imgState}
        >
            {data.map((d)=>(
                <Link id={d.id} className="menu-item" to={d.dest}>
                {d.text}
            </Link>
                ))}
        </Menu>
    );
};
