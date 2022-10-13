import React from "react";
import Categories from "../categories/Categories";
import Footer from "../footer/Footer";
import Layout from "../Layout/Layout";
import Courses from "./courses/Courses";
import Featured from "./Featured/Featured";
import Header from "./Header/Header";
import Instructor from "./Instructor/Instructor";
import Navbar from "./Navbar/Navbar";
import BennerApi , {Benner2Api,Benner3Api} from "./Instructor/api/Api";
import Sponsor from "./sponsor/Sponsor";
Layout

const Home = () => {
  return (
    <>
      <Layout title="Online Courses - Learn Anything">
        <main className="overflow-x-hidden">
          {/* navbar  */}
          <Navbar />
          {/* header  */}
          <Header />
          {/* courses  */}
          <Courses/>
          {/* categories  */}
          <Categories/>
          {/* Fetured  */}
          <Featured/>
          {/* Instractor  */}
          <Instructor {...BennerApi}/>
          {/* sponsor companys division  */}
          <Sponsor/>
          {/* udemy busniess course benner  */}
          <Instructor {...Benner3Api}/>
          {/* Instractor main under the section  */}
          <Instructor {...Benner2Api}/>
          {/* footer  */}
          <Footer/>
        </main>
      </Layout>
    </>
  );
};

export default Home;
