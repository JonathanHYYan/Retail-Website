import { Size, SizeBox, Tile } from "./SizesStyling";

const Sizes = () => {
  const dummySizes = [2.5, 3,3.5,4,4.6,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5];

  const sizes = dummySizes.map(size => {
    return <Size>UK {size}</Size>
  }
  );
  return (
    <SizeBox>
      <h1>Sizes</h1>
      {sizes}
    </SizeBox>
  );
};

export default Sizes;
