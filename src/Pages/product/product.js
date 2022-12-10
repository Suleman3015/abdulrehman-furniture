import React from "react";
import HeroSlider, { Slide, Nav } from "hero-slider";
import "./product.css";

import hero from "../../content/hero/pex1.jpg";
import hero2 from "../../content/hero/pex2.jpg";
import hero3 from "../../content/hero/pex3.jpg";
import hero4 from "../../content/hero/pex4.jpg";
import Rating from "@mui/material/Rating";
import useMediaQuery from "@mui/material/useMediaQuery";

function Product() {
  const matches = useMediaQuery("(max-width:700px)");
  const matchesPro = useMediaQuery("(max-width:1000px)");
  return (
    <div className="productDetail">
      <div className="productDetailSlider">
        {/* for slider */}
        <HeroSlider
                  height={matches ? "40vh":matchesPro ? "60vh": "70vh"}
          //   accessability={{
          //     shouldDisplayButtons: false,
          //     orientation: "vertical",
          //   }}
          //   autoplay
          controller={{
            initialSlide: 1,
            slidingDuration: 300,
            slidingDelay: 100,
            onSliding: (nextSlide) =>
              console.debug("onSliding(nextSlide): ", nextSlide),
            onBeforeSliding: (previousSlide, nextSlide) =>
              console.debug(
                "onBeforeSliding(previousSlide, nextSlide): ",
                previousSlide,
                nextSlide
              ),
            onAfterSliding: (nextSlide) =>
              console.debug("onAfterSliding(nextSlide): ", nextSlide),
          }}
        >
          {/* <Overlay>
        <Wrapper>
          <Title>The Vogue Wood</Title>
          <Subtitle>We Are Artist</Subttle>
        </Wrapper>
      </Overlay> */}

          <Slide
            // shouldRenderMask
            label="Hallstatt - Austria"
            background={{
              backgroundImage: hero,
              // backgroundAnimation: 'zoom',
            }}
          />

          <Slide
            // shouldRenderMask
            label="Hvitserkur - Iceland"
            background={{
              backgroundImage: hero2,
              // backgroundAnimation: 'zoom'
            }}
          />

          <Slide
            // shouldRenderMask
            label="Moraine Lake - Canada"
            background={{
              backgroundImage: hero3,
              // backgroundAnimation: 'zoom'
            }}
          />

          <Slide
            // shouldRenderMask
            label="Jacksonville - USA"
            background={{
              backgroundImage: hero4,
              // backgroundAnimation: 'zoom'
            }}
          />

          {/* <Slide
            // shouldRenderMask
            label="Moraine Lake - Canada"
            background={{
              backgroundImage: hero4,
              // backgroundAnimation: 'zoom'
            }}
          /> */}

          {/* <ButtonsNav
        isNullAfterThreshold
        position={{
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      />*/}
          <Nav />
        </HeroSlider>
      </div>
      <div className="ProductAbout">
        {/* for detail */}
        <h2 style={{}}>EXAMPLE PRODUCT</h2>
        <div className="productArticleTag">
          <h4 style={{
            backgroundColor:"rgba(122,83,12,1)",
            color:"white",
            padding:"2px"
          }}>Article</h4>
          {" "}
          : {" "}
          <p style={{
            marginTop:"2px",
            fontWeight:"bold"
          }}>41B28</p>
        </div>
        {/* <div> */}
        <div className="productPrice">
          <p className="cutPrice">
            <s>Rs 45,000 </s>
          </p>{" "}
          <p className="priceText">Rs 30,000 </p>
        </div>
        <Rating
          style={{ marginTop: "10px" }}
          name="read-only"
          value={5}
          readOnly
        />
        <p className="productDes">
          Order the best furniture online in Pakistan. The Vogue Wood
          manufactures the classic highest-quality,luxurious and modern
          furniture for a unique touch of class and elegance to home interiors.
          Ranging from your bedroom to the kitchen, products from various
          furniture categories are available for a unique touch of class and elegance to home interiors.
          Ranging from your bedroom to the kitchen, products from various
          furniture categories are available 
        </p>

        <button className="productButton"> For Queries</button>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Product;
