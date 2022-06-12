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
    let badgeText
    if (props.openCount == 0) {
        badgeText = "SOLD OUT"
    } else if (props.location == "Online") {
        badgeText = "ONLINE"
    } else if (props.location == "Online" && props.openCount == 0) {
        badgeText = "SOLD OUT"
    }

    return(
        <div className="">
            {/* <h1>{timeOfDay}</h1>
            <h1>{hour}</h1> */}
            <div className="experienceCard">
                <img src={AthletePhoto} className="athletePhoto" alt="" />
                <h4 className="badgeText">{badgeText}</h4>
                <div className="infoSec">
                    <div className="ratingSec">
                        <img src={Star} className="star" alt="" />
                        <p className="ratingText"> <span>{props.rating}</span>({props.reviewCount}) . {props.location} </p>
                    </div>
                    <p className="cardText">{props.title}</p>
                    <p className="cardText"><b>From ${props.price}</b>/person</p>
                </div>
            </div>

            
        </div>
    )
}