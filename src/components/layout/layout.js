import React from 'react'
import Navbar from "../navbar/navbar"
import Whatsapp from "../../content/whatsapp.svg"
import "./layout.css"
import useMediaQuery from '@mui/material/useMediaQuery';

function Layout({children}) {
 

  const matches = useMediaQuery('(max-width:500px)');
  return (
    <div>
        <Navbar/>
        {children}
        <div className='svg'>
        <img alt="vogue wood"  style={{marginRight: matches === true ? "3vw" :"1vw"}} height={matches === true ? 40 : 50} src={Whatsapp} />
        </div>
        {/* <Whatsapp/> */}
    </div>
  )
}

export default Layout