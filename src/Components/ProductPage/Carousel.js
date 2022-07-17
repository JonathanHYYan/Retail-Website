import AwesomeSlider from "react-awesome-slider";
import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import shoe1 from "../../assets/ProductImg/shoe1.png";
import shoe2 from "../../assets/ProductImg/shoe2.png";
import shoe3 from "../../assets/ProductImg/shoe3.png";
import shoe4 from "../../assets/ProductImg/shoe4.png";
import shoe5 from "../../assets/ProductImg/shoe5.png";
import shoe6 from "../../assets/ProductImg/shoe6.png";
import shoe7 from "../../assets/ProductImg/shoe7.png";
import shoe8 from "../../assets/ProductImg/shoe8.png";

const Carousel = () => {
  return (
    <div style={{ width: "50%" }}>
      <AwesomeSlider cssModule={CoreStyles} animation="cubeAnimation">
        <div data-src={shoe1} />
        <div data-src={shoe2} />
        <div data-src={shoe3} />
        <div data-src={shoe4} />
        <div data-src={shoe5} />
        <div data-src={shoe6} />
        <div data-src={shoe7} />
        <div data-src={shoe8} />
      </AwesomeSlider>
    </div>
  );
};

export default Carousel;
