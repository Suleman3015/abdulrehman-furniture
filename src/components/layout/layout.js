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
        <img style={{marginRight:"2vw"}} height={matches === true ? 40 : 80} src={Whatsapp} />
        </div>
        {/* <Whatsapp/> */}
    </div>
  )
}

export default Layout