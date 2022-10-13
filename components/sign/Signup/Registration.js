import React, { useState } from "react";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../footer/Footer";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BiLockAlt, BiHide, BiShowAlt } from "react-icons/bi";
import Link from "next/link";
import Minifooter from "../api/Minifooter";

const Resigration = () => {
  const [showhideButton, setShowhideButton] = useState(false);
  const [showData, setShowData] = useState(false);
  return (
    <>
      <main className="flex w-full h-screen flex-col">
        <section>
          {/* navbar  */}
          <Navbar />
        </section>
        {/* login part  */}
        <section className="grow py-4 md:py-0">
          <div className="w-full h-full flex justify-center items-center flex-col">
            {/* title  */}
            <div className="w-72 md:w-96 text-md font-semibold pb-3 ">
              <h1 className="font-bold">Sign up and start learning</h1>
            </div>
            {/* form login  */}
            <div className="flex flex-col items-center justify-center mt-2 w-72 md:w-80">
              {/* full name form  */}
              <div className="w-full flex flex-row justify-start items-center border border-gray-500 py-3">
                <span className="inline-block p-1 text-xl text-gray-600">
                  <MdOutlineDriveFileRenameOutline />
                </span>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="grow ml-2 border-none outline-none"
                />
              </div>

              {/* email form  */}
              <div className="w-full flex flex-row justify-start mt-2 items-center border border-gray-500 py-3">
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
                className="w-full relative overflow-hidden flex mt-2 flex-row justify-start items-center border border-gray-500 py-3"
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
                <button className="ml-2 text-md font-bold">Sign Up</button>
              </div>
              {/* Term and condition button  */}
              <div
                onClick={() => alert("forget done")}
                className="flex justify-center items-center mt-2 py-3 px-2 md:px-0 w-72 md:w-80 "
              >
                <p className="text-xs">
                  By signing up, you agree to our{" "}
                  <span className="underline">Terms of Use</span> and
                  <span className="ml-1 underline">Privacy Policy</span>.
                </p>
              </div>
              {/* go Sign Up  */}
              <div className="flex justify-center items-center border-t border-gray-300 mt-2 py-3 px-3 md:px-4 w-72 md:w-80 ">
                <span className="text-sm">Already have an account?</span>
                <Link href="/signin">
                  <button className="ml-2 text-md  text-purple-700 underline font-bold">
                    Log In
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* footer section  */}
        <section className="flex flex-col">
          {/* upper footer  */}
          <Minifooter />
          {/* main footer  */}
          <Footer />
        </section>
      </main>
    </>
  );
};

export default Resigration;
