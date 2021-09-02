import React from 'react'
import './nav.css'
function NavBar() {
    return (
        <header className="ahheader" >
        <h2 className="ahlogo" ><span style={{color:"#a38350"}} >I S</span><span style={{color:"#fff"}} >loon</span></h2>
        <nav className="ahnava" >
          <ul className="aanav__link" >
            <li><a href={() => false}>Home</a></li>
            <li> <a href={() => false}>Barbers</a></li>
            <li> <a href={() => false}>About Us</a></li>
          </ul>
        </nav>
        <a className="cta" href={() => false}> <button className="AhlogOut" >Log In</button></a>
      </header>
    )
}

export default NavBar
