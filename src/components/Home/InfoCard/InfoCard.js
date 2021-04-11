import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InfoCard.css";

const InfoCard = ({ info }) => {
  return (
    <div className="col-md-4">
      <div
        className={`d-flex info-container justify-content-center info-${info.background}`}
      >
        <div className="mx-2">
          <FontAwesomeIcon icon={info.icon} className="info-icon text-white" />
        </div>
        <div>
          <h5 className="text-white">{info.title}</h5>
          <small className="text-white">{info.description}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
