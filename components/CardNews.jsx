import Image from "next/image";
import React from "react";
import { FcAcceptDatabase } from "react-icons/fc";
const CardNews = () => {
  return (
    <div className="px-3 mt-10 ">
      <div className="flex h-40 items-center">
        <div className="basis-2/3 mr-5">
          <div className="flex flex-col">
            <div className="flex flex-row ">
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
            <div className=" hidden text-sm md:flex text-gray-500 mr-20 mb-2">
              Apple is reportedly working on a car, and it could be a big Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              repudiandae? problem for Tesla. repudiandae? problem for Tesla.
            </div>
            <div className="flex">
              <p className="text-sm font-sans font-medium text-gray-500 mr-2">
                Sep 27
              </p>
              <p className="text-sm font-sans font-medium text-gray-500">
                5 min read
              </p>
              {/* icon save */}
              <div className="ml-5">
                <FcAcceptDatabase size={20} />
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-48 md:h-32 justify-center  flex  ">
          <Image
            src="https://picsum.photos/200"
            alt="Picture of the author"
            width={150}
            height={150}
            // layout="fill"
            objectFit="cover" // ch
          />
        </div>
      </div>
    </div>
  );
};

export default CardNews;
