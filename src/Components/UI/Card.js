import { Card, Img, Name, Type, Price } from "./CardStyling";
import ScrollToTop from "./ScrollToTop";
import { LLink } from "../Nav/NavStyles";

const ProductCard = (prop) => {
  return (
    <Card>
      <ScrollToTop/>
      <LLink to="/productpage">
        <Img src={prop.src} alt={prop.caption}></Img>
        <Name>{prop.name}</Name>
        <Type>{prop.type}</Type>
        <Price>{`£${prop.price}`}</Price>
      </LLink>
    </Card>
  );
};

export default ProductCard;
