import React from "react";
import "./Testimonial.css";
import wilsonImg1 from "../../../images/Ellipse 1.png";
import wilsonImg2 from "../../../images/Ellipse 2.png";
import wilsonImg3 from "../../../images/Ellipse 3.png";
import TestimonialComponent from "../TestimonialComponent/TestimonialComponent";
const testimonialData = [
  {
    name: "Winson Herry",
    address: "California",
    imgUrl: wilsonImg1,
  },
  {
    name: "Winson Herry",
    address: "California",
    imgUrl: wilsonImg2,
  },
  {
    name: "Winson Herry",
    address: "California",
    imgUrl: wilsonImg3,
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial my-5 container">
      <div className="container">
        <div className="my-5">
          <h5 className="testimonial-headline" style={{ color: "#6ACECE" }}>
            TESTIMONIAL
          </h5>
          <h3 className="testimonial-headline">
            What's Our Patients <br /> Says
          </h3>
        </div>
        <div id="testimonial-details" className="row">
          {testimonialData.map((details) => (
            <TestimonialComponent info={details}></TestimonialComponent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
