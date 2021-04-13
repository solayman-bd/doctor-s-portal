import React from "react";
import doctorImg from "../../../images/doctor-sm.png";

import Doctor from "../Doctor/Doctor";

const doctorsData = [
  {
    name: "Dr. Caudi",
    mobile: 61012514523254,
    img: doctorImg,
  },
  {
    name: "Dr. Caudi",
    mobile: 61012514523254,
    img: doctorImg,
  },
  {
    name: "Dr. Caudi",
    mobile: 61012514523254,
    img: doctorImg,
  },
];

const OurDoctors = () => {
  return (
    <section id="our-doctor" className="my-5 container">
      <div className="section-header text-center py-2">
        <h5 style={{ color: "#5FC7C7", fontSize: "2rem" }}>Our Doctor</h5>
      </div>
      <div className="row section-content mx-auto">
        {doctorsData.map((data) => (
          <Doctor doctorInfo={data}></Doctor>
        ))}
      </div>
    </section>
  );
};

export default OurDoctors;
