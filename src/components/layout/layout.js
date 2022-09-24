import React from 'react'
import Navbar from "../navbar/navbar"

function Layout({children}) {
  return (
    <div>
        <Navbar/>
        {children}
        <h1>hello je</h1>
    </div>
  )
}

export default Layout