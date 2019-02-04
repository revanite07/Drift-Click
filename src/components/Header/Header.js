import React from "react";
import "./Header.css";

const Header = (props) => (
  <header className="header">
  <img className="takumi" src="./images/takumi.png" height="200" width="250" alt = {props}/>
       <h1>ドリフト,ドリフト!</h1>
       <h2>Click to Drift the Cars and earn points, but dont click more than once..</h2>
       <img className="keisuke" src="./images/keisuke.png" height="200" width="250" alt = {props}/>
  </header>
);

export default Header;