import { Size, SizeBox } from "./SizesStyling";
import { useEffect, useState } from "react";


const Sizes = (props) => {
  const { sizes } = props;
  // const [clickedSizes, setClickedSizes] = useState([]);
  // const [availableSizes, setAvailableSizes] = useState([]);
  
  // useEffect(() => {
  //   let selectDefault = [];
  //   availableSizes.map((size) => {
  //     selectDefault.push(false);
  //   });
  //   console.log(sizes);
  //   // loadSizes(productApi);
  //   // setClickedSizes(selectDefault);
  // }, sizes);

  return (
    <SizeBox>
      <h1>Sizes</h1>
      {sizes}
    </SizeBox>
  );
};

export default Sizes;
