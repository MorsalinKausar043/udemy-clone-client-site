import React, { useEffect, useState } from "react";
import courseList, { mainData } from "./courseList";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import ReactStars from "react-rating-stars-component";
import courseApi from "./api/Api";
import Defination from "./Defi/Defination";
import Image from "next/image";

const Courses = () => {
  // click slider main option
  const [click, setClick] = useState();
  // setclick useEffet
  useEffect(() => setClick("Python"), []);
  // responsive swiper
  const [widths, setWidths] = useState(0);
  useEffect(() => {
    function handleResize() {
      setWidths(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);
    window.addEventListener("mouseover", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
      window.removeEventListener("mouseover", handleResize);
    };
  }, []);

  return (
    <>
      <section className="w-full my-8 md:my-12 flex justify-center items-center flex-col">
        <div className="container">
          {/* title  */}
          <div className="px-2 md:px-0 flex flex-col">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold font-serif text-center md:text-left">
              A broad selection of courses
            </h1>
            <p className="text-lg">
              Choose from 204,000 online video courses with new additions
              published every month
            </p>
            {/* courselist  */}
            <ul className="mt-2 flex flex-wrap item-center select-none w-full md:w-4/6 lg:w-3/6 justify-between transition-all text-md text-gray-600 font-bold">
              {courseList.map(({ id, data }) => (
                <>
                  <li
                    key={id}
                    className={`cursor-pointer hover:text-black ${
                      data === click ? "text-black" : "text-gray-600"
                    }`}
                    onClick={() => setClick(data)}
                  >
                    {data}
                  </li>
                </>
              ))}
            </ul>
          </div>
          {/* body and Data  */}
          <div className="border border-1 border-gray-300 p-2 md:p-4 my-4">
            {/* data content  */}
            {mainData
              .filter((val, id) => val.type === click)
              .map(({ title, body, cls, btn, id }) => (
                <>
                  <div className="p-2 md:p-4 w-full md:w-5/6 lg:w-4/6" key={id}>
                    <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
                    <p className="my-2">{body}</p>
                    <button
                      type="none"
                      className={`font-bold py-2 px-4 border-b-4 rounded ${cls}`}
                    >
                      {btn}
                    </button>
                  </div>
                </>
              ))}
            {/* data slide  */}
            <div className="px-2 py-4">
              <Swiper
                slidesPerView={`${
                  widths < 420
                    ? 1
                    : widths < 620
                    ? 2
                    : widths < 992
                    ? 3
                    : widths < 1220
                    ? 4
                    : 5
                }`}
                spaceBetween={15}
                navigation={true}
                modules={[Pagination, Navigation]}
                loop
              >
                {courseApi
                  .filter((val, id) => val.type === click)
                  .map(
                    ({
                      id,
                      title,
                      image,
                      writter,
                      rating,
                      viwer,
                      mainPrice,
                      disPrice,
                      bestseller,
                    }) => (
                      <>
                        <SwiperSlide key={id}>
                          <div className="cursor-pointer">
                            {/* image  */}
                            <div className="w-full h-40 relative">
                              <Image
                                src={image}
                                alt="slider-data"
                                width="100%"
                                height="100%"
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                            {/* data  */}
                            <div>
                              <h4 className="text-md font-bold font-sans mt-1">
                                {title}
                              </h4>
                              <p className="text-xs font-semibold text-gray-500 capitalize">
                                {writter}
                              </p>
                              {/* rating  */}
                              <div className="flex items-center flex-row mt-1">
                                <p className="text-md font-bold text-red-700">
                                  {rating}
                                </p>
                                <p className="text-xs mb-1 ml-1">
                                  <ReactStars
                                    value={rating}
                                    size={24}
                                    activeColor="#e67e22"
                                    isHalf={true}
                                    edit={false}
                                  />
                                </p>
                                <p className="text-xs ml-1">({viwer})</p>
                              </div>
                              {/* price  */}
                              <div className="flex items-center flex-row">
                                <h2 className="text-md font-bold">
                                  ${disPrice}
                                </h2>
                                <h2 className="text-md line-through ml-2">
                                  ${mainPrice}
                                </h2>
                              </div>
                              {/* best sellter tag  */}
                              {bestseller && (
                                <div className="">
                                  <button
                                    disabled="disabled"
                                    className="text-sm font-semibold p-1 bg-amber-200"
                                  >
                                    Bestseller
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </SwiperSlide>
                      </>
                    )
                  )}
              </Swiper>
            </div>
          </div>
        </div>
        {/* why student learn udemy ? that defination  */}
        <div className="mt-11 mb-2 bg-slate-100 w-full flex justify-center items-center py-5">
          <Defination />
        </div>
        {/* main slider  */}
        <div className="w-full flex justify-center items-center my-8">
          <div className="container">
            {/* title  */}
            <div className="px-2 md:px-0 flex flex-col mb-3">
              <h1 className="text-xl md:text-2xl font-bold font-sans text-center md:text-left">
                A broad selection of courses
              </h1>
            </div>
            {/* content  */}
            <div className="px-2 py-4">
              <Swiper
                slidesPerView={`${
                  widths < 420
                    ? 1
                    : widths < 620
                    ? 2
                    : widths < 992
                    ? 3
                    : widths < 1220
                    ? 4
                    : 5
                }`}
                spaceBetween={15}
                navigation={true}
                modules={[Pagination, Navigation]}
                loop
              >
                {courseApi.map(
                  ({
                    id,
                    title,
                    image,
                    writter,
                    rating,
                    viwer,
                    mainPrice,
                    disPrice,
                    bestseller,
                  }) => (
                    <>
                      <SwiperSlide key={id}>
                        <div className="cursor-pointer">
                          {/* image  */}
                          <div className="w-full h-40 relative">
                            <Image
                              src={image}
                              alt="slider-data"
                              width="100%"
                              height="100%"
                              layout="fill"
                              objectFit="cover"
                            />
                          </div>
                          {/* data  */}
                          <div>
                            <h4 className="text-md font-bold font-sans mt-1">
                              {title}
                            </h4>
                            <p className="text-xs font-semibold text-gray-500 capitalize">
                              {writter}
                            </p>
                            {/* rating  */}
                            <div className="flex items-center flex-row mt-1">
                              <p className="text-md font-bold text-red-700">
                                {rating}
                              </p>
                              <p className="text-xs mb-1 ml-1">
                                <ReactStars
                                  value={rating}
                                  size={24}
                                  activeColor="#e67e22"
                                  isHalf={true}
                                  edit={false}
                                />
                              </p>
                              <p className="text-xs ml-1">({viwer})</p>
                            </div>
                            {/* price  */}
                            <div className="flex items-center flex-row">
                              <h2 className="text-md font-bold">${disPrice}</h2>
                              <h2 className="text-md line-through ml-2">
                                ${mainPrice}
                              </h2>
                            </div>
                            {/* best sellter tag  */}
                            {bestseller && (
                              <div className="">
                                <button
                                  disabled="disabled"
                                  className="text-sm font-semibold p-1 bg-amber-200"
                                >
                                  Bestseller
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </SwiperSlide>
                    </>
                  )
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
