import Carousel from "./Carousel";
import {
  BreadCrumb,
  Buy,
  Product,
  ProductDetail,
  ProductRow,
  ProductWindow,
  ProductInfo,
  Rating,
  Reviews,
  Btn,
} from "./ProductPageStyling";
import Sizes from "./Sizes";
import Suppliers from "./Supplier";
import { BsFillStarFill, BsStarHalf } from "react-icons/bs";
import Review from "./Review";
import ProductDetails from "./ProductDetails";
import { useState, useEffect } from "react";
import { Demo } from "../../assets/DemoStock";
import ProductCard from "../UI/Card";

const ProductPage = () => {
  const [suggested, setSuggested] = useState([]);

  useEffect(() => {
    let suggestArr = [];

    if (Demo.images) {
      Demo.images.map((image) => {
        if (image.state === "suggest") {
          return suggestArr.push(image);
        }
      });
    }
    setSuggested(suggestArr);
  }, [Demo.images]);

  const addToCart = (
    <Buy>
      <Btn>Add to Cart</Btn>
    </Buy>
  );

  const generateCard = (product) => {
    return (
      <ProductCard
        src={product.src}
        caption={product.caption}
        name={product.name}
        type={product.type}
        price={product.price}
      />
    );
  };

  const suggestedStock = suggested.map((item) => {
    return generateCard(item);
  });
  return (
    <Product>
      <BreadCrumb>
        <p>Shoes</p>
        <p>/</p>
        <p>Nike</p>
        <p>/</p>
        <p>React Vision</p>
        <p>/</p>
        <p>DH4439-102</p>
      </BreadCrumb>
      <ProductDetail>
        <h1>Nike React Vision</h1>
        <p>DH4439-102</p>
      </ProductDetail>
      <ProductWindow>
        <ProductRow>
          <Carousel />
          <Sizes />
        </ProductRow>
        <ProductRow>
          <ProductInfo>
            <p>
              From the D/MS/X collection comes a story of surreal comfort.
              Layered textures, intricate lines and vivid colours combine in a
              design influenced by the exaggerated world of our dreams. The
              React foam and an ultra-plush tongue provide dreamlike comfort.
              Step into your dream—the Nike React Vision.
            </p>
            <p>Colors: Wolf Grey / Cool Grey / Pink Prime / Black</p>
          </ProductInfo>
          <Suppliers />
        </ProductRow>
        <ProductRow>{addToCart}</ProductRow>
        <ProductRow>
          <ProductDetails />
        </ProductRow>
        <ProductRow>
          <Reviews>
            <Rating>
              <p>
                <BsFillStarFill />
              </p>
              <p>
                <BsFillStarFill />
              </p>
              <p>
                <BsFillStarFill />
              </p>
              <p>
                <BsFillStarFill />
              </p>
              <p>
                <BsStarHalf />
              </p>
              <p>/</p>
              <p>62 Reviews</p>
            </Rating>
            <Review />
          </Reviews>
        </ProductRow>
      </ProductWindow>
      <ProductWindow>
        <h1>You Might Also Like</h1>
        <div style={{ display: "flex" }}>{suggestedStock}</div>
      </ProductWindow>
    </Product>
  );
};

export default ProductPage;
