import React from "react";
import womenImg from "../img/woman_hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className=" h-[800px] bg-hero bg-fuchsia-100 bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className=" px-10 flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="border-b-[4px] border-red-500">New Trend</div>
          </div>
          <h1 className=" text-[70px] leading-[1.1] font-light mb-4">
            SUMMER SALE STYLISH <br />
            <span className="font-semibold">WOMENS</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-4 border-black"
          >
            Discover More
          </Link>
        </div>
        {/* image */}
        <div className="hidden lg:block">
          <img src={womenImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
