import React, { useEffect } from "react";
import Fur from "../../content/New/chair.jpg"
import { Typography } from "@mui/material";
import "./section.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import Aos from "aos";
import "aos/dist/aos.css";
import {ParallaxProvider ,ParallaxBanner} from 'react-scroll-parallax';


function Section() {
  const matches = useMediaQuery("(max-width:800px)");
  const matchesMini = useMediaQuery("(max-width:600px)")
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div style={{
      marginTop:"100px"
    }}>
    <ParallaxProvider>
    <ParallaxBanner  layers={[{ image: Fur, speed: matchesMini=== true ? 5 : 15},
    
  
  ]}
      >
    <div  className="mainSection">
      <div className="semiMain">
        <div data-aos="fade" className="typoSection">
          <Typography
            style={{
              fontSize: matches === true ? "5vw" : "3vw",
              // marginBottom:"10px",
              fontWeight: "600",
              fontFamily:"'Alegreya SC', serif",
              margin: "auto auto auto auto",
              color:"white",
              // lineHeight: "45px",
              textAlign: "center",
              // textShadow: "0 1px 1px #fff",
              paddingTop: matchesMini === true ?"2px" : "20px",
            }}
          >
            The Vogue Wood
          </Typography>
          <p className="para">
            Order the best furniture online in Pakistan. The Vogue Wood
            manufactures the classic highest-quality,luxurious and modern
            furniture for a unique touch of class and elegance to home
            interiors. Ranging from your bedroom to the kitchen, products from
            various furniture categories are available
          </p>
        </div>
      </div>
    </div>
    </ParallaxBanner>
    </ParallaxProvider>
    </div>
  );
}

export default Section;
