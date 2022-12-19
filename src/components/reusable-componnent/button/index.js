import React from 'react'
import "./index.css"

function Button({Text,Wid,Href}) {
  return (
    <>
  <button
  Href={Href}
  style={{
    width:`${Wid}`
  }} className="productButton"> {Text}</button>
    </>
  )
}

export default Button