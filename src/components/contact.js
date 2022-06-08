import React from "react";
import AthletePhoto from "../images/athlete.png";
import Star from "../images/star.png";


export default function Contact(props) {
    return (
        <div className="contactSection">
            <div className="experienceCard">
                <img src={AthletePhoto} className="athletePhoto" alt="" />
                <div className="infoSec">
                    <div className="ratingSec">
                        <img src={Star} className="star" alt="" />
                        <p className="ratingText"> (6) . USA </p>
                    </div>
                    <p className="cardText">{props.title}</p>
                    <p className="cardText">{props.price}</p>
                </div>
            </div>
        </div>
    )
}