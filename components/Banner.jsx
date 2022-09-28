import React from "react";

const Banner = () => {
  return (
    <div className=" bg-[rgb(255,192,23)] h-[80vh] px-5">
      <div
        // make classname heigh 85vh with bg yellow
        className="max-w-4xl  sm:px-6 lg:px-8 mx-auto h-full"
      >
        {/* text 70px with serif font paading 93px  */}
        <div className="text-7xl  font-serif pt-10 ">
          <h1 className="text-[#000000] flex flex-col pb-10 ">
            Stay <span>Curious.</span>
          </h1>
          {/* text paragraph */}
          <p className="text-[#000000] text-3xl font-sans mb-5">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
          {/* button */}
          <button className="bg-[#000000] text-[#FFFFFF] text-2xl font-sans py-1 px-12 rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
