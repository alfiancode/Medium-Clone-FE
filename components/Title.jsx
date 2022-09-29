import React from "react";
import { FcBarChart } from "react-icons/fc";

const Title = () => {
  return (
    <div>
      {" "}
      <div className="flex h-10 items-center">
        <div className="flex flex-row ">
          {/* icon trend */}
          <FcBarChart className="mr-5 self-center " size={25} />
          <div className="">
            <p className="text-lgs font-sans font-extrabold uppercase">
              Trending On Medium
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
