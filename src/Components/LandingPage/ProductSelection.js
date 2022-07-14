import {
  Card,
  Category,
  CatHeader,
  Img,
  Name,
  Price,
  ProductGallery,
  Type,
} from "./ProductStyling";
import { Demo } from "../../assets/DemoStock";
import { useEffect, useState } from "react";

const ProductSelection = () => {
  const [popStock, setPopStock] = useState([]);
  const [dealStock, setDealStock] = useState([]);
  const [newStock, setNewStock] = useState([]);

  useEffect(() => {
    let popArr = [];
    let dealArr = [];
    let newArr = [];
    if (Demo.images) {
      Demo.images.map((image) => {
        if (image.state === "popular") {
          return popArr.push(image);
        } else if (image.state === "deal") {
          return dealArr.push(image);
        } else if (image.state === "new") {
          return newArr.push(image);
        }
      });
    }
    setPopStock(popArr);
    setDealStock(dealArr);
    setNewStock(newArr);
  }, [Demo.images]);

  const generateCard = (product) => {
    return (
      <Card>
        <Img src={product.src} alt={product.caption}></Img>
        <Name>{product.name}</Name>
        <Type>{product.type}</Type>
        <Price>£120.00</Price>
      </Card>
    );
  };

  const popularStock = popStock.map((item) => {
    return generateCard(item);
  });

  const bestDealStock = dealStock.map((item) => {
    return generateCard(item);
  });

  const newDealStock = newStock.map((item) => {
    return generateCard(item);
  });

  return (
    <ProductGallery>
      <CatHeader>Most Popular</CatHeader>
      <Category>{popularStock}</Category>
      <CatHeader>Best Deals</CatHeader>
      <Category>{bestDealStock}</Category>
      <CatHeader>New Arrivals</CatHeader>
      <Category>{newDealStock}</Category>
    </ProductGallery>
  );
};

export default ProductSelection;
