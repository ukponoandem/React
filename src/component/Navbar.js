import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import "../styles/Footer.css";

function Navbar(){
    return (
 <div className="navbar">
    <div className="togglebutton">

    </div>
    <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Project">Project</Link>
        <Link to="/Experience">Experience</Link>
    </div>
 </div>
    )
}

export default Navbar