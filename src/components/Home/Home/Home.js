import React from "react";
import Appointment from "../Appointment/Appointment";

import Blogs from "../Blogs/Blogs";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div style={{ maxWidth: "100%", width: "98%" }}>
      <Header></Header>
      <Services></Services>
      <Appointment></Appointment>
      <Testimonial></Testimonial>
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
