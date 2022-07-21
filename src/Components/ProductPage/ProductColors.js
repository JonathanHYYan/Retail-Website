import {
  AvailableColors,
  ColorSection,
  ColorButton,
} from "./ProductColorsStyling";

const ProductColors = ({ availableColors, onClickColor, selectedState }) => {
  const renderColors = () =>
    availableColors.map((color, index) => {
      return (
        <ColorButton
          key={color}
          onClick={() => onClickColor(index)}
          isSelected={selectedState === index}
        >
          <p>{color}</p>
        </ColorButton>
      );
    });

  if (!availableColors) return null;

  return (
    <ColorSection>
      <AvailableColors>{renderColors()}</AvailableColors>
    </ColorSection>
  );
};

export default ProductColors;
