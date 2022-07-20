import Carousel from "./Carousel";
import {
  BreadCrumb,
  Product,
  ProductDetail,
  ProductRow,
  ProductWindow,
  ProductInfo,
  Rating,
  Reviews,
  Colors,
  DetailsWindow,
  DetailsTab,
  Details,
  TabsWindow,
  CaroselRow,
  Suggested,
} from "./ProductPageStyling";
import Sizes from "./Sizes";
import Suppliers from "./Supplier";
import { BsFillStarFill, BsStarHalf } from "react-icons/bs";
import Review from "./Review";
import React, { useState, useEffect } from "react";
import { Demo } from "../../assets/DemoStock";
import ProductCard from "../UI/Card";

const dummyColors = ["Wolf Grey", "Cool Grey", "Pink Prime", "Black"];

const vendors = ["Lifestyle", "footasylum", "Nike"];

const ProductPage = () => {
  const [detailsTab, setDetailsTab] = useState("details");
  const [productApi, setProductApi] = useState([]);
  const [selectedState, setSelectedState] = useState([]);
  const [availableSizes, setAvailableSizes] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (productApi.length) {
      loadSizes(productApi);
      loadSuppliers(productApi);
    }
  }, [productApi]);

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

    setProductApi(products);
  };

  const loadSizes = (data) => {
    const dataSizes = data.map((object) => Object.values(object.Sizes));
    const concatSizesArr = [].concat.apply([], dataSizes);
    const mergeSizes = concatSizesArr.map((element) => element.split(/[, ]+/));
    const concatSizes = [].concat.apply([], mergeSizes).filter(Boolean);
    const filterSizes = [...new Set(concatSizes)];
    setAvailableSizes(filterSizes);
    setSelectedState(filterSizes.map(() => false));
  };

  const clickHandler = (index) => {
    let selectedArr = [...selectedState];
    selectedArr[index] = !selectedArr[index];
    setSelectedState(selectedArr);

    const selectedHolder = [...selectedSizes];
    if(selectedArr[index]){
      console.log(availableSizes[index]);
      setSelectedSizes(current => [...current, availableSizes[index]]);
    } else if (!selectedArr[index]){
      setSelectedSizes(selectedHolder.filter(size => size !== availableSizes[index]));
    }
  };

  console.log(selectedSizes);

  const loadSuppliers = (data) => {
    const supplierData = data.map((object) => Object.values(object.Retailer));
    const filterSupplier = supplierData.map((array) => [...new Set(array)]);
    const mergeSupplier = [].concat.apply([], filterSupplier);

    if(selectedState.every(bool => bool === true)){
      setSuppliers(mergeSupplier);
    } else {

    }
  };

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

  const renderColors = dummyColors.map((color, index) => {
    if (index < dummyColors.length - 1) {
      return (
        <React.Fragment key={color}>
          <p>{color}</p>
          <p> / </p>
        </React.Fragment>
      );
    } else {
      return <p key={color}>{color}</p>;
    }
  });

  const suggestArr = Demo.images.filter((image) => image.state === "suggest");

  const suggestedStock = suggestArr.map((item) => {
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
        <CaroselRow>
          <Carousel />
          {availableSizes.length ? (
            <Sizes
              availableSizes={availableSizes}
              selectedState={selectedState}
              onClickSize={clickHandler}
            />
          ) : null}
        </CaroselRow>
        <ProductRow>
          <ProductInfo>
            <TabsWindow>
              <DetailsTab
                autoFocus
                isSelected={detailsTab === "details" ? true : false}
                onClick={() => {
                  setDetailsTab("details");
                }}
              >
                Details
              </DetailsTab>
              <DetailsTab
                isSelected={detailsTab === "spec" ? true : false}
                onClick={() => {
                  setDetailsTab("spec");
                }}
              >
                Specification
              </DetailsTab>
              <DetailsTab
                isSelected={detailsTab === "fit" ? true : false}
                onClick={() => {
                  setDetailsTab("fit");
                }}
              >
                Fit and Care
              </DetailsTab>
            </TabsWindow>
            <DetailsWindow>
              {detailsTab === "details" ? (
                <Details>
                  <div>
                    <p>
                      From the D/MS/X collection comes a story of surreal
                      comfort. Layered textures, intricate lines and vivid
                      colours combine in a design influenced by the exaggerated
                      world of our dreams. The React foam and an ultra-plush
                      tongue provide dreamlike comfort. Step into your dream—the
                      Nike React Vision.
                    </p>
                  </div>
                </Details>
              ) : null}
              {detailsTab === "spec" ? (
                <Details>
                  <ul>
                    <li>
                      The padded, low-cut collar looks sleek and feels great
                    </li>
                    <li>Pull tabs at heel and tongue for easy on and off</li>
                    <li>Colour Shown: Wolf Grey/Cool Grey/Pink Prime/Black</li>
                    <li>Style: CI7523-009</li>
                  </ul>
                </Details>
              ) : null}
              {detailsTab === "fit" ? (
                <Details>
                  <ul>
                    <li>
                      Micro-detailing, exaggerated proportions and
                      multi-textured aesthetic give this shoe a unique
                      appearance. The airy upper features all-over mesh.
                    </li>
                    <li>
                      The Nike React foam midsole with soft rubber detailing
                      delivers unrivalled, all-day comfort. The ultra-plush
                      tongue provides additional cushioning.
                    </li>
                    <li>
                      The TPU heel clip creates a sporty look, refreshes your
                      heritage styling and adds stability.
                    </li>
                  </ul>
                </Details>
              ) : null}
            </DetailsWindow>
            <Colors>
              <p>Colors:</p>
              {renderColors}
            </Colors>
          </ProductInfo>
          {suppliers.length ? <Suppliers suppliers={suppliers} /> : null}
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
        <Suggested>{suggestedStock}</Suggested>
      </ProductWindow>
    </Product>
  );
};

export default ProductPage;
