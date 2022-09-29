import Image from "next/image";
import React from "react";

const CardNews = () => {
  return (
    <div className="px-3 mt-10 w-full">
      <div className="flex">
        <div className="basis-2/3">
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
            <div className="font-bold tracking-wide my-2">
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
        <div className=" ">
          <Image
            src="https://picsum.photos/200"
            alt="Picture of the author"
            width="100%"
            height="100%"
            className="bg-cover bg-center "
          />
        </div>
      </div>
    </div>
  );
};

export default CardNews;
