import { Typography } from '@mui/material'
import React from 'react'
import "./footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import useMediaQuery from '@mui/material/useMediaQuery';

function Footer() {
    const matches = useMediaQuery('(max-width:800px)');
  return (
<div className='mainFooter'>
    <div className='semiMainFooter'>
        <div className='footerContainer'>
            <Typography style={{
                 fontFamily:"'Alegreya SC', serif",
                 fontSize: matches === true ?"18px" : "22px",
                 fontWeight:"bold",
                 letterSpacing:"0.5px",
                 color:"white"

            }}>Vogue Wood</Typography>
            <a href="/" className='footerA'>923208218168</a>
            <a   href="/"  className='footerA'>suleman.ahmed0730@gmail.com</a>
        </div>
        <div className='footerContainer'>
            <Typography style={{
                 fontFamily:"'Alegreya SC', serif",
                 fontSize: matches === true ?"18px" : "22px",
                 fontWeight:"bold",
                 letterSpacing:"0.5px"

            }} >Company</Typography>
            <a  href="/"   className='footerA'>About Us</a>
            <a  href="/"  className='footerA'>Contact Us</a>
            <a  href="/"  className='footerA'>Categories</a>
        </div>
        <div className='footerContainerSocial'>
            <Typography style={{
                 fontFamily:"'Alegreya SC', serif",
                 fontSize: matches === true ?"18px" : "22px",
                 fontWeight:"bold",
                 letterSpacing:"0.5px"

            }}>Follow Us</Typography>
            <div className='footerIcon'>
                <FacebookIcon className="footerSocial"/>
                <InstagramIcon className="footerSocial"/>
                <YouTubeIcon className="footerSocial"/>
            </div>
        </div>
        {/* <div className='footerContainer'></div> */}
    </div>
    <Typography className="copyright">© 2022 Vogue Wood</Typography>
</div>
  )
}

export default Footer