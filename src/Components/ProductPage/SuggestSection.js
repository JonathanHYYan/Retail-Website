import { Suggested, SuggestWindow } from "./SuggestSectionStyling";
import ProductCard from "../UI/Card";
import { Demo } from "../../assets/DemoStock";

const SuggestSection = () => {

  const suggestedStock = () => Demo.images.filter(image => image.state === "suggest").map((product) => (
      <ProductCard
        src={product.src}
        caption={product.caption}
        name={product.name}
        type={product.type}
        price={product.price}
        key={product.id}
      />
    )
  );

  return(
  <SuggestWindow>
    <h1>You Might Also Like</h1>
    <Suggested>{suggestedStock()}</Suggested>
  </SuggestWindow>
  )
};

export default SuggestSection;
