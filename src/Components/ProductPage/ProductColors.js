import {
  AvailableColors,
  ColorSection,
  ColorButton,
} from "./ProductColorsStyling";

const ProductColors = ({ availableColors, onClickColor, selectedState }) => {
  if (!availableColors) return;
  
  const colorAvailable = availableColors.map((color, index) => {
    return (
      <ColorButton
        key={color}
        onClick={() => {
          onClickColor(index);
        }}
        isSelected={selectedState === index}
      >
        <p>{color}</p>
      </ColorButton>
    );
  });

  return (
    <ColorSection>
      <AvailableColors>{colorAvailable}</AvailableColors>
    </ColorSection>
  );
};

export default ProductColors;
