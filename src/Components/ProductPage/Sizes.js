import { Size, SizeBox } from "./SizesStyling";
import { useEffect, useState } from "react";

const dummySizes = [
  2.5, 3, 3.5, 4, 4.6, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5,
];

const Sizes = () => {
  const [clickedSizes, setClickedSizes] = useState([]);

  useEffect(() => {
    let selectDefault = [];
    dummySizes.map(size => {
      selectDefault.push(false);
    });
    setClickedSizes(selectDefault);
  },dummySizes);

  const clickHandler = (index) => {
    let selectedArr = [...clickedSizes];
    selectedArr[index] = !selectedArr[index];
    setClickedSizes(selectedArr);
  };

  const sizes = dummySizes.map((size, index) => {
    return (
      <Size onClick={()=>{clickHandler(index)}} isSelected={clickedSizes[index]}>
        UK {size}
      </Size>
    );
  });
  return (
    <SizeBox>
      <h1>Sizes</h1>
      {sizes}
    </SizeBox>
  );
};

export default Sizes;
