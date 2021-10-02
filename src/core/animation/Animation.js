import React from "react";
import "./Animation.scss";
import {ReactComponent as RacoonSVG} from './racoonAnimation.svg';
import Fire from './fireAnimation'

const Animation = () => (
  <div className='img-layout-container' viewBox="0 0 1584 995">
      <div className="backdrop-container">
        <img
          className="backdrop" 
          src="images/backdrop.jpg"
          alt="title product"
        ></img>
      </div>
      <Fire />
      <RacoonSVG />
      
  </div>
)

export default Animation
