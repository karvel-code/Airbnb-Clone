import React from "react";
import AthletePhoto from "../images/athlete.png";
import Star from "../images/star.png";

export default function Card() {
    return(
        <div className="experienceSec">
            <div className="experienceCard">
                <img src={AthletePhoto} className="athletePhoto" alt="" />
                <div className="infoSec">
                    <div className="ratingSec">
                        <img src={Star} className="star" alt="" />
                        <p className="ratingText"> (6) . USA </p>
                    </div>
                    <p className="cardText">Life Lessons with Mr Githinji</p>
                    <p className="cardText">From $136/person</p>
                </div>
            </div>
            <div className="experienceCard">
                <img src={AthletePhoto} className="athletePhoto" alt="" />
                <div className="infoSec">
                    <div className="ratingSec">
                        <img src={Star} className="star" alt="" />
                        <p className="ratingText"> (6) . USA </p>
                    </div>
                    <p className="cardText">Life Lessons with Mr Githinji</p>
                    <p className="cardText">From $136/person</p>
                </div>
            </div>
            
        </div>
    )
}