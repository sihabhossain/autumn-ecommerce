import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Home from "../pages/Home";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Sidebar></Sidebar>
      <Footer></Footer>
    </div>
  );
};

export default Main;
