import { Size, SizeBox } from "./SizesStyling";
import { useEffect, useState } from "react";


const Sizes = (props) => {
  const { productApi } = props;
  const [clickedSizes, setClickedSizes] = useState([]);
  const [availableSizes, setAvailableSizes] = useState([]);
  
  useEffect(() => {
    let selectDefault = [];
    availableSizes.map((size) => {
      selectDefault.push(false);
    });
    console.log(productApi);
    loadSizes(productApi);
    setClickedSizes(selectDefault);
  }, productApi);

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

  return (
    <SizeBox>
      <h1>Sizes</h1>
      {sizes}
    </SizeBox>
  );
};

export default Sizes;
