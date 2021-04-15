import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Blogs from "../Blogs/Blogs";
import ContactUs from "../ContactUs/ContactUs";
import Header from "../Header/Header";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import OurDoctors from "../OurDoctors/OurDoctors";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div style={{ maxWidth: "100%", width: "98%" }}>
      <Header></Header>
      <Services></Services>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <Blogs></Blogs>
      <OurDoctors></OurDoctors>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
