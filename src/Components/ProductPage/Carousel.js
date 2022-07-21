import {
  BtnRight,
  BtnLeft,
  CarouselContainer,
  Img,
  ImgHolder,
} from "./CarouselStyles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import shoe1 from "../../assets/ProductImg/shoe1.png";
import shoe2 from "../../assets/ProductImg/shoe2.png";
import shoe3 from "../../assets/ProductImg/shoe3.png";
import shoe4 from "../../assets/ProductImg/shoe4.png";
import shoe5 from "../../assets/ProductImg/shoe5.png";
import shoe6 from "../../assets/ProductImg/shoe6.png";
import shoe7 from "../../assets/ProductImg/shoe7.png";
import shoe8 from "../../assets/ProductImg/shoe8.png";
import { useState } from "react";

const imageHolder = [shoe1, shoe2, shoe3, shoe4, shoe5, shoe6, shoe7, shoe8];

const Carousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const length = imageHolder.length - 1;

  const renderImgs = imageHolder.map(
    (image, index) =>
      index === imgIndex && (
        <Img key={image} src={image} alt={`shoe-${index}`} />
      )
  );

  const leftHandler = () => {
    setImgIndex(imgIndex === 0 ? length : imgIndex - 1);
  };

  const rightHandler = () => {
    setImgIndex(imgIndex === length ? 0 : imgIndex + 1);
  };

  return (
    <>
      <CarouselContainer>
        <ImgHolder>
          {renderImgs}
          <BtnLeft onClick={leftHandler}>
            <FaChevronLeft />
          </BtnLeft>
          <BtnRight onClick={rightHandler}>
            <FaChevronRight />
          </BtnRight>
        </ImgHolder>
      </CarouselContainer>
    </>
  );
};

export default Carousel;
