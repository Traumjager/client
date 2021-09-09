import React from 'react';
import './style/hero.css';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { position } from 'dom-helpers';

function HeroBanner() {
  return (
    <div className="heroContainer">
      <div className="transparent"></div>
      <div className="textContainer">
        <div className="centerLogo">
          <Logo w={'250pt'} h={'250pt'} />
          <h1 className="heroText">
            <span>I SALOON</span>
          </h1>
          <p>Get Inspired with Us!</p>
        </div>
      </div>
      <img className="heroImg" src="https://www.wallpapertip.com/wmimgs/95-956819_barber.jpg" alt="" />
      <div class="custom-shape-divider-bottom-1631025712">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            stroke="#a38350"
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div
        style={{
          width: '100%',
          height: '0.5vh',
          backgroundColor: '#1f2024',
          position: 'relative',
          top: '-6.68px',
          zIndex: '80000',
        }}
      ></div>
    </div>
  );
}

export default HeroBanner;
