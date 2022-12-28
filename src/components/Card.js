import React from "react";
import "./Card.css";

import star from "../srcimgs/star.png";

function Card(props) {
  /*Could also conditionally render "Sold out" div here using something like this:
   let badgeText;
   if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
   }
  */

  return (
    <div className="card-container">
      {props.exp.openSpots === 0 && <div className="card-badge">SOLD OUT</div>}
      <img src={`../imgs/${props.exp.coverImg}`} alt="" className="card-image" />

      <div className="card-body">
        <img src={star} alt="Review Star" className="card-star" />
        <span>{props.exp.stats.rating}</span>
        <span className="gray">({props.exp.stats.reviewCount})</span>
        <span className="gray">&#x2022; {props.exp.location}</span>
      </div>
      <p className="card-title">{props.exp.title}</p>
      <p className="card-price">
        <b>From ${props.exp.price}</b>/ person
      </p>
    </div>
  );
}

export default Card;
