// import HeroSlider, { Slide, Overlay } from "hero-slider";
import HeroSlider, { Slide, Overlay} from "hero-slider";
// import hero1 from "../../content/hero1.jpg";
// import hero2 from "../../content/hero2.jpg";
// import hero5 from "../../content/hero33.jpg";
// import hero3 from "../../content/hero3.jpg";
// import Hero4 from "../../content/hero4.jpg";
import hero from "../../content/pexx.jpg"
import Wrapper from "./wrapper";
import Title from "./title";
import Subtitle from "./subtitle";

function Hero() {
  return (
    // <HeroSlider
    //   height="100vh"
    //   accessability={{
    //     shouldDisplayButtons: false,
    //     orientation: "vertical",
    //   }}
    //   autoplay
    //   controller={{
    //     slidingDuration: 600,
    //     slidingDelay:50,
    //   }}
    //   style={{
    //     position: "sticky",
    //     marginBottom: "40px",
    //   }}
    // >
    //   <Overlay>
    //     <Wrapper>
    //       <Title>The Vogue Wood</Title>
    //       <Subtitle>We Are Artist</Subtitle>
    //     </Wrapper>
    //   </Overlay>

    //   <Slide
    //     shouldRenderMask
    //     label="Hallstatt - Austria"
    //     background={{
    //       backgroundImage: hero1,
    //       // backgroundAnimation: 'zoom',
    //     }}
    //   />

    //   <Slide
    //     shouldRenderMask
    //     label="Hvitserkur - Iceland"
    //     background={{
    //       backgroundImage: hero2,
    //       // backgroundAnimation: 'zoom'
    //     }}
    //   />

    //   <Slide
    //     shouldRenderMask
    //     label="Moraine Lake - Canada"
    //     background={{
    //       backgroundImage: hero5,
    //       // backgroundAnimation: 'zoom'
    //     }}
    //   />

    //   <Slide
    //     shouldRenderMask
    //     label="Jacksonville - USA"
    //     background={{
    //       backgroundImage: hero3,
    //       // backgroundAnimation: 'zoom'
    //     }}
    //   />

    //   <Slide
    //     shouldRenderMask
    //     label="Moraine Lake - Canada"
    //     background={{
    //       backgroundImage: hero4,
    //       // backgroundAnimation: 'zoom'
    //     }}
    //   />

    // </HeroSlider>
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
          backgroundImageSrc: hero,
        }}
      />

      <Slide
        shouldRenderMask
        label="Bogliasco - Italy"
        background={{
          backgroundImageSrc: hero,
        }}
      />

      <Slide
        shouldRenderMask
        label="County Clare - Ireland"
        background={{
          backgroundImageSrc: hero,
        }}
      />

      <Slide
        shouldRenderMask
        label="Crater Rock, OR - United States"
        background={{
          backgroundImageSrc: hero,
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
