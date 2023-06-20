import React, { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductProvider";
import { CartContext } from "../contexts/CartProvider";

const ProductDetails = () => {
  const { id } = useParams();

  const { products } = useContext(ProductContext);
  const { AddToCart } = useContext(CartContext);

  // get the single product based on the id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // if product not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  const { title, price, description, image } = product;

  return (
    <div>
      <Header></Header>
      <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
        <div className="container mx-auto">
          {/* image and text wrapper */}
          <div className="flex flex-col lg:flex-row items-center">
            {/* image */}
            <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
              <img className="max-w-[200px] lg:max-w-sm" src={image} alt="" />
            </div>
            {/* text */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
                {title}
              </h1>
              <div className="text-xl text-red-500 font-medium mb-6">
                $ {price}
              </div>
              <p className="mb-8">{description}</p>
              <button
                onClick={() => AddToCart(product, product.id)}
                className="bg-black py-4 px-8 text-white rounded-lg"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <Sidebar></Sidebar>
      <Footer></Footer>
    </div>
  );
};

export default ProductDetails;
