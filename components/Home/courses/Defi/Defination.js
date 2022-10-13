import React from 'react';
import { BiPlay } from "react-icons/bi";

const Defination = () => {
  return (
    <>
      <section className="container">
        {/* main part  */}
        <div className="w-full flex justify-around items-center flex-wrap px-2 md:px-0">
          {/* title part  */}
          <div className="mb-3 flex justify-center items-center md:hidden">
            <h3 className="text-lg font-bold">Why learn on Udemy?</h3>
          </div>
          {/* first part  */}
          <div className="w-full md:w-96 flex justify-start items-center">
            {/* icon  */}
            <div className="p-2 rounded-full bg-slate-200">
              <BiPlay className="text-2xl" />
            </div>
            {/* content  */}
            <div>
              <h1 className="text-md font-bold ml-3">
                Learn in-demand skills with over 204,000 video courses
              </h1>
            </div>
          </div>
          {/* middle part  */}
          <div className="w-full md:w-96 flex justify-center md:justify-start items-center my-4 md:my-0 ">
            {/* icon  */}
            <div className="p-2 rounded-full bg-slate-200">
              <BiPlay className="text-2xl" />
            </div>
            {/* content  */}
            <div>
              <h1 className="text-md font-bold ml-3">
                Choose courses taught by real-world experts
              </h1>
            </div>
          </div>
          {/* last part  */}
          <div className="w-full md:w-96 flex justify-start items-center">
            {/* icon  */}
            <div className="p-2 rounded-full bg-slate-200">
              <BiPlay className="text-2xl" />
            </div>
            {/* content  */}
            <div>
              <h1 className="text-md font-bold ml-3">
                Learn at your own pace, with lifetime access on mobile and
                desktop
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Defination