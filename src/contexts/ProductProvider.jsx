import React, { createContext } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const products = {
    name: "coke",
  };
  const productInfo = {
    products,
  };
  return (
    <ProductContext.Provider value={productInfo}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
