import React from "react";
import { Typography } from "@mui/material";
import "./feedback.css";
import Rating from "@mui/material/Rating";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import "aos/dist/aos.css";
import {ParallaxProvider ,ParallaxBanner} from 'react-scroll-parallax';
import Fur from "../../content/hero66.jpg"
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
        <ParallaxProvider>
    <ParallaxBanner  layers={[{ image: Fur, speed: 8}]}
  className="aspect-[2/2]"
      >


   
      <div className="feedbackSemiMain">
      <Typography
      data-aos-duration="1000"
        style={{

          // marginBottom:"10px",
          fontSize: matches === true ? "5vw" : "28px" ,
          letterSpacing:"1px",
          // marginBottom:"10px",
          fontWeight: "600",
          fontFamily:"'Alegreya SC', serif",
          // margin: "10 10px 10px auto",

          textAlign: "center",
          // color:"rgb(54, 69, 79)"
        }}
      >
        Customer Satisfaction
        
      </Typography>
       
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
                      fontWeight:"bold"
                    
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
