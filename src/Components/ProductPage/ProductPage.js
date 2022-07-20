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
} from "./ProductPageStyling";
import Sizes from "./Sizes";
import Suppliers from "./Supplier";
import { BsFillStarFill, BsStarHalf } from "react-icons/bs";
import Review from "./Review";
import { useState, useEffect } from "react";
import { Demo } from "../../assets/DemoStock";
import ProductCard from "../UI/Card";
import { Category } from "../LandingPage/ProductStyling";
import { Size } from "./SizesStyling";
import { Supplier } from "./SupplierStyling";

const dummyColors = ["Wolf Grey", "Cool Grey", "Pink Prime", "Black"];

const vendors = ["Lifestyle", "footasylum", "Nike"];

const ProductPage = () => {
  const [suggested, setSuggested] = useState([]);
  const [detailsTab, setDetailsTab] = useState("details");
  const [productApi, setProductApi] = useState([]);
  const [clickedSizes, setClickedSizes] = useState([]);
  const [availableSizes, setAvailableSizes] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    let suggestArr = [];
    if (Demo.images) {
      Demo.images.map((image) => {
        if (image.state === "suggest") {
          return suggestArr.push(image);
        }
      });
    };

    let selectDefault = [];
    availableSizes.map((size) => {
      selectDefault.push(false);
    });
    
    getData();
    if(productApi.length){
      loadSizes(productApi);
      loadSuppliers(productApi);

    }
    setClickedSizes(selectDefault);
    setSuggested(suggestArr);
  }, [Demo, ]);

  const getData = async () => {
    const promises = vendors.map((vendor) => {
      const response = fetch(`http://0b69-45-132-108-35.eu.ngrok.io/${vendor}`);
      return response;
    });
    const responses = await Promise.all(promises);
    const values = await Promise.all(
      responses.map((response) => response.json())
    );
    const products = values.map((object, index) =>Object.values(object)[0]);
    // console.log(products);
    setProductApi(products);
  };

  const loadSizes = (data) => {
    const dataSizes = data.map((object) => Object.values(object.Sizes));
    const concatSizesArr = [].concat.apply([], dataSizes);
    const mergeSizes = concatSizesArr.map(element => element.split(/[, ]+/));
    const concatSizes = [].concat.apply([], mergeSizes).filter(Boolean);
    const filterSizes = [...new Set(concatSizes)];

    setAvailableSizes(filterSizes);
  };

  const clickHandler = (index) => {
    let selectedArr = [...clickedSizes];
    selectedArr[index] = !selectedArr[index];
    // console.log(selectedArr);
    setClickedSizes(selectedArr);
  };

  const sizes = availableSizes.map((size, index) => {
    return (
      <Size
        onClick={() => {
          clickHandler(index);
        }}
        isSelected={clickedSizes[index]}
      >
        UK {size}
      </Size>
    );
  });

  const loadSuppliers = (data) =>{
    const supplierData = data.map((object) => Object.values(object.Retailer));
    const filterSupplier = supplierData.map(array => [...new Set(array)]);
    const mergeSupplier = [].concat.apply([], filterSupplier);
    // console.log(`merged supplier ${mergeSupplier}`);
    setSuppliers(mergeSupplier);
  }

  const availableSupplier = suppliers.map((supplier)=>{
    return(
      <Supplier><p>{supplier}</p></Supplier>
    )
  })

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

  const renderColors = dummyColors.map((color, index) => {
    if (index < dummyColors.length - 1) {
      return (
        <>
          <p>{color}</p>
          <p> / </p>
        </>
      );
    } else {
      return <p>{color}</p>;
    }
  });

  const suggestedStock = suggested.map((item) => {
    return generateCard(item);
  });
  console.log(productApi);
  console.log(availableSizes);
  console.log(suppliers);

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
          {availableSizes.length && <Sizes sizes={sizes} />}
        </CaroselRow>
        <ProductRow>
          <ProductInfo>
            <TabsWindow>
              <DetailsTab
                autoFocus
                onClick={() => {
                  setDetailsTab("details");
                }}
              >
                Details
              </DetailsTab>
              <DetailsTab
                onClick={() => {
                  setDetailsTab("spec");
                }}
              >
                Specification
              </DetailsTab>
              <DetailsTab
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
                  <div>
                    <li>
                      The padded, low-cut collar looks sleek and feels great
                    </li>
                    <li>Pull tabs at heel and tongue for easy on and off</li>
                    <li>Colour Shown: Wolf Grey/Cool Grey/Pink Prime/Black</li>
                    <li>Style: CI7523-009</li>
                  </div>
                </Details>
              ) : null}
              {detailsTab === "fit" ? (
                <Details>
                  <div>
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
                  </div>
                </Details>
              ) : null}
            </DetailsWindow>
            <Colors>
              <p>Colors:</p>
              {renderColors}
            </Colors>
          </ProductInfo>
          {availableSupplier.length && <Suppliers availableSupplier={availableSupplier}/>}
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
        <Category>{suggestedStock}</Category>
      </ProductWindow>
    </Product>
  );
};

export default ProductPage;
