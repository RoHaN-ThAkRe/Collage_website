import React from 'react'
import './Hero.css';
import dark_arrow from '../../Assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, ad, illum
          quae cumque sapiente suscipit fugit voluptatum quas ex deleniti molestias nobis
          ut architecto laudantium </p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero