import React from "react";
import { FcBarChart } from "react-icons/fc";
import CardTrending from "./CardTrending";
import Title from "./Title";
const Trending = () => {
  return (
    <div className="mx-3 mt-12 mb-20">
      {/* title */}
      <Title />
      <CardTrending />
    </div>
  );
};

export default Trending;
