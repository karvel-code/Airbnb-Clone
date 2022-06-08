import React from "react";
import AirbnbLogo from "../images/airbnb-logo.png";
import Airbnb from "../images/airbnb.png";

function Navbar () {
    return(
        <div>
            <nav className="navbar">
                <img src={Airbnb} className="airbnb-logo" />
                {/* <h2 className="logoText">airbnb</h2> */}
            </nav>
            
        </div>
    )
}

export default Navbar;