import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import "./topProducts.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Aos from "aos";
import useMediaQuery from "@mui/material/useMediaQuery";
import { TopProductsLists } from "../../static/topProducts.static";
import "aos/dist/aos.css";

function TopProducts({ boxColor, title, background, pex, align }) {
  const matches = useMediaQuery("(max-width:550px)");
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 2300 },
      items: 5,
    },
    smalldesktop: {
      breakpoint: { max: 1400, min: 1024 },
      items: 2.5,
    },
    desktop: {
      breakpoint: { max: 2300, min: 1400 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 1024 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="topProductsMain">
      {matches ? (
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          style={{
            letterSpacing: "1px",
            fontWeight: "bold",
            fontFamily: "'Alegreya SC', serif",
            margin: "auto auto 20px auto",
            textAlign: `${align}`,
            color: `${boxColor}`,
            // color:"rgb(54, 69, 79)"
          }}
          className="mainTypo"
        >
          {title}
        </h2>
      ) : (
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          style={{
            letterSpacing: "1px",
            fontWeight: "bold",
            fontFamily: "'Alegreya SC', serif",
            margin: "auto auto 20px auto",
            textAlign: `${align}`,
            color: `${boxColor}`,
            // color:"rgb(54, 69, 79)"
          }}
          className="mainTypo"
        >
          {title}
        </h1>
      )}

      <div
        data-aos="fade-right"
        style={{
          marginTop: "2vw",
          boxShadow: `${background}`,
        }}
        className="topProductsSemiMain"
      >
        <Carousel responsive={responsive}>
          {TopProductsLists.map((elem) => {
            return (
              <div className="productsBox">
                <img alt="voguewood" src={elem.productImg} height={200} />
                <Typography
                  style={{
                    textAlign: "center",
                    margin: "20px",
                    color: "black",
                    //  color:"rgb(54, 69, 79)",
                    fontSize: "22px",
                    fontFamily: "Libre Baskerville , serif",
                    lineHeight: "45px",
                    textShadow: "0 1px 1px #fff",
                  }}
                >
                  {elem.title}
                </Typography>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default TopProducts;
