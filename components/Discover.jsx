import React from "react";
const data = [
  "Self",
  "Health",
  "Tech",
  "Politics",
  "Sports",
  "Entertainment",
  "Business",
  "Science",
];
const Discover = () => {
  return (
    <div className="mt-10 mx-3  sticky top-0 md:pt-5">
      <div className="text-sm font-bold uppercase">
        discover more of what matters to you{" "}
      </div>
      <div className="flex flex-wrap justify-between my-5 ">
        {data.map((item, index) => (
          <div
            key={index}
            className=" text-sm border-gray-200 rounded-sm  border-2 px-3 py-1 mt-2"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
