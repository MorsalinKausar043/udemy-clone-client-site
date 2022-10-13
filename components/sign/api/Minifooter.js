import Image from "next/image";
import React from "react";
import imageData from "./Api";

const MiniFooter = () => {
  return (
    <>
      <div className="bg-black w-full px-3 md:px-10 lg:px-14 py-6 border-b border-gray-50 flex justify-around items-center">
        <div className="w-full flex flex-row flex-wrap justify-between items-center">
          {/* title  */}
          <h1 className="text-white text-xl space-x-2 font-bold">
            Top companies choose{" "}
            <button
              disabled
              className="text-purple-300 cursor-pointer hover:underline transition-all"
            >
              Udemy Business
            </button>{" "}
            to build in-demand career skills.
          </h1>
          {/* image  */}
          <div className="flex flex-row flex-wrap mt-2 md:mt-0">
            {imageData.map(({ id, image }) => (
              <>
                <div key={id} className="h-12 w-28 relative">
                  <Image
                    layout="fill" // required
                    objectFit="contain"
                    src={image}
                    alt="brand_image"
                    className="ml-2"
                  />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniFooter;
