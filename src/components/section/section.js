import React, { useEffect } from "react";
import Fur from "../../content/fur.png";
import { Typography } from "@mui/material";
import "./section.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import Aos from "aos";
import "aos/dist/aos.css";

function Section() {
  const matches = useMediaQuery("(max-width:800px)");
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div data-aos="zoom-in-up" style={{}} className="mainSection">
      <div className="semiMain">
        <img
          data-aos="fade-right"
          height={matches === true ? 300 : 600}
          src={Fur}
          alt="vogue wood"
        />
        <div data-aos="fade-left" className="typoSection">
          <Typography
            style={{
              fontSize: matches === true ? "5vw" : "2vw",
              // marginBottom:"10px",
              fontWeight: "600",
              margin: "auto auto 10px auto",
              fontFamily: "Libre Baskerville,serif",
              lineHeight: "45px",
              textAlign: "center",
              textShadow: "0 1px 1px #fff",
              paddingTop: "20px",
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
