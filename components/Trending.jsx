import React from "react";
import { FcBarChart } from "react-icons/fc";
import CardTrending from "./CardTrending";
import Title from "./Title";
const Trending = () => {
  return (
    <div className=" mt-12 mb-10 pl-3  justify-center mx-auto max-w-6xl ">
      {/* title */}
      <Title />
      <div className="flex flex-wrap justify-between">
        <CardTrending />
        <CardTrending />
        <CardTrending />
        <CardTrending />
      </div>
    </div>
  );
};

export default Trending;
