import React from "react";

const Banner = () => {
  return (
    // make bg yellow with heigh 80vh
    <div className=" bg-[rgb(255,192,23)] h-[80vh]  ">
      {/* container for conten with max w */}
      <div className="flex justify-between max-w-6xl h-full mx-auto ">
        <div
          // make classname heigh 85vh with bg yellow
          className="  justify-center items-center mx-3 flex flex-col md:basis-2/5 md:mx-0 md:justify-center  "
        >
          {/* text 70px with serif font paading 93px  */}
          <div className="text-7xl  font-serif  ">
            <h1 className="text-[#000000] flex flex-col pb-10 ">
              Stay <span>Curious.</span>
            </h1>
            {/* text paragraph */}
            <p className="text-[#000000] text-3xl font-sans mb-5">
              Discover stories, thinking, and expertise from writers on any
              topic.
            </p>
            {/* button */}
            <button className="bg-[#000000] text-[#FFFFFF] text-2xl font-sans py-1 px-12 rounded-full">
              Get Started
            </button>
          </div>
        </div>
        <div className="hidden md:flex">
          {/* import image from public medium.png */}
          <img src="/medium.png" alt="medium" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
