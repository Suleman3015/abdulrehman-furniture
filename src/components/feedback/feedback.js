import React from "react";
import { Typography } from "@mui/material";
import "./feedback.css";
import Rating from "@mui/material/Rating";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import "aos/dist/aos.css";
import {ParallaxProvider ,ParallaxBanner} from 'react-scroll-parallax';
import Fur from "../../content/timeline/feedback.jpg"
import { reviewsStatic } from "../../static/reviews.static";

function Feedback() {
  const matches = useMediaQuery("(max-width:600px)");



  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div  className="feedbackMain">
       <div className="valuelineCont">
        <div className="valueline"></div>
        <h2 className="valueh2">TAKE A LOOK</h2>
        <div className="valueline"></div>
      </div>
      {
        matches ?
        <h2
        data-aos-duration="1000"
          style={{
  
            // marginBottom:"10px",
            // fontSize: matches === true ? "6vw" : "28px" ,
            letterSpacing:"1px",
            position:"relative",
            fontWeight: "600",
            fontFamily:"'Alegreya SC', serif",
            textAlign: "center",
            marginBottom:"20px",
            marginTop:"5px"
          }}
        >
         Why People Choose Us
          
        </h2>
:
<h1
data-aos-duration="1000"
  style={{

    // marginBottom:"10px",
    // fontSize: matches === true ? "6vw" : "28px" ,
    letterSpacing:"1px",
    position:"relative",
    fontWeight: "600",
    fontFamily:"'Alegreya SC', serif",
    textAlign: "center",
    marginBottom:"20px",
    marginTop:"5px"
  }}
>
Why People Choose Us
  
</h1>
      }
          
        <ParallaxProvider>
    <ParallaxBanner  layers={[{ image: Fur, speed: 8}]}
  className="aspect-[2/2]"
      >


   
      <div className="feedbackSemiMain">
       
        <div className="feedbackBoxContainer">
           <Carousel responsive={responsive}>

            {
              reviewsStatic.map((elem)=>{
                return(

                  <div className="feedback">
       
                  <blockquote
                    className="quote"
                    cite="https://www.huxley.net/bnw/four.html"
                  >
                  
                    <p className="feedbackTypo">
                  {elem.rev}
                    </p>
          
                    <Rating name="read-only" value={elem.rating} readOnly />
                    <Typography
                    style={{
                      textAlign:"end",
                      fontSize: matches === true ? "15px" : "20px",
                      fontFamily:"'Alegreya SC', serif",
                      color:"lightgray",
                      fontWeight:"bold",
                      
                    
                    }}
                  >
                    
                    {elem.name} , 
                  </Typography>
                  </blockquote>
                
                </div>

                )

              })
            }
          </Carousel>

</div>
      </div>
      </ParallaxBanner>
      </ParallaxProvider>
    </div>
  );
}

export default Feedback;
