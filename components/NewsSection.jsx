import React from "react";
import { FcBarChart } from "react-icons/fc";
import CardNews from "./CardNews";
import Discover from "./Discover";

// data for the cards in the trending section

const NewsSection = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row-reverse">
        <div className="basis-1/3 relative">
          <Discover />
        </div>
        <div className="border-b-2 border-gray-200 my-8" />
        <div className="flex-1">
          <CardNews />
          <CardNews />
          <CardNews />

          <CardNews />
          <CardNews />

          <CardNews />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
