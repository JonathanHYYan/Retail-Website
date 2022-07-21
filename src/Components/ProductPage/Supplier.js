import { Supplier, SupplierBox } from "./SupplierStyling";

const Suppliers = (props) => {
  const { suppliers } = props;
  const { prices } = props;
  const { availbilityCheck } = props;

  const renderSuppliers = suppliers.map((supplier, index) => {
    return (
      <Supplier key={supplier} disabled={!availbilityCheck(index)}>
        <h2>{supplier}</h2>
        <p>Starting at: {[prices[index]]}</p>
      </Supplier>
    );
  });

  return (
    <SupplierBox>
      <h1>Available From</h1>
      {renderSuppliers}
    </SupplierBox>
  );
};

export default Suppliers;
