import {
  BtnRight,
  BtnLeft,
  BtnHolder,
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
  const length = imageHolder.length;

  const renderImgs = imageHolder.map((image, index) => {
    return (
      <>{index === imgIndex && <Img src={image} alt={`shoe-${index}`} />}</>
    );
  });

  const leftHandler = () => {
    setImgIndex(imgIndex === 0 ? length - 1 : imgIndex - 1);
  };

  const rightHandler = () => {
    setImgIndex(imgIndex === length - 1 ? 0 : imgIndex + 1);
  };

  return (
    <>
      <CarouselContainer>
        <ImgHolder>{renderImgs}</ImgHolder>
          <BtnLeft onClick={leftHandler}>
            <FaChevronLeft />
          </BtnLeft>
          <BtnRight onClick={rightHandler}>
            <FaChevronRight />
          </BtnRight>
      </CarouselContainer>
    </>
  );
};

export default Carousel;
