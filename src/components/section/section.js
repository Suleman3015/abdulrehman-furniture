import React, { useEffect } from "react";
import Fur from "../../content/fur.png";
import { Typography } from "@mui/material";
import "./section.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import Aos from "aos";
import "aos/dist/aos.css";

function Section() {
  const matches = useMediaQuery("(max-width:800px)");
  const matchesMini = useMediaQuery("(max-width:600px)")
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div  className="mainSection">
      <div className="semiMain">
        <img
          data-aos="fade-right"
          height={matches === true ? 300 : 600}
          src={Fur}
          alt="vogue wood"
        />
        <div data-aos="fade-up" className="typoSection">
          <Typography
            style={{
              fontSize: matches === true ? "5vw" : "2vw",
              // marginBottom:"10px",
              fontWeight: "600",
              fontFamily:"'Alegreya SC', serif",
              margin: "auto auto 10px auto",
              
              lineHeight: "45px",
              textAlign: "center",
              textShadow: "0 1px 1px #fff",
              paddingTop: matchesMini === true ?"2px" : "20px",
            }}
          >
            The VogueWood
          </Typography>
          <p className="para">
            Order the best furniture online in Pakistan. The VogueWood
            manufactures the classic highest-quality,luxurious and modern
            furniture for a unique touch of class and elegance to home
            interiors. Ranging from your bedroom to the kitchen, products from
            various furniture categories are available
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section;
