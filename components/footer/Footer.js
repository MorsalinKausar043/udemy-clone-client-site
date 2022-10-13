import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "../../styles/Home.module.css";
import leftData, {middleData, lastData} from "./api/Api";
import { MdOutlineLanguage } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <section className="w-full h-auto text-white bg-black p-2 md:p-6 lg:p-8">
        {/* top side footer  */}
        <div className="w-full flex justify-around flex-wrap mb-4 md:mb-6">
          {/* top left side footer  */}
          <div className="flex flex-wrap justify-between items-center w-full md:w-4/5 lg:w-2/5">
            {/* top left 1st list  */}
            <div className="text-sm">
              <ul>
                {leftData.map(({ id, data, to }) => (
                  <>
                    <Link key={id} href={to}>
                      <li className="cursor-pointer mt-1 hover:underline transition-all">
                        {data}
                      </li>
                    </Link>
                  </>
                ))}
              </ul>
            </div>
            {/* top left 2nd list  */}
            <div className="text-sm">
              <ul>
                {middleData.map(({ id, data, to }) => (
                  <>
                    <Link key={id} href={to}>
                      <li className="cursor-pointer mt-1 hover:underline transition-all">
                        {data}
                      </li>
                    </Link>
                  </>
                ))}
              </ul>
            </div>
            {/* top left 3rd list  */}
            <div className="text-sm">
              <ul>
                {lastData.map(({ id, data, to }) => (
                  <>
                    <Link key={id} href={to}>
                      <li className="cursor-pointer mt-1 hover:underline transition-all">
                        {data}
                      </li>
                    </Link>
                  </>
                ))}
              </ul>
            </div>
          </div>
          {/* top right side footer  */}
          <div className="mt-4 md:mt-0">
            <button
              className="py-2 px-3 border border-1 border-white rounded-sm flex flex-row items-center "
              type="none"
            >
              <span className="mr-2">
                <MdOutlineLanguage className="text-white text-lg" />
              </span>
              English
            </button>
          </div>
        </div>
        {/* bottom side footer  */}
        <div className="flex flex-wrap justify-between items-center w-full p-2 md:px-20">
          {/* left side bottom footer and logo site  */}
          <div className="flex justify-start items-center">
            <h2 className="text-xl md:text-2xl font-semibold">
              <span className={style.logo}>U</span>demy
            </h2>
          </div>
          {/* right side bottom footer  */}
          <div>
            <span className="text-sm">&copy; 2022 Udemy, Inc.</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
