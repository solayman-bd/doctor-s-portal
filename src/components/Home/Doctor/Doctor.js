import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Doctor = (props) => {
  const { name, mobile, img } = props.doctorInfo;
  return (
    <div className="col-4 d-flex justify-content-center my-3">
      <div className="card ">
        <div class="card" style={{ width: "18rem" }}>
          <img src={img} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">
              <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon> {mobile}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
