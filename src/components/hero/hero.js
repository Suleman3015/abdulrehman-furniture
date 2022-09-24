import HeroSlider, { Slide, ButtonsNav, Nav, Overlay } from 'hero-slider';
import hero1 from "../../content/hero1.jpg"
import hero2 from "../../content/hero2.jpg"
import hero3 from "../../content/hero3.jpg"
import hero4 from "../../content/hero4.jpg"
import Wrapper from './wrapper';
import Title from './title';
import Subtitle from './subtitle';

 function Hero() {
  return (
    <HeroSlider style={{
        position:"sticky"
    }}>
      <Overlay>
        <Wrapper>
          <Title>The Vogue Wood</Title>
          <Subtitle>
            We Are Artist
          </Subtitle>
        </Wrapper>
      </Overlay>

      <Slide
        label="Hallstatt - Austria"
        background={{
          backgroundImage: hero1,
          backgroundAnimation: 'zoom'
        }}
      />

      <Slide
        label="Hvitserkur - Iceland"
        background={{
          backgroundImage: hero2,
          backgroundAnimation: 'zoom'
        }}
      />

      <Slide
        label="Jacksonville - USA"
        background={{
          backgroundImage: hero3,
          backgroundAnimation: 'zoom'
        }}
      />

      <Slide
        label="Moraine Lake - Canada"
        background={{
          backgroundImage: hero4,
          backgroundAnimation: 'zoom'
        }}
      />

      {/* <ButtonsNav
        isNullAfterThreshold
        position={{
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      />
      <Nav /> */}
    </HeroSlider>
  );
}

export default Hero;