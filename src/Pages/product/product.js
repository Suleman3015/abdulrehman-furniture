import React from "react";
import HeroSlider, { Slide, Nav } from "hero-slider";
import "./product.css";
import hero1 from "../../content/hero1.jpg";
import hero2 from "../../content/hero2.jpg";
import hero5 from "../../content/hero33.jpg";
import hero3 from "../../content/hero3.jpg";
import hero4 from "../../content/hero4.jpg";
import Rating from "@mui/material/Rating";

function Product() {
  return (
    <div className="productDetail">
      <div className="productDetailSlider">
        {/* for slider */}
        <HeroSlider
          height="70vh"
          //   accessability={{
          //     shouldDisplayButtons: false,
          //     orientation: "vertical",
          //   }}
          //   autoplay
          controller={{
            initialSlide: 1,
            slidingDuration: 500,
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
          <Subtitle>We Are Artist</Subtitle>
        </Wrapper>
      </Overlay> */}

          <Slide
            shouldRenderMask
            label="Hallstatt - Austria"
            background={{
              backgroundImage: hero1,
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
              backgroundImage: hero5,
              // backgroundAnimation: 'zoom'
            }}
          />

          <Slide
            // shouldRenderMask
            label="Jacksonville - USA"
            background={{
              backgroundImage: hero3,
              // backgroundAnimation: 'zoom'
            }}
          />

          <Slide
            // shouldRenderMask
            label="Moraine Lake - Canada"
            background={{
              backgroundImage: hero4,
              // backgroundAnimation: 'zoom'
            }}
          />

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
        {/* <div> */}
        <div className="productPrice">
          <p className="cutPrice">
            <s>45,000 Rs</s>
          </p>{" "}
          <p className="priceText">30,000 Rs</p>
        </div>
        <Rating
          style={{ marginTop: "10px" }}
          name="read-only"
          value={5}
          readOnly
        />
        {/* </div> */}
      </div>
    </div>
  );
}

export default Product;
