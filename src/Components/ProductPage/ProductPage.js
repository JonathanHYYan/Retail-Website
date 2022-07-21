import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import {
  BreadCrumb,
  Product,
  ProductDetail,
  ProductRow,
  ProductSection,
  CaroselRow,
} from "./ProductPageStyling";
import Sizes from "./Sizes";
import Suppliers from "./Supplier";
import Review from "./Review";
import SuggestSection from "./SuggestSection";
import InfoSection from "./ProductInfo";

const vendors = ["Lifestyle", "footasylum", "Nike"];

const ProductPage = () => {
  const [productData, setProductData] = useState([]);
  const [availableSizes, setAvailableSizes] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [lowestPrices, setLowestPrices] = useState([]);
  const [sizesByRetail, setSizesByRetail] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (productData.length) {
      parseSizes(productData);
      parsePrices(productData);
    }
  }, [productData]);

  const getData = async () => {
    const promises = vendors.map((vendor) => {
      const response = fetch(`http://0b69-45-132-108-35.eu.ngrok.io/${vendor}`);
      return response;
    });
    const responses = await Promise.all(promises);
    const values = await Promise.all(
      responses.map((response) => response.json())
    );
    const products = values.map((object, index) => Object.values(object)[0]);

    setProductData(products);
  };

  const parseSizes = (data) => {
    const dataSizes = data.map((object) => Object.values(object.Sizes));
    const joinData = dataSizes.map((element) => element.join());
    const mergeSizes = joinData.map((element) => element.split(/[, ]+/));
    const concatSizes = mergeSizes.map((element) => element.filter(Boolean));
    setSizesByRetail(concatSizes);
    const filterSizes = concatSizes.map((element) => [...new Set(element)]);
    const splitTotalSizes = eval(`[${filterSizes.join()}]`);
    const filterTotalSizes = [...new Set(splitTotalSizes)];
    const sortSizes = filterTotalSizes.sort();

    setAvailableSizes(sortSizes);
  };

  const parsePrices = (data) => {
    const dataPrices = data.map((object) => Object.values(object.Price));
    const lowestPrices = dataPrices.map((priceArr) => priceArr.pop());

    setLowestPrices(lowestPrices);
  };

  const dataRetailers = productData.map((object) =>
    Object.values(object.Retailer).pop()
  );

  const clickHandler = (index) => {
    const selectedHolder = [...selectedSizes];
    const selectedSize = availableSizes[index];
    if (selectedHolder.includes(selectedSize)) {
      setSelectedSizes(selectedHolder.filter((size) => size !== selectedSize));
    } else {
      setSelectedSizes([...selectedHolder, selectedSize]);
    }
  };

  const availbilityCheck = (vendorIndex) => {
    if (!selectedSizes.length) return true;

    return selectedSizes
      .map(String)
      .map((num) => sizesByRetail[vendorIndex].includes(num))
      .every((bool) => bool === true);
  };

  if (!availableSizes.length && dataRetailers.length) return null;

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
      <ProductSection>
        <CaroselRow>
          <Carousel />
          <Sizes
            availableSizes={availableSizes}
            selectedState={selectedSizes}
            onClickSize={clickHandler}
          />
        </CaroselRow>
        <ProductRow>
          <InfoSection />
          <Suppliers
            suppliers={dataRetailers}
            prices={lowestPrices}
            availbilityCheck={availbilityCheck}
          />
        </ProductRow>
        <ProductRow>
          <Review />
        </ProductRow>
      </ProductSection>
      <SuggestSection />
    </Product>
  );
};

export default ProductPage;
