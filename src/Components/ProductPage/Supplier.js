import { Supplier, SupplierSection, Price, Sale } from "./SupplierStyling";
import { AiOutlineFire } from "react-icons/ai";

const Suppliers = (props) => {
  const { suppliers } = props;
  const { getSupplierPrice } = props;
  const { availbilityCheck } = props;
  const { isOnSale } = props;

  const renderSuppliers = suppliers.map((supplier, index) => {
    return (
      <Supplier key={supplier} disabled={!availbilityCheck(index)}>
        <h2>{supplier}</h2>
        <Price>
          <p>Starting at: {getSupplierPrice(index)}</p>
          <Sale sale={isOnSale(index)}>
            <AiOutlineFire style={{ color: "#dc0019" }} />
            <p>Sale!</p>
          </Sale>
        </Price>
      </Supplier>
    );
  });

  return (
    <SupplierSection>
      <h1>Available From</h1>
      {renderSuppliers}
    </SupplierSection>
  );
};

export default Suppliers;
