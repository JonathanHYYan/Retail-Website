import { Suggested, SuggestWindow } from "./SuggestSectionStyling";
import ProductCard from "../UI/Card";
import { Demo } from "../../assets/DemoStock";
import { useEffect, useState } from "react";

const SuggestSection = () => {
  const [suggested, setSuggested] = useState([]);

  useEffect(() => {
    if (!Demo.images) return;

    let suggestArr = [];

    Demo.images.map((image) => {
      if (image.state === "suggest") {
        return suggestArr.push(image);
      } 
    });
    
    setSuggested(suggestArr);
  },[]);

  const generateCard = (product) => {
    return (
      <ProductCard
        src={product.src}
        caption={product.caption}
        name={product.name}
        type={product.type}
        price={product.price}
        key={product.id}
      />
    );
  };

  const suggestedStock = suggested.map((item) => {
    return generateCard(item);
  });

  return(
  <SuggestWindow>
    <h1>You Might Also Like</h1>
    <Suggested>{suggestedStock}</Suggested>
  </SuggestWindow>
  )
};

export default SuggestSection;
