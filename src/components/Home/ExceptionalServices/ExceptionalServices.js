import React from "react";
import exceptImg from "../../../images/exceptionalServices.png";
import "./ExceptionalServices.css";

const ExceptionalServices = () => {
  return (
    <div className="row service-container">
      <div className="col-md-5">
        <img className="img-fluid" src={exceptImg} alt="" />
      </div>
      <div className="col-md-6 me-2 pt-5">
        <h3 className="mt-5 pt-5 pb-2">
          Exceptional Dental Care, <br /> On your terms
        </h3>
        <p className="text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo illo
          amet pariatur illum repellat error delectus dignissimos esse, dolores
          aliquid facere fugit doloremque obcaecati nam provident ab voluptas
          porro optio aspernatur vero labore? Excepturi fuga sit eveniet
          temporibus officiis ea, similique ab explicabo consectetur debitis
          nobis, rem accusantium laudantium assumenda.
        </p>
        <button className="btn-primary my-2">Book Now</button>
      </div>
    </div>
  );
};

export default ExceptionalServices;
