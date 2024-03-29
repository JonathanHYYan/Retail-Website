import { Size, SizeContainer } from "./SizesStyling";

const Sizes = (props) => {
  const { availableSizes, onClickSize, selectedState } = props;
  
  if(!availableSizes.length) return null;

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
            isSelected={selectedState.includes(size)}
          >
            UK {size}
          </Size>
        );
      })}
    </SizeContainer>
  );
};

export default Sizes;
