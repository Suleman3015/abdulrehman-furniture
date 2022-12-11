import React from 'react'
import "./navbar.css"
import Vogue from "../../content/vogue.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import useMediaQuery from '@mui/material/useMediaQuery';
import Hamburger from './hamburger';
import {
 
  Link 
} from "react-router-dom";

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
          marginTop:"10px",
          marginLeft:"20px"
        }} height={90} src={Vogue} alt="vogue wood , furniture site, pakistani furniture , pakistan furniture market , vogue wood furniture"/>
        <div className='menu'>
            <div className='menuOptions'>
            <Link className='a' to="/">HOME</Link>
          
            <Link className="a" to="/categories" >
            CATEGORIES
            </Link >
           <Link className="a" to="/items" >
            ITEMS
            </Link >
            <Link className="a" to="/product" >
            PRODUCT
            </Link > 
          
            <Link className='a' to="/">ABOUT</Link>
            <Link exact className='a' to="/contact">CONTACT US</Link>
            </div>
        </div>
        
        <div className='icons'>
           
           <a style={{
            color:"black"
           }} href="https://m.facebook.com/Thevoguewood/">
                <FacebookIcon />
                </a>
            
            <a style={{
            color:"black"
           }}  href="https://instagram.com/vogue_.wood?r=nametag">
                <InstagramIcon />
                </a>
                

               
                <YouTubeIcon/>
                {/* <a href="tel:0343220625">
                <LocalPhoneIcon/>
                </a> */}
               
              
            </div>
        
        </div>
    </div>
  }
  </>
  )
}

export default Navbar