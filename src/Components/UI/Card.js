import {Card, Img, Name, Type, Price} from "./CardStyling";

const ProductCard = (prop) => {
 
    return <Card>
      <Img src={prop.src} alt={prop.caption}></Img>
      <Name>{prop.name}</Name>
      <Type>{prop.type}</Type>
      <Price>{`£${prop.price}`}</Price>
    </Card>
};

export default ProductCard;