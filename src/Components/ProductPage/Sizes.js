import { Size, SizeBox } from "./SizesStyling";
import { useEffect, useState } from "react";

const dummySizes = [
  2.5, 3, 3.5, 4, 4.6, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5,
];

const Sizes = (productApi) => {
  const [clickedSizes, setClickedSizes] = useState([]);
  const [availableSizes, setAvailableSizes] = useState([]);

  useEffect(() => {
    let selectDefault = [];
    dummySizes.map((size) => {
      selectDefault.push(false);
    });

    if (productApi.length) {
      loadSizes(productApi);
    };

    setClickedSizes(selectDefault);
  }, productApi);

  const supplierSizes = [];

  const loadSizes = (data) => {
    let lifeSizes = [];
    let nikeSizes = [];
    let footSizes = [];

    console.log(data);
    console.log(data.productApi[0]);
    // data.LifeStle.Sizes.map(size => supplierSizes.push(size));
    // console.log(supplierSizes);
  };

  const clickHandler = (index) => {
    let selectedArr = [...clickedSizes];
    selectedArr[index] = !selectedArr[index];
    setClickedSizes(selectedArr);
  };

  const sizes = dummySizes.map((size, index) => {
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

  return (
    <SizeBox>
      <h1>Sizes</h1>
      {sizes}
    </SizeBox>
  );
};

export default Sizes;
