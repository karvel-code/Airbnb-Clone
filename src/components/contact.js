import React from "react";
import AthletePhoto from "../images/athlete.png";
import Star from "../images/star.png";


export default function Contact({title, price}) {
    return (
        <div className="contactSection">
            <div className="experienceCard">
                <img src={AthletePhoto} className="athletePhoto" alt="" />
                <div className="infoSec">
                    <div className="ratingSec">
                        <img src={Star} className="star" alt="" />
                        <p className="ratingText"> (6) . USA </p>
                    </div>
                    <p className="cardText">{title}</p>
                    <p className="cardText">{price}</p>
                </div>
            </div>
        </div>
    )
}