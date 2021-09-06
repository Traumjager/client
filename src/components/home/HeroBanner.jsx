import React from 'react'
import './style/hero.css'
import Logo from './Logo'
import { Link } from "react-router-dom";

function HeroBanner() {
    
    return (
        <div className='heroContainer'>
            <div className='transparent'></div>
            <div className='textContainer'>
                <div className='centerLogo'>
                    <Logo w={'250pt'} h = {'250pt'}/>    
                    <h1 className="heroText" ><span>I SLOON</span></h1>
                    <p>some text in white color</p>
                </div>
                
            </div>
            <img className='heroImg' src="https://www.wallpapertip.com/wmimgs/95-956819_barber.jpg" alt="" />
        </div>
    )
}

export default HeroBanner
