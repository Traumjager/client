import React from 'react'
import './style/hero.css'
import Logo from './Logo'
function HeroBanner() {
    return (
        <div className='heroContainer'>
            <div className='transparent'></div>
            <div className='textContainer'>
                <div className='centerLogo'>
                    <Logo/>    
                    <h1 className="heroText" ><span>I SLOON</span></h1>
                </div>
                
            </div>
            <img className='heroImg' src="https://www.wallpapertip.com/wmimgs/95-956819_barber.jpg" alt="" />
        </div>
    )
}

export default HeroBanner
