import React from 'react'
import './hero.css'
import arrow_icon from '../assets/icons/arrowIcon.png'
import hand_icon from '../assets/icons/handIcon.jpeg'
import hero_img from '../assets/girls/images.jpg'

const Hero = () => {
  return ( 
    <div className='h'>
    <div className="h-left">
      <h2>NEW ARRIVALS ONLY</h2>
      <div>
        <div className="h-hand">
          <p>new</p>
          <img src={hand_icon} alt=''/>
        </div>
        <p>collections</p>
        <p>for everyone</p>
      </div>
      <div className="h-latest">
        <div>Latest Collection</div>
        <img src={arrow_icon} alt=''/>
      </div>
    </div>
    <div className="h-right">
      <img src={hero_img} alt=''/>
    </div>
  </div>
  )
}

export default Hero