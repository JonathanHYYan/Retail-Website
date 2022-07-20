import { Supplier, SupplierBox } from "./SupplierStyling";

const Suppliers = (props) => {
  const { suppliers } = props;

  const renderSuppliers = suppliers.map((supplier) => {
    return (
      <Supplier key={supplier}>
        <p>{supplier}</p>
      </Supplier>
    );
  });

  return (
    <SupplierBox>
      <h1>Available At</h1>
      {renderSuppliers}
    </SupplierBox>
  );
};

export default Suppliers;
