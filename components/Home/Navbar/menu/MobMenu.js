import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { MdOutlineLanguage } from "react-icons/md";
import menuData, { nestedMenuData } from "./api/Api";

const MobMenu = () => {
  // hover and get menudata
  const [clickMenu, setClickMenu] = useState();
  const [active, setActive] = useState(false);
  // automatic get data
  // useEffect(() =>setHoverMenu("Development"),[]);
  return (
    <>
      <section className="flex">
        <div className="w-64 min-h-max overflow-hidden px-5 pt-5 pb-8 bg-white shadow-lg border border-1 border-gray-200">
          {/* login and signup button  */}
          <div className="flex flex-col justify-center items-start border-b-2 border-black pb-3">
            <Link href="/signin">
              <span className="mb-3 text-md text-indigo-600 cursor-pointer">
                Log In
              </span>
            </Link>
            <Link href="/signup">
              <span className="text-md text-indigo-600 cursor-pointer">
                Sign Up
              </span>
            </Link>
          </div>
          {/* main navigation  */}
          <div className="relative">
            <ul>
              {menuData.map((val, key) => (
                <>
                  <li
                    onClick={() => {
                      setClickMenu(val);
                      setActive(!active);
                    }}
                    key={key}
                    className="w-full relative flex justify-between items-center mt-4 hover:text-violet-500 transition-all cursor-pointer select-none"
                  >
                    <span className="text-md font-semibold">{val}</span>
                    <span>
                      <AiOutlineRight
                        className={`text-sm font-bolder transition-all ${
                          clickMenu === val && active ? "rotate-90" : "rotate-0"
                        }`}
                      />
                    </span>
                    {/* middle data  */}
                  </li>
                  {active && clickMenu === val
                    ? nestedMenuData
                        .filter((val, id) => val.type === clickMenu)
                        .map(({ title, id }) => (
                          <>
                            <>
                              <li
                                key={id}
                                className="w-full flex justify-between items-center mt-4 ml-2 hover:text-violet-500 transition-all cursor-pointer select-none"
                              >
                                <span className="text-md">{title}</span>
                                <span>
                                  <AiOutlineRight className="text-sm font-semibold" />
                                </span>
                              </li>
                            </>
                          </>
                        ))
                    : ""}
                </>
              ))}
            </ul>
          </div>
          {/* login and signup button  */}
          <div className="flex flex-col justify-center items-start border-t-2 border-black mt-3">
            <span className="mt-3 text-md">More from Udemy</span>
            <button disabled="disabled" className="mt-3 text-md cursor-pointer">
              Get The App
            </button>
            <button disabled="disabled" className="mt-3 text-md cursor-pointer">
              Invite Friends
            </button>
            <button disabled="disabled" className="mt-3 text-md cursor-pointer">
              Helps
            </button>
            <button
              disabled="disabled"
              className="mt-3 cursor-pointer border border-black py-1 px-2 flex flex-row justify-center items-center"
            >
              <MdOutlineLanguage className="text-md"/>
              <span className="ml-1 text-md">English</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobMenu;
