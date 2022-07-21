import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import {
  Product,
  ProductRow,
  ProductSection,
  CaroselRow,
  Specs,
} from "./ProductPageStyling";
import Sizes from "./Sizes";
import Suppliers from "./Supplier";
import Review from "./Review";
import SuggestSection from "./SuggestSection";
import InfoSection from "./ProductInfo";
import ProductHeader from "./ProductHeader";
import ProductColors from "./ProductColors";

const vendors = ["Lifestyle", "footasylum", "Nike"];

const ProductPage = () => {
  const [productData, setProductData] = useState([]);
  const [availableSizes, setAvailableSizes] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [sizesByRetail, setSizesByRetail] = useState([]);
  const [selectedColor, setSelectedColor] = useState(0);
  const [retailColors, setRetailColors] = useState();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (productData.length) {
      parseSizes();
      setRetailColors(Object.values(productData[0].Text1));
    }
  }, [productData, selectedColor]);

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

  const parseSizes = () => {
    const dataSizes = productData.map((object) => Object.values(object.Sizes));

    const retailerSizes = dataSizes.map(array => array[selectedColor]);
    setSizesByRetail(retailerSizes);
    const filterSizes = retailerSizes.join().split(/[, ]+/).filter(Boolean).sort();
    const uniqueSizes = [...new Set(filterSizes)];

    setAvailableSizes(uniqueSizes);
  };


  const dataRetailers = productData.map((object) =>
    Object.values(object.Retailer).pop()
  );

  const onClickSize = (index) => {
    const selectedHolder = [...selectedSizes];
    const selectedSize = availableSizes[index];
    if (selectedHolder.includes(selectedSize)) {
      setSelectedSizes(selectedHolder.filter((size) => size !== selectedSize));
    } else {
      setSelectedSizes([...selectedHolder, selectedSize]);
    }
  };

  const onClickColor = (index) => {
    if (selectedColor === index) return;
    setSelectedColor(index);
    setSelectedSizes([]);
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
      <ProductHeader />
      <ProductSection>
        <CaroselRow>
          <Carousel />
          <Specs>
            <ProductColors
              availableColors={retailColors}
              selectedState={selectedColor}
              onClickColor={onClickColor}
            />
            <Sizes
              availableSizes={availableSizes}
              selectedState={selectedSizes}
              onClickSize={onClickSize}
            />
          </Specs>
        </CaroselRow>
        <ProductRow>
          <InfoSection retailColors={retailColors}/>
          <Suppliers
            suppliers={dataRetailers}
            getSupplierPrice={(vendorIndex) =>
              productData[vendorIndex].Price[selectedColor]
            }
            availbilityCheck={availbilityCheck}
            isOnSale={vendorIndex =>{
              return productData[vendorIndex].Sale[selectedColor];
            }}
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
