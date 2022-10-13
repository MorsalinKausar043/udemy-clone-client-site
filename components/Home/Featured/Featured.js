import Link from "next/link";
import React from "react";
import developmentData from "./api/Api";

const Featured = () => {
  return (
    <>
      <section className="w-full h-auto flex justify-center items-center bg-gray-100 my-8 px-2 md:px-0 py-12">
        {/* main division  */}
        <div className="container">
          {/* title  */}
          <div className="px-2 md:px-0 flex flex-col mb-3 md:mb-8">
            <h1 className="text-xl md:text-2xl font-bold font-sans text-center md:text-left">
              Featured topics by category
            </h1>
          </div>
          {/* content  */}
          <div className="flex justify-around items-center flex-wrap">
            {/* first site  */}
            <div>
              <h1 className="text-lg font-bold mb-3">Development</h1>
              <ul>
                {developmentData.map(({ id, title, body, to }) => (
                  <>
                    <li key={id}>
                      <div className="mt-3 cursor-pointer">
                        <Link href={to}>
                          <h4 className="text-blue-700 font-semibold underline text-md">
                            {title}
                          </h4>
                        </Link>
                        <span className="text-sm text-gray-500">{body}</span>
                      </div>
                    </li>
                  </>
                ))}
              </ul>
            </div>

            {/* second site  */}
            <div>
              <h1 className="text-lg font-bold mb-3">Development</h1>
              <ul>
                {developmentData.map(({ id, title, body, to }) => (
                  <>
                    <li key={id}>
                      <div className="mt-3 cursor-pointer">
                        <Link href={to}>
                          <h4 className="text-blue-700 font-semibold underline text-md">
                            {title}
                          </h4>
                        </Link>
                        <span className="text-sm text-gray-500">{body}</span>
                      </div>
                    </li>
                  </>
                ))}
              </ul>
            </div>

            {/* third site  */}
            <div className="mt-4 md:mt-0">
              <h1 className="text-lg font-bold mb-3">Development</h1>
              <ul>
                {developmentData.map(({ id, title, body, to }) => (
                  <>
                    <li key={id}>
                      <div className="mt-3 cursor-pointer">
                        <Link href={to}>
                          <h4 className="text-blue-700 font-semibold underline text-md">
                            {title}
                          </h4>
                        </Link>
                        <span className="text-sm text-gray-500">{body}</span>
                      </div>
                    </li>
                  </>
                ))}
              </ul>
            </div>

            {/* fourth site  */}
            <div className="mt-4 md:mt-0">
              <h1 className="text-lg font-bold mb-3">Development</h1>
              <ul>
                {developmentData.map(({ id, title, body, to }) => (
                  <>
                    <li key={id}>
                      <div className="mt-3 cursor-pointer">
                        <Link href={to}>
                          <h4 className="text-blue-700 font-semibold underline text-md">
                            {title}
                          </h4>
                        </Link>
                        <span className="text-sm text-gray-500">{body}</span>
                      </div>
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </div>
          {/* button  */}
          <div>
            <button
              disabled="disabled"
              className="text-sm font-semibold mt-5 md:mt-10 px-3 py-2 border border-1 border-gray-600 hover:bg-gray-200 cursor-pointer transition-all rounded-md"
            >
              Explore More Topics
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
