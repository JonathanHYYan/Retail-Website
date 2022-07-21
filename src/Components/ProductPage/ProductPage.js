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
  SuggestWindow,
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
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [lowestPrices, setLowestPrices] = useState([]);
  const [retailerNames, setRetailerNames] = useState([]);
  const [availbility, setAvailbility] = useState([]);
  const [sizesByRetail, setSizesByRetail] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (productApi.length) {
      parseSizes(productApi);
      parsePrices(productApi);
      parseRetailers(productApi);
    }
  }, [productApi]);

  useEffect(() => {
    availbilityCheck();
  }, [selectedSizes]);

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
    setSelectedState(sortSizes.map(() => false));
  };

  const parsePrices = (data) => {
    const dataPrices = data.map((object) => Object.values(object.Price));
    const lowestPrices = dataPrices.map((priceArr) => priceArr.pop());
    setLowestPrices(lowestPrices);
  };

  const parseRetailers = (data) => {
    const dataRetailers = data.map((object) =>
      Object.values(object.Retailer).pop()
    );
    setRetailerNames(dataRetailers);
  };

  const clickHandler = (index) => {
    let selectedArr = [...selectedState];
    selectedArr[index] = !selectedArr[index];
    setSelectedState(selectedArr);

    const selectedHolder = [...selectedSizes];
    if (selectedArr[index]) {
      setSelectedSizes((current) => [...current, availableSizes[index]]);
    } else if (!selectedArr[index]) {
      setSelectedSizes(
        selectedHolder.filter((size) => size !== availableSizes[index])
      );
    }
  };

  const availbilityCheck = () => {
    if (sizesByRetail.length) {
      const b1 = selectedSizes.map(String).map(num => sizesByRetail[0].includes(num)).every(bool => bool === true);
      const b2 = selectedSizes.map(String).map(num => sizesByRetail[1].includes(num)).every(bool => bool === true);
      const b3 = selectedSizes.map(String).map(num => sizesByRetail[2].includes(num)).every(bool => bool === true);

      setAvailbility([b1, b2, b3]);
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
              <p>|</p>
              <DetailsTab
                isSelected={detailsTab === "spec" ? true : false}
                onClick={() => {
                  setDetailsTab("spec");
                }}
              >
                Specification
              </DetailsTab>
              <p>|</p>
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
          {retailerNames.length ? (
            <Suppliers
              suppliers={retailerNames}
              prices={lowestPrices}
              available={availbility}
            />
          ) : null}
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
      <SuggestWindow>
        <h1>You Might Also Like</h1>
        <Suggested>{suggestedStock}</Suggested>
      </SuggestWindow>
    </Product>
  );
};

export default ProductPage;
