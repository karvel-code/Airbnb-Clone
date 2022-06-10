import React from "react";
import AthletePhoto from "../images/athlete.png";
import Star from "../images/star.png";

export default function Card(props) {
    const date = new Date()
    const hour = date.getHours()
    let timeOfDay

    // if (hour < 12) {
    //     timeOfDay = "Morning"
    // } else if (hour >= 12 && hour < 18) {
    //     timeOfDay = "Afternoon"
    // } else {
    //     timeOfDay = "Night"
    // }

    return(
        <div className="experienceSec">
            {/* <h1>{timeOfDay}</h1>
            <h1>{hour}</h1> */}
            <div className="experienceCard">
                <img src={AthletePhoto} className="athletePhoto" alt="" />
                <div className="infoSec">
                    <div className="ratingSec">
                        <img src={Star} className="star" alt="" />
                        <p className="ratingText"> ({props.reviewCount}) . USA </p>
                    </div>
                    <p className="cardText">{props.title}</p>
                    <p className="cardText"><b>${props.price}</b>/person</p>
                </div>
            </div>
            {/* <div className="experienceCard">
                <img src={AthletePhoto} className="athletePhoto" alt="" />
                <div className="infoSec">
                    <div className="ratingSec">
                        <img src={Star} className="star" alt="" />
                        <p className="ratingText"> {props.reviewCount} . USA </p>
                    </div>
                    <p className="cardText">Life Lessons with Mr Githinji</p>
                    <p className="cardText"><b>From $136</b>/person</p>
                </div>
            </div> */}
            
        </div>
    )
}