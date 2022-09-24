import React from 'react'
import Navbar from "../navbar/navbar"

function Layout({children}) {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default Layout