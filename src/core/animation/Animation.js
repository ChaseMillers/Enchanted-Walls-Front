import React from "react";
import "./Animation.scss";
import {ReactComponent as RacoonSVG} from './racoonAnimation.svg';
import Fire from './fireAnimation'

const Animation = () => {

  let armWave = document.querySelector('use#waveArm')

  function changeBackground(e) {
    armWave.style.transform = 'translateX(218px) translateY(-205px) rotate(15deg)';
  }
  function changeBackgroundback(e) {
    armWave.style.transform = 'scaleX(1)';
  }

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
      <div 
      className='hover-container' 
      onMouseLeave={changeBackgroundback}
      onMouseOver={changeBackground}>
        <div
          className='hover-cutout'>
        </div>
      </div>
    </div>
  )
 
}

export default Animation
