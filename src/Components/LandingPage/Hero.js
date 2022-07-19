import {
  HeroBG,
  HeroText,
  Shop,
  SLink,
} from "./HeroStyles";

const Hero = () => {
  return (
    <>
      <HeroBG></HeroBG>
      <HeroText>
        <h1>Nike React Vision</h1>
        <SLink to="/productpage">
          <Shop>Shop Now</Shop>
        </SLink>
      </HeroText>
    </>
  );
};

export default Hero;
