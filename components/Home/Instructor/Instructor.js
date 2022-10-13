import React from "react";

const Instructor = ({ id, title, body, image, btn, order, cls }) => {
  return (
    <>
      <section className="w-full flex justify-center items-center px-2 py-4 md:py-10">
        {/* main div  */}
        <div className="container flex justify-center items-center">
          {/* component  */}
          <div className="flex justify-around flex-col md:flex-row">
            {/* image  */}
            <div
              className={`w-full md:w-2/4 h-auto ${
                order === true ? "order-1 md:order-2" : "order-2"
              }`}
            >
              <img src={image} alt="Instractor-Image" className="w-full full" />
            </div>
            {/* content  */}
            <div
              className={`w-96 flex flex-col justify-center items-center md:items-start px-2 mt-4 md:mt-0 ${
                order === true ? "order-2 md:order-1" : "order-2"
              }`}
            >
              <h1 className={`text-2xl lg:text-3xl font-bold ${cls}`}>
                {title}
              </h1>
              <p className="my-2 text-lg text-center md:text-left">{body}</p>
              <button
                disabled="disabled"
                className="text-md font-semibold mt-3 px-4 py-3 bg-black text-white border border-1  cursor-pointer "
              >
                {btn}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Instructor;
