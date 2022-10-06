import React from 'react'
import Navbar from "../navbar/navbar"
import Whatsapp from "../../content/whatsapp.svg"
import "./layout.css"
import useMediaQuery from '@mui/material/useMediaQuery';
import Footer from '../Footer/footer';

function Layout({children}) {


  const matches = useMediaQuery('(max-width:500px)');
  return (
    <div>
        <Navbar/>
        {children}
        <div  className='svg'>
          
       
        <img alt="vogue wood"  style={{marginRight: matches === true ? "3vw" :"0.5vw",cursor:"pointer"}} height={matches === true ? 40 : 60} src={Whatsapp} />
   
        </div>
        
        <Footer/>
        {/* <Whatsapp/> */}
    </div>
  )
}

export default Layout