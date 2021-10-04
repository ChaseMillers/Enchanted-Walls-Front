import React, { useState, useEffect } from 'react';
import "./Animation.scss";
import {ReactComponent as RacoonSVG} from './racoonAnimation.svg';
import Fire from './fireAnimation'

const Animation = () => {

  const [data, setData] = useState({hover: false});

  useEffect(() => {
      changeBackground(data.hover)
  },[data.hover]) 

  const changeBackground=(toggle)=> {
    const armWave = document.querySelector('#waveArm')
    toggle ? armWave.style.transform = 'translateX(218px) translateY(-205px) rotate(15deg)'
    : armWave.style.transform = 'scaleX(1)';
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
      {RacoonSVG &&(
        <div 
          className='hover-container'
          onMouseOver={()=>setData({ hover: true })}
          onMouseLeave={()=>setData({ hover: false })}
          >
            <div className='hover-target'></div> 
        </div>
      )}
    </div>
  )
 
}

export default Animation
