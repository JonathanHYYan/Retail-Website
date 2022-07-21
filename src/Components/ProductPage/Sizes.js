import { Size, SizeContainer } from "./SizesStyling";

const Sizes = (props) => {
  const { availableSizes, onClickSize, selectedState } = props;


  return (
    <SizeContainer>
      <h1>Sizes</h1>
      {availableSizes.map((size, index) => {
        return (
          <Size
            key={`${size}-${index}`}
            onClick={() => {
              onClickSize(index);
            }}
            isSelected={selectedState[index]}
          >
            UK {size}
          </Size>
        );
      })}
    </SizeContainer>
  );
};

export default Sizes;
