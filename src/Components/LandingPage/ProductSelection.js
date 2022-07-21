import { Category, CatHeader, ProductGallery } from "./ProductStyling";
import { Demo } from "../../assets/DemoStock";
import ProductCard from "../UI/Card";

const ProductSelection = () => {

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

  const popularStock = Demo.images.filter(image => image.state === "popular").map(image => generateCard(image));

  const bestDealStock =  Demo.images.filter(image => image.state === "best").map(image => generateCard(image));

  const newDealStock =  Demo.images.filter(image => image.state === "new").map(image => generateCard(image));

  return (
    <ProductGallery>
      <CatHeader>New Arrivals</CatHeader>
      <Category>{newDealStock}</Category>
      <CatHeader>Most Popular</CatHeader>
      <Category>{popularStock}</Category>
      <CatHeader>Best Deals</CatHeader>
      <Category>{bestDealStock}</Category>
    </ProductGallery>
  );
};

export default ProductSelection;
