import ProductColors from "./ProductColors";
import {
  BreadCrumb,
  HeaderSection,
  ProductDetail,
} from "./ProductHeaderStyling";

const ProductHeader = () => {
  return (
    <HeaderSection>
      <ProductDetail>
        <BreadCrumb>
          <p>Shoes</p>
          <p>/</p>
          <p>Nike</p>
          <p>/</p>
          <p>React Vision</p>
          <p>/</p>
          <p>DH4439-102</p>
        </BreadCrumb>
        <h1>Nike React Vision</h1>
        <p>DH4439-102</p>
      </ProductDetail>
      
    </HeaderSection>
  );
};

export default ProductHeader;
