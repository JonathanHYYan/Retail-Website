import { useEffect, useState } from "react";
import { Supplier, SupplierBox } from "./SupplierStyling";

const Suppliers = (props) => {
  const { productApi } = props;
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    console.log(productApi);
    loadSuppliers(productApi);
  }, productApi);


  const loadSuppliers = (data) =>{
    const supplierData = data.map((object) => Object.values(object.Retailer));
    const filterSupplier = supplierData.map(array => [...new Set(array)]);
    const mergeSupplier = [].concat.apply([], filterSupplier);
    console.log(supplierData);
    console.log(filterSupplier);
    setSuppliers(mergeSupplier);
  }

  const availableSupplier = suppliers.map((supplier)=>{
    return(
      <Supplier><p>{supplier}</p></Supplier>
    )
  })

  return(
    <SupplierBox>
      <h1>Order From</h1>
      {availableSupplier}
    </SupplierBox>
  );
};

export default Suppliers;