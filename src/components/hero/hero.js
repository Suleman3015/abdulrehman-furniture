
import HeroSlider, { Slide, Overlay } from "hero-slider";
import hero from "../../content/hero/pexx.jpg";
import hero2 from "../../content/hero/pex2.jpg";
import hero3 from "../../content/hero/pex3.jpg";
import hero4 from "../../content/hero/pex4.jpg";
import Wrapper from "./wrapper";
import Title from "./title";
import Subtitle from "./subtitle";

function Hero() {
  return (
    <HeroSlider
      height="100vh"
      accessability={{
        shouldDisplayButtons: false,
        orientation: "vertical",
      }}
      autoplay
      controller={{
        slidingDuration: 400,
        slidingDelay: 50,
      }}
      style={{
        position: "sticky",
        marginBottom: "40px",
      }}
    >
      <Overlay>
        <Wrapper>
          <Title>The Vogue Wood</Title>
          <Subtitle>We Are Artist</Subtitle>
        </Wrapper>
      </Overlay>

      <Slide
        shouldRenderMask
        label="Giau Pass - Italy"
        background={{
          backgroundImageSrc: hero3,
        }}
      />
      <Slide
        shouldRenderMask
        label="County Clare - Ireland"
        background={{
          backgroundImageSrc: hero2,
        }}
      />
      <Slide
        shouldRenderMask
        label="Bogliasco - Italy"
        background={{
          backgroundImageSrc: hero4,
        }}
      />

      <Slide
        shouldRenderMask
        label="Crater Rock, OR - United States"
        background={{
          backgroundImageSrc: hero,
        }}
      />
      {/* <Nav /> */}
    </HeroSlider>
  );
}

export default Hero;
