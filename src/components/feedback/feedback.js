import React,{useEffect} from "react";
import { Typography } from "@mui/material";
import "./feedback.css";
import Rating from "@mui/material/Rating";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import Aos from "aos";
import "aos/dist/aos.css";

function Feedback() {
  const matches = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div  className="feedbackMain">
   
      <div className="feedbackSemiMain">
      <Typography
      data-aos="fade-up"
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
        Customer Reviewes
      </Typography>
        <Carousel responsive={responsive}>
          <div data-aos="fade-up" className="feedback">
            <Typography
              style={{
                fontSize: matches === true ? "15px" : "20px",
                fontWeight: "normal",
                lineHeight: "25px",
                marginLeft:"7px",
                background: "#66471d",
                width:"fit-content",
                padding:"5px",
                borderRadius:"4px",
                color:"white",
                fontFamily:"'Alegreya SC', serif",
                // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
              
              }}
            >
              
              Daniyal , 
            </Typography>
            <blockquote
              className="quote"
              cite="https://www.huxley.net/bnw/four.html"
            >
              <p className="feedbackTypo">
              Our experience with Vogue Wood's furniture is very fabulous, especially the quality of furniture wood and its polish finishing is very good
              </p>
            </blockquote>
            <Rating name="read-only" value={5} readOnly />
          </div>

          <div className="feedback">
            <Typography
              style={{
                fontSize: matches === true ? "15px" : "20px",
                fontWeight: "normal",
                lineHeight: "25px",
                marginLeft:"7px",
                background: "#66471d",
                width:"fit-content",
                padding:"5px",
                borderRadius:"4px",
                color:"white",
                fontFamily:"'Alegreya SC', serif",
                // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
              }}
            >
              {" "}
              Suleman ahmed ,
            </Typography>
            <blockquote
              className="quote"
              cite="https://www.huxley.net/bnw/four.html"
            >
              <p className="feedbackTypo">
                We have been purchasing furniture from VogueWood since the last
                10 years. We appreciate their prompt service and so far we have
                faced no complaints with their furniture.
              </p>
            </blockquote>
            <Rating name="read-only" value={4} readOnly />
          </div>

          <div className="feedback">
            <Typography
              style={{
                fontSize: matches === true ? "15px" : "20px",
                fontWeight: "normal",
                lineHeight: "25px",
                marginLeft:"7px",
                background: "#66471d",
                width:"fit-content",
                padding:"5px",
                borderRadius:"4px",
                color:"white",
                fontFamily:"'Alegreya SC', serif",
                // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
              }}
            >
              {" "}
              Abdul Rehman ,
            </Typography>
            <blockquote
              className="quote"
              cite="https://www.huxley.net/bnw/four.html"
            >
              <p className="feedbackTypo">
                We have been purchasing furniture from VogueWood since the last
                10 years. We appreciate their prompt service and so far we have
                faced no complaints with their furniture.
              </p>
            </blockquote>
            <Rating name="read-only" value={4} readOnly />
          </div>

          <div className="feedback">
            <Typography
              style={{
                fontSize: matches === true ? "15px" : "20px",
                fontWeight: "normal",
                lineHeight: "25px",
                marginLeft:"7px",
                background: "#66471d",
                width:"fit-content",
                padding:"5px",
                borderRadius:"4px",
                color:"white",
                fontFamily:"'Alegreya SC', serif",
                // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
              }}
            >
              {" "}
              Waleed Fahmid ,
            </Typography>
            <blockquote
              className="quote"
              cite="https://www.huxley.net/bnw/four.html"
            >
              <p className="feedbackTypo">
                We have been purchasing furniture from VogueWood since the last
                10 years. We appreciate their prompt service and so far we have
                faced no complaints with their furniture.
              </p>
            </blockquote>
            <Rating name="read-only" value={5} readOnly />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Feedback;
