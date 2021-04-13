import React from "react";

const ServiceDetails = ({ service }) => {
  return (
    <div className="text-center col-md-4">
      <img style={{ height: "50px" }} src={service.image} alt="" />
      <h5 className="my-3">{service.name}</h5>
      <small className="text-secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, natus?
      </small>
    </div>
  );
};

export default ServiceDetails;
