import React from 'react'
import Fur from "../../content/fur.png"
import { Typography } from "@mui/material"
import "./section.css"
import useMediaQuery from '@mui/material/useMediaQuery';

function Section() {
    const matches = useMediaQuery('(max-width:800px)');
    return (
    <div style={{
    }} className='mainSection'>
        <div className='semiMain'>
            <img height={matches === true ? 300 : 600} src={Fur}/>
            <div className='typoSection'>
                <Typography
                    style={{
                        fontSize: matches === true ? "5vw" : "2vw" ,
                        // marginBottom:"10px",
                        fontWeight:"600",
                        margin:"auto auto 10px auto"
                      }} 
                >
                    Hello Furniture
                </Typography>
                <p>Explore, search and find the best fitting icons or vectors for your projects using wide variety vector library. Download free SVG Vectors for commercial use.</p>

            </div>
        </div>
    </div>
  )
}

export default Section