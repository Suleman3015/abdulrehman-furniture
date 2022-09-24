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
        <img src={Vogue} alt="vogue wood , furniture site, pakistani furniture , pakistan furniture market , vogue wood furniture"/>
        <div className='menu'>
            <div className='menuOptions'>
            <a className='a' href="/">HOME</a>
            <a className='a' href="/">CATEGORIES</a>
            <a className='a' href="/">ABOUT</a>
            <a className='a' href="/">CONTACT US</a>
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