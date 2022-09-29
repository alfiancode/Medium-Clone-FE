import Image from "next/image";
import React from "react";

const CardTrending = () => {
  return (
    <div className="flex  h-28 mt-10">
      {/* left side  */}
      <div className="flex w-1/6 justify-start items-start relative -mt-5">
        <div className="text-5xl font-extrabold text-gray-400">01</div>
      </div>
      {/* right side */}
      <div className="flex flex-col">
        <div className="flex flex-row">
          {/* avatar with Image next js  */}
          <Image
            src="https://picsum.photos/200"
            alt="Picture of the author"
            width={25}
            height={25}
            className="rounded-full "
          />
          <div className=" self-center ml-4">
            <p className="text-sm font-sans font-medium">Alfian Syah</p>
          </div>
        </div>
        <div className="font-bold tracking-wide my-3">
          Apple Car: Bad News for Tesla
        </div>
        <div className="flex">
          <p className="text-sm font-sans font-medium text-gray-500 mr-2">
            Sep 27
          </p>
          <p className="text-sm font-sans font-medium text-gray-500">
            5 min read
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardTrending;
