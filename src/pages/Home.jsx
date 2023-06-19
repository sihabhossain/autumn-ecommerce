import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductProvider";

const Home = () => {
  const { products } = useContext(ProductContext);
  console.log(products);

  return <div>Homepage</div>;
};

export default Home;
