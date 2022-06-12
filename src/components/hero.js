import React from "react";
import AirbnbGrid from "../images/airbnbGrid.png";

export default function Hero () {
    return (
        <div className="heroSection">
            <div className="gridImageSec">
                <img src={AirbnbGrid} className="gridImage" />
            </div>
            <div className="gridTextSec">
                <h1 className="gridHead">Online Experiences</h1>
                <p className="gridPara">Join unique interactive activities led by one-of-a-kind-hosts all without leaving home</p>
            </div>
        </div>
    )
}