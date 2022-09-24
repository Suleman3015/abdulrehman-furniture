import React from 'react'
import "./navbar.css"
import Vogue from "../../content/vogue.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


function Navbar() {
  return (
    <div className='container'>
        <div className='semiContainer'>
        <img src={Vogue} />
        <div className='menu'>
            <div className='menuOptions'>
            <a>HOME</a>
            <a>CATEGORIES</a>
            <a>ABOUT</a>
            <a>CONTACT US</a>
            </div>
            <div className='icons'>
                <FacebookIcon/>
                <InstagramIcon/>
                <YouTubeIcon/>
            </div>
        </div>
        
        </div>
    </div>
  )
}

export default Navbar