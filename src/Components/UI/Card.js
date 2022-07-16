import { Card, Img, Name, Type, Price } from "./CardStyling";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const ProductCard = (prop) => {
  return (
    <Card>
      <ScrollToTop/>
      <Link to="/productpage">
        <Img src={prop.src} alt={prop.caption}></Img>
        <Name>{prop.name}</Name>
        <Type>{prop.type}</Type>
        <Price>{`£${prop.price}`}</Price>
      </Link>
    </Card>
  );
};

export default ProductCard;
