import { NLink } from "../Nav/NavStyles";
import {
  HeroBG,
  HeroText,
  Shop,
} from "./HeroStyles";

const Hero = () => {
  return (
    <>
      <HeroBG></HeroBG>
      <HeroText>
        <h1>Nike React Vision</h1>
        <NLink to="/productpage">
          <Shop>Shop Now</Shop>
        </NLink>
      </HeroText>
    </>
  );
};

export default Hero;
