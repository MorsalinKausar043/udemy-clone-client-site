import Image from "next/image";
import Link from "next/link";
import React from "react";
import categoriesData from "./api/Api";

const Categories = () => {
  return (
    <>
      <section className="w-full my-4 md:my-8 flex justify-center items-center">
        <div className="container">
          {/* title  */}
          <div className="">
            <h1 className="text-xl md:text-2xl font-bold font-sans text-center md:text-left">
              Top Categories
            </h1>
          </div>
          {/* body and Data  */}
          <div>
            <div className="min-h-auto body-font text-gray-600 ">
              <div className="container mx-auto px-5 py-10">
                <div className="-m-4 flex flex-wrap">
                  {categoriesData.map(({ id, img, data, to }) => (
                    <>
                      <Link href={to} key={id}>
                        <div className="w-full p-4 md:w-1/2 lg:w-1/4">
                          <a className="relative block h-60 overflow-hidden">
                            <Image
                              alt="Categories Data Image"
                              className="block object-cover object-center cursor-pointer"
                              src={img}
                              layout="fill"
                            />
                          </a>
                          <div className="mt-2">
                            <h3 className="title-font font-bold text-gray-900">
                              {data}
                            </h3>
                          </div>
                        </div>
                      </Link>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
