import { useState } from "react";
import { DetailBox, Details } from "./ProductDetailsStyling";

const ProductDetails = () => {
  const [detailDrop, setDetailDrop] = useState(false);

  const dropHandler = (event) => {
    setDetailDrop(!detailDrop);
  };

  const productDetails = (
    <DetailBox>
      <h2>Sport and Airy</h2>
      <p>Micro-detailing, exaggerated proportions and multi-textured aesthetic give this shoe a unique appearance. The airy upper features all-over mesh.</p>
      <h2>Sport and Airy</h2>
      <p>Micro-detailing, exaggerated proportions and multi-textured aesthetic give this shoe a unique appearance. The airy upper features all-over mesh.</p>
      <h2>Surreal Comfort</h2>
      <p>The Nike React foam midsole with soft rubber detailing delivers unrivalled, all-day comfort. The ultra-plush tongue provides additional cushioning.</p>
      <h2>Heritage Style Refreshed</h2>
      <p>The TPU heel clip creates a sporty look, refreshes your heritage styling and adds stability.</p>
      <h2>Product Details</h2>
      <ul>
        <li>The padded, low-cut collar looks sleek and feels great</li>
        <li>Pull tabs at heel and tongue for easy on and off</li>
        <li>Colour Shown: Wolf Grey/Cool Grey/Pink Prime/Black</li>
        <li>Style: CI7523-009</li>
      </ul>
      <h2>D/MS/X</h2>
      <p>Dimension Six didn't make the cut when the OG commanders were renaming Blue Ribbon Sports, but it's now become more than a misfit on the 'no' list. D/MS/X represents the outlier, blending culture and sportswear for a subversive take on high fashion that's made for the streets.</p>
    </DetailBox>
  );

  return (
    <Details onClick={dropHandler}>
      <h1>View Product Details</h1>
      {detailDrop && productDetails}
    </Details>
  );
};

export default ProductDetails;