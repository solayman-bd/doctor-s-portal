import React from "react";
import Appointment from "../Appointment/Appointment";

import Blogs from "../Blogs/Blogs";
import ContactUs from "../ContactUs/ContactUs";
import Header from "../Header/Header";
import OurDoctors from "../OurDoctors/OurDoctors";
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
      <OurDoctors></OurDoctors>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
