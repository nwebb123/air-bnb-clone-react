import React from 'react'
import './Card.css';

import star from "../imgs/star.png";

function Card(props) {
  return (
    <div className="card-container">
        <img src={`../imgs/${props.img}`} alt="" className='card-image' />

        <div className="card-body">
            <img src={star} alt="Review Star" /> 
            <span>{props.rating}</span>
            <span className="gray">({props.reviewCount})</span>
            <span className="gray">&#x2022; {props.location}</span>
            <p>{props.title}</p>
            <p><b>From ${props.price}</b>/ person</p>
          
        </div>
    </div>
  )
}

export default Card