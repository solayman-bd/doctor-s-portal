import React from "react";

import cavityImg from "../../../images/cavity.png";
import fluorideImg from "../../../images/flourite.png";
import whiteningImg from "../../../images/whiteining.png";
import ExceptionalServices from "../ExceptionalServices/ExceptionalServices";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import "./Services.css";
const servicesData = [
  {
    image: fluorideImg,
    name: "Fluoride Treatment",
  },
  {
    image: cavityImg,
    name: "Cavity Filling",
  },
  {
    image: whiteningImg,
    name: "Teeth Whitening",
  },
];

const Services = () => {
  return (
    <section className="mt-5 services-container">
      <div className="text-center">
        <h5 style={{ color: "#1CC7C1" }}>OUR SERVICES</h5>
        <h2>Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="row w-75 mt-5 pt-5">
          {servicesData.map((service) => (
            <ServiceDetails service={service}></ServiceDetails>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="w-75 mt-5 pt-5">
          <ExceptionalServices></ExceptionalServices>
        </div>
      </div>
    </section>
  );
};

export default Services;
