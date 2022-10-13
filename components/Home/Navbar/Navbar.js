import React, { useState } from "react";
import style from "../../../styles/Home.module.css";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineLanguage } from "react-icons/md";
import Link from "next/link";
import Menu from "./menu/Menu";
import MobMenu from "./menu/MobMenu";
import { VscClose } from "react-icons/vsc";

const Navbar = () => {
  // teach on udemy button hover on show modal
  const [tech, setTeach] = useState(false);
  // on mouse enter the categoryis button
  const [hoverCate, setHoverCate] = useState(false);
  // set business udemy button hover on show modal
  const [business, setBusiness] = useState(false);
  // set responsive menubar 
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <section className="w-full z-10 h-auto px-2 md:px-4 py-4 bg-slate-50 shadow-lg ">
        <nav className="w-full flex justify-center flex-wrap items-center relative">
          {/* use responsive nevigation  */}
          {showMenu && (
            <div
              style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
              className="block md:hidden w-full absolute left-0 top-0 z-30"
            >
              <MobMenu />
              {/* close icon  */}
              <div
                onClick={() => setShowMenu(false)}
                className="absolute right-4 top-0 p-2 bg-slate-50 hover:bg-gray-200 transition-all rounded-full shadow-lg cursor-pointer flex justify-center items-center"
              >
                <span className="text-2xl font-semibold">
                  <VscClose />
                </span>
              </div>
            </div>
          )}
          {/* logo  */}
          <div className="flex items-center w-full justify-between md:w-auto px-4 md:px-0">
            <Link href="/">
              <div className="mb-2 md:mb-0 cursor-pointer">
                <h2 className="text-xl md:text-2xl font-bold">
                  <span className={style.logo}>U</span>demy
                </h2>
              </div>
            </Link>
            {/* cetagories  */}
            <div
              onMouseEnter={() => setHoverCate(true)}
              onMouseLeave={() => setHoverCate(false)}
              className="hidden md:block relative"
            >
              <button
                disabled={true}
                className="capitalize ml-0 md:ml-4 text-sm"
              >
                categories
              </button>

              {/* menu bar  */}
              {hoverCate && (
                <div className="absolute -left-10 top-6 z-20 transition-all">
                  <Menu />
                </div>
              )}
            </div>
            {/* menu button  */}
            <div className="block md:hidden ">
              <button
                onClick={() => setShowMenu(true)}
                className="capitalize ml-0 md:ml-4 text-sm"
              >
                <AiOutlineMenu className="text-lg" />
              </button>
            </div>
          </div>
          {/* input box and searchbar */}
          <div className="w-full md:w-3/6 ml-0 md:ml-6">
            <input
              type="text"
              name="search-box"
              placeholder="&#128269; Search For Anything"
              className="appearance-none block w-full text-gray-700 border border-black rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          {/* course option button  */}
          <div className="ml-0 md:ml-4 hidden md:block">
            {/* first button  */}
            <Link href="/">
              <button
                onMouseEnter={() => setTeach(true)}
                onMouseLeave={() => setTeach(false)}
                className="hover:text-indigo-500 transition-all text-sm font-semibold inline-block relative"
              >
                Udemy Business
                {/* absolute modal data  */}
                {tech && (
                  <>
                    <div className="absolute top-5 -right-12 bg-white p-2 z-20 shadow-md rounded-md w-60">
                      <h1 className="text-black hover:text-black md:text-lg font-bold">
                        Get your team access to over 17,000 top Udemy courses,
                        anytime, anywhere.
                      </h1>
                      <button
                        disabled="disabled"
                        className="bg-black text-white px-4 py-2 text-lg cursor-pointer"
                      >
                        try udmay Business
                      </button>
                    </div>
                  </>
                )}
              </button>
            </Link>
            {/* second button  */}
            <Link href="/">
              <button
                onMouseEnter={() => setBusiness(true)}
                onMouseLeave={() => setBusiness(false)}
                className="hover:text-indigo-500 ml-0 md:ml-4 transition-all text-sm font-semibold inline-block relative"
              >
                Udemy Business
                {/* absolute modal data  */}
                {business && (
                  <>
                    <div className="absolute top-5 -right-12 bg-white p-2 z-20 shadow-md rounded-md w-60">
                      <h1 className="text-black hover:text-black md:text-lg font-bold">
                        Turn what you know into an opportunity and reach
                        millions around the world.
                      </h1>
                      <button
                        disabled="disabled"
                        className="bg-black text-white px-4 py-2 text-lg cursor-pointer"
                      >
                        Learn More
                      </button>
                    </div>
                  </>
                )}
              </button>
            </Link>
          </div>
          {/* sing in , sign up and chekout , language button  */}
          {/* cart button  */}
          <div className="hidden md:flex justify-between items-center w-64 mt-1 ml-0 md:ml-6">
            <button disabled="disabled" className="text-2xl">
              <AiOutlineShoppingCart />
            </button>
            {/* login button  */}
            <Link href="signin">
              <button className="border border-1 border-black px-3 py-1 hover:bg-gray-200 transition-all font-bold">
                Log in
              </button>
            </Link>
            {/* singup buton  */}
            <Link href="/signup">
              <button className="border border-1 border-black px-3 py-1 bg-gray-900 text-white font-bold">
                Sign up
              </button>
            </Link>
            {/* language button  */}
            <button
              disabled="disabled"
              className="border border-1 border-black px-3 py-1 hover:bg-gray-200 transition-all text-2xl font-bold"
            >
              <MdOutlineLanguage />
            </button>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
