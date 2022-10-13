import React from "react";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/Home/Navbar/Navbar";
import Footer from "../components/footer/Footer";
import Link from "next/link";

const Error = () => {
  return (
    <>
      <Layout title="Online Courses - Page Not available">
        <section className="w-screen h-screen flex flex-col ">
          {/* natbar define  */}
          <Navbar />
          <div className="w-full flex flex-col justify-center items-center grow ">
            <div className="">
              <Link href="/">
                <img
                  src="https://i.ibb.co/HrMcrYd/error-desktop-v1.jpg"
                  alt="error-pic"
                  className="w-48 h-48"
                />
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-lg md:text-xl font-bold">
                We can’t find the page you’re looking for
              </h1>
              <p>Visit our support page for further assistance.</p>
            </div>
          </div>
          {/* footer define  */}
          <Footer />
        </section>
      </Layout>
    </>
  );
};

export default Error;
