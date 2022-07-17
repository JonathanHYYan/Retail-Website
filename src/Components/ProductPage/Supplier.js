import { Supplier, SupplierBox } from "./SupplierStyling";

const Suppliers = () => {
  return(
    <SupplierBox>
      <h1>Order From</h1>
      <Supplier><p>Office</p></Supplier>
      <Supplier><p>Size?</p></Supplier>
      <Supplier><p>Nike</p></Supplier>
      <Supplier><p>Footasylum</p></Supplier>
      <Supplier><p>JD Sports</p></Supplier>
    </SupplierBox>
  );
};

export default Suppliers;