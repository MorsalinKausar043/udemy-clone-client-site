import style from "../../../../styles/Home.module.css";

const BennerApi = {
  id: 1,
  title: "Become an instructor",
  body: "Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.",
  image: "https://i.ibb.co/bWXzc9j/instructor-mobile-v3.jpg",
  btn: "Start Teaching Today",
  cls:"",
  order:false,
};
const Benner2Api = {
  id: 2,
  title: "Transform your life through education",
  body: "Learners around the world are launching new careers, advancing in their fields, and enriching their lives.",
  image: "https://i.ibb.co/8zS5X8R/transform-mobile-v3.jpg",
  btn: "Find Out How",
  cls:"",
  order:false,
};
const Benner3Api = {
  id: 3,
  title: `Udemy Business`,
  body: "Get unlimited access to 17,000+ of Udemy’s top courses for your team. Learn and improve skills across business, tech, design, and more.",
  image: "https://i.ibb.co/M8MpVj3/ub-mobile-v3.jpg",
  btn: "Get Udemy Busines",
  cls: `${style.logo}`,
  order: true,
};

export default BennerApi;
export {Benner2Api, Benner3Api};