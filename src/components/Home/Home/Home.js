import React from "react";
import Appointment from "../Appointment/Appointment";
import Header from "../Header/Header";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div style={{ maxWidth: "100%", width: "98%" }}>
      <Header></Header>
      <Services></Services>
      <Appointment></Appointment>
    </div>
  );
};

export default Home;
