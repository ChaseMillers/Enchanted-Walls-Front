import React from "react";
import "./Animation.scss";
import {ReactComponent as RacoonSVG} from './racoonAnimation.svg';
import Fire from './fireAnimation'

const Animation = () => {
  return(
    <div className='img-layout-container'>
      <div className="backdrop-container">
        <img
          className="backdrop" 
          src="images/backdrop.jpg"
          alt="title product"/>
      </div>
      <Fire />
      <RacoonSVG />
      <div className='arm-wave-container'>
        <div className='arm-wave'>
          <img 
            className="arm" 
            src="images/arm.png"
            alt="arm wave from racoon"/>
        </div>
      </div>
    </div>
  )
 
}

export default Animation
