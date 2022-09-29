import React from "react";
import { FcBarChart } from "react-icons/fc";
import CardNews from "./CardNews";
import Discover from "./Discover";

// data for the cards in the trending section

const NewsSection = () => {
  return (
    <div>
      <Discover />
      <div className="border-b-2 border-gray-200 my-8" />
      <CardNews />
    </div>
  );
};

export default NewsSection;
