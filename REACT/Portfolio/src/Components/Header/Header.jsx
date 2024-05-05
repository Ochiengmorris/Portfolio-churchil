import React from 'react'
import './Header.css'
import logo_image from '../../assets/logo-image.svg'

const Header = () => {
  return (
    <div className='header'>
        <div className="name">
            <img src={logo_image} alt="" />
            <h3>Omondi Churchil <span>/</span> <p>DATA ANALYST</p></h3>
        </div>
        <nav>
            <ul>
                <li>ABOUT ME</li>
                <li>RESUME</li>
                <li>PROJECTS</li>
                <li>CONTACT</li>
            </ul>
        </nav>
    </div>
  )
}

export default Header