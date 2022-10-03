import React from 'react'
import "./navbar.css"
import Vogue from "../../content/vogue.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import useMediaQuery from '@mui/material/useMediaQuery';
import Hamburger from './hamburger';

function Navbar() {
  const matches = useMediaQuery('(max-width:800px)');
  // console.log(matches)
  return (
    <>
    {matches === true
    ?
    <Hamburger/>
    :
    <div className='container'>
        <div className='semiContainer'>
        <img style={{
          marginTop:"10px"
        }} height={100} src={Vogue} alt="vogue wood , furniture site, pakistani furniture , pakistan furniture market , vogue wood furniture"/>
        <div className='menu'>
            <div className='menuOptions'>
            <a style={{
                color: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
            }} className='a' href="/">HOME</a>
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
  }
  </>
  )
}

export default Navbar