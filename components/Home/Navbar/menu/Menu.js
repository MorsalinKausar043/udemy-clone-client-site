import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import menuData, { nestedMenuData } from "./api/Api";

const Menu = () => {
  // hover and get menudata
  const [hoverMenu, setHoverMenu] = useState();
  // automatic get data
  // useEffect(() =>setHoverMenu("Development"),[]);
  return (
    <>
      <section className="flex">
        <div className="w-64 h-auto px-5 pt-5 pb-8 bg-white shadow-lg border border-1 border-gray-200">
          <div className="relative">
            <ul>
              {menuData.map((val, key) => (
                <>
                  <li
                    onMouseEnter={() => setHoverMenu(val)}
                    key={key}
                    className="w-full flex justify-between items-center mt-4 hover:text-violet-500 transition-all cursor-pointer select-none"
                  >
                    <span className="text-md font-semibold">{val}</span>
                    <span>
                      <AiOutlineRight className="text-sm font-semibold" />
                    </span>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
        {/* middle data  */}
        {hoverMenu && (
          <div className="w-64 h-auto px-5 pt-5 pb-8 bg-white shadow-lg border border-1 border-gray-200">
            <div className="relative">
              <ul>
                {nestedMenuData
                  .filter((val, key) => val.type === hoverMenu)
                  ?.map((val, key) => (
                    <>
                      <li
                        key={key}
                        className="w-full flex justify-between items-center mt-4 hover:text-violet-500 transition-all cursor-pointer select-none"
                      >
                        <span className="text-md font-semibold">
                          {val.title}
                        </span>
                        <span>
                          <AiOutlineRight className="text-sm font-semibold" />
                        </span>
                      </li>
                    </>
                  ))}
              </ul>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Menu;
