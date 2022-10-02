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
      <Typography
      data-aos="fade-up"
      data-aos-duration="1000"
        style={{

          // marginBottom:"10px",
          fontSize: matches === true ? "5vw" : "2vw",
          // marginBottom:"10px",
          fontWeight: "600",
          fontFamily:"monospace",
          margin: "auto auto 10px auto",
          textAlign: "center",
        }}
      >
        CUSTOMER REVIEWES
      </Typography>
      <div className="feedbackSemiMain">
        <Carousel responsive={responsive}>
          <div data-aos="fade-left" className="feedback">
            <Typography
              style={{
                fontSize: matches === true ? "20px" : "30px",
                fontWeight: "normal",
                lineHeight: "45px",
                // textShadow: "0 1px 1px #fff",
                // fontFamily: "Quicksand, sans-serif",
                background:"gray",
                width:"fit-content",
                padding:"5px",
                borderRadius:"4px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
              }}
            >
              
              Rao Ali
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

          <div className="feedback">
            <Typography
              style={{
                fontSize: matches === true ? "20px" : "30px",
                fontWeight: "normal",
                lineHeight: "45px",
                // textShadow: "0 1px 1px #fff",
                // fontFamily: "Quicksand, sans-serif",
                background:"gray",
                width:"fit-content",
                padding:"5px",
                borderRadius:"4px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
              }}
            >
              {" "}
              Suleman ahmed
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
                fontSize: matches === true ? "20px" : "30px",
                fontWeight: "normal",
                lineHeight: "45px",
                // textShadow: "0 1px 1px #fff",
                // fontFamily: "Quicksand, sans-serif",
                background:"gray",
                width:"fit-content",
                padding:"5px",
                borderRadius:"4px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
              }}
            >
              {" "}
              Abdul Rehman
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
                fontSize: matches === true ? "20px" : "30px",
                fontWeight: "normal",
                lineHeight: "45px",
                // textShadow: "0 1px 1px #fff",
                // fontFamily: "Quicksand, sans-serif",
                background:"gray",
                width:"fit-content",
                padding:"5px",
                borderRadius:"4px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
              }}
            >
              {" "}
              Waleed Fahmid
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
