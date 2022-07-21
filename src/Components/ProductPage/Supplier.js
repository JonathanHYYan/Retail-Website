import { Supplier, SupplierBox } from "./SupplierStyling";

const Suppliers = (props) => {
  const { suppliers } = props;
  const { prices } = props;
  const { available } = props;

  const renderSuppliers = suppliers.map((supplier, index) => {
    const startUpHandler = (available,index) => {
      // console.log(available)
      if (available.length === 0) {
        return (!available);
      } else return !available[index];
    };

    return (
      <Supplier key={supplier} disabled={startUpHandler(available,index)}>
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
