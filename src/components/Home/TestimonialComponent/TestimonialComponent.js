import React from "react";

const TestimonialComponent = ({ info }) => {
  return (
    <div className="col-md-4">
      <div style={{ width: "95%" }} className="border shadow card">
        <div className="py-3 card-body">
          <p className="py-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
            eaque magnam amet. Enim at soluta quidem quae asperiores ipsa dolor.
          </p>
        </div>
        <div className="row pb-3">
          <div className="col-md-4 ">
            <div className="px-2 pb-2">
              <img src={info.imgUrl} alt="" />
            </div>
          </div>

          <div className="col-md-8">
            <p className="text-primary">{info.name}</p>
            <small>{info.address}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
