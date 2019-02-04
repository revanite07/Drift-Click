import React from "react";
import "./Navbar.css";


const Navbar = (props) => (
    <nav className="navbar">
       <img src="./images/initial-d-logo.png" height="200" width="250" alt = {props}/>
        <ul>
            <li className="brand">
                <a href="/">Click Game</a>
            </li>
            <li className={props.messageClass}>{props.message}</li>
            <li>Score: {props.score} | Top Score: {props.topscore}</li>
        </ul>
    </nav>
);

export default Navbar;