import React from 'react'
import './Card.css';
import exampleCardImage from "../imgs/katie-zaferes-swimmer.png";
import star from "../imgs/star.png";

function Card(props) {
  return (
    <div className="card-container">
        <img src={exampleCardImage} alt="" className='card-image' />

        <div className="card-body">
            <img src={star} alt="Review Star" /> 
            <span>5.0</span>
            <span className="gray">(6)</span>
            <span className="gray">&#x2022; USA</span>
            <p>Life Lessons with Katie Zaferes</p>
            <p><b>From $136</b> / person</p>
          
        </div>
    </div>
  )
}

export default Card