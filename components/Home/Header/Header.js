import React from 'react';
import style from "../../../styles/Home.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import headerData from "./api/Api";

const Header = () => {
  return (
    <>
      <section className="w-screen h-auto flex flex-col justify-center items-center">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={`container text-center md:text-left box-border`}
        >
          {headerData.map(({ id, title, para, className }) => (
            <>
              <SwiperSlide
                key={id}
                className={` ${className} text-center md:text-left box-border py-5 md:py-8 lg:py-12`}
              >
                <div>
                  <div className="p-2 md:px-20 md:py-16">
                    {/* header content  */}
                    <div className="w-2/3 md:w-3/5 lg:w-2/6 py-6 px-2 md:px-8 lg:px-12 lg:py-8 shadow-lg font-sans bg-white rounded-sm">
                      <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold">
                        {title}
                      </h1>
                      <p className="mt-2 md:mt-3 text-lg font-semibold">
                        {para}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default Header
