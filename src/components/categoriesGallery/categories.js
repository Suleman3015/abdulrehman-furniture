import React, { useEffect } from "react";
import "./categories.css";
import { Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import Aos from "aos";
import "aos/dist/aos.css";
import { categoriesStatic } from "../../static/categories.static";

function Categories() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const matches = useMediaQuery("(max-width:600px)");

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div data-aos="fade-up" className="main">
      {matches ? (
        <h2
          style={{
            fontFamily: "'Alegreya SC', serif",
            margin: "auto auto 25px auto",
          }}
          className="mainTypo"
        >
          Procure By Categories
        </h2>
      ) : (
        <h1
          style={{
            fontFamily: "'Alegreya SC', serif",
            margin: "auto auto 25px auto",
          }}
          className="mainTypo"
        >
          Procure By Categories
        </h1>
      )}

      <Carousel responsive={responsive}>
        {categoriesStatic.map((categories) => {
          return (
            <div style={{ overflow: "hidden", height: "100%" }}>
              <div className="boxes">
                <Typography
                  style={{
                    fontSize: "25px",
                    letterSpacing: "2px",
                    fontFamily: "'Alegreya SC', serif",
                  }}
                  className="Typo"
                >
                  {" "}
                  {categories.Head}
                </Typography>
                <img alt="furniture" className="img" src={categories.img} />
              </div>
            </div>
          );
        })}
      </Carousel>
      {/* </div> */}
    </div>
  );
}

export default Categories;
