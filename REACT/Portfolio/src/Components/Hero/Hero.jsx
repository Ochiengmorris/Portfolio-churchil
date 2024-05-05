import React from 'react'
import './Hero.css'
import hero_image from '../../assets/hero-image.png'
import facebook from '../../assets/square-facebook.svg'
import twitter from '../../assets/x-twitter.svg'
import linkedin from '../../assets/linkedin.svg'
import instagram from '../../assets/instagram.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-bg"></div>
        <div className="colored">
            <div className="colored-left">
                <img src={hero_image} alt="" />
                <div className="hero-footer">
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={instagram} alt="" />
                    </div>
                <div className="colored-left-content">
                    <h2>Omondi</h2>
                    <h2>Churchil</h2>
                    <p>DATA ANALYST</p>
                    
                </div>
            </div>
            <div className="colored-right">
                <h1>HELLO</h1>
                <p>Here is who I am and what I do</p>
                <div className="hero-btn">
                    <button className='btn'>RESUME</button>
                    <button className='btn'>PROJECTS</button>
                </div>
                <span>As a data analyst, my role is to unravel the stories hidden within vast volumes of data. I meticulously collect, clean, and analyze data to extract valuable insights that drive informed decision-making. Whether it's deciphering consumer trends, optimizing operational processes, or predicting future outcomes, I thrive on transforming raw data into actionable intelligence.</span>
            </div>
            
        </div>
    </div>
  )
}

export default Hero