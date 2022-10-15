import React, { useState } from "react";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../footer/Footer";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BiLockAlt, BiHide, BiShowAlt } from "react-icons/bi";
import Link from "next/link";
import MiniFooter from "../api/Minifooter";

const Signin = () => {
  const [showhideButton,setShowhideButton] = useState(false);
  const [showData,setShowData] = useState(false);
  return (
    <>
      <main className="flex w-full h-screen flex-col">
        <section>
          {/* navbar  */}
          <Navbar />
        </section>
        {/* login part  */}
        <section className="grow py-8">
          <div className="w-full h-full flex justify-center items-center flex-col">
            {/* title  */}
            <div className="w-72 md:w-96 text-md font-semibold border-b border-gray-400 pb-3 mb-3">
              <h1 className="font-bold">Log in to your Udemy account</h1>
            </div>
            {/* facebook login button  */}
            <div
              onClick={() => alert("facebook event")}
              className="flex justify-start items-center mt-2 py-3 px-3 md:px-4 w-72 md:w-80 cursor-pointer shadow-md border-2 border-gray-300 hover:bg-slate-100 transition-all space-x-2"
            >
              <span className="text-2xl text-blue-600">
                <BsFacebook />
              </span>
              <button className="ml-2 text-md font-bold">
                Continue With Facebook
              </button>
            </div>
            {/* facebook login button  */}
            <div
              onClick={() => alert("google event")}
              className="flex justify-start items-center mt-2 py-3 px-3 md:px-4 w-72 md:w-80 cursor-pointer shadow-md border-2 border-gray-300 hover:bg-slate-100 transition-all space-x-2"
            >
              <span className="text-2xl">
                <FcGoogle />
              </span>
              <button className="ml-2 text-md font-bold">
                Continue With Google
              </button>
            </div>
            {/* facebook login button  */}
            <div
              onClick={() => alert("github event")}
              className="flex justify-start items-center mt-2 py-3 px-3 md:px-4 w-72 md:w-80 cursor-pointer shadow-md border-2 border-gray-300 hover:bg-slate-100 transition-all space-x-2"
            >
              <span className="text-2xl">
                <AiFillGithub />
              </span>
              <button className="ml-2 text-md font-bold">
                Continue With Github
              </button>
            </div>
            {/* form login  */}
            <div className="flex flex-col items-center justify-center mt-2 w-72 md:w-80">
              {/* email form  */}
              <div className="w-full flex flex-row justify-start items-center border border-gray-400 py-2">
                <span className="inline-block p-1 text-xl text-gray-600">
                  <MdEmail />
                </span>
                <input
                  type="email"
                  placeholder="Email"
                  className="grow ml-2 border-none outline-none"
                />
              </div>
              {/* password form  */}
              <div
                onMouseEnter={() => setShowhideButton(true)}
                onMouseLeave={() => setShowhideButton(false)}
                className="w-full relative overflow-hidden flex mt-2 flex-row justify-start items-center border border-gray-400 py-2"
              >
                <span className="inline-block p-1 text-xl text-gray-600">
                  <BiLockAlt />
                </span>
                <input
                  type={showData ? "text" : "password"}
                  placeholder="Password"
                  className="grow ml-2 border-none outline-none"
                />
                {/* hide and show button  */}
                <div
                  className={`absolute transition-all ${
                    showhideButton ? "right-3 " : "-right-10"
                  } top-auto`}
                >
                  {showData ? (
                    <BiShowAlt
                      onClick={() => setShowData(false)}
                      className="text-xl cursor-pointer"
                    />
                  ) : (
                    <BiHide
                      onClick={() => setShowData(true)}
                      className="text-xl cursor-pointer"
                    />
                  )}
                </div>
              </div>
              {/* login button  */}
              <div
                onClick={() => alert("submit done")}
                className="flex justify-center bg-purple-600 hover:bg-purple-700 transition-all text-white items-center mt-2 py-3 px-3 md:px-4 w-72 md:w-80 cursor-pointer shadow-md  space-x-2"
              >
                <button className="ml-2 text-md font-bold">Log In</button>
              </div>
              {/* forget button  */}
              <div
                onClick={() => alert("forget done")}
                className="flex justify-center items-center mt-2 py-3 px-3 md:px-4 w-72 md:w-80 "
              >
                <span>Or</span>
                <button className="ml-2 text-md text-purple-500 font-semibold">
                  Forget Password
                </button>
              </div>
              {/* go Sign Up  */}
              <div className="flex justify-center items-center mt-2 py-3 px-3 md:px-4 w-72 md:w-80 ">
                <span>Don Not have an account?</span>
                <Link href="/signup">
                  <button className="ml-2 text-md  text-purple-700 underline font-bold">
                    Sign Up
                  </button>
                </Link>
              </div>
              {/* Log in with your organization  */}
              <div className="flex justify-center items-center md:px-4 w-72 md:w-80 ">
                <button
                  disabled
                  className="text-md cursor-crosshair text-purple-700 font-bold"
                >
                  Log in with your organization
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* footer section  */}
        <section className="flex flex-col">
          {/* upper footer  */}
          <MiniFooter />
          {/* main footer  */}
          <Footer />
        </section>
      </main>
    </>
  );
};

export default Signin;
