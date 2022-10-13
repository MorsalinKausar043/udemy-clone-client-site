import Head from "next/head";
import React from "react";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        {/* title  */}
        <title>{title}</title>
        {/* favicon  */}
        <link
          rel="icon"
          type="image/x-icon"
          href="https://i.ibb.co/Rvb6Q09/unnamed-1.png"
        ></link>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
