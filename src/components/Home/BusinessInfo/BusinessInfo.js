import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import {
  faClock,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const businessInfo = [
  {
    title: "Opening Hour",
    description: "lorem we are oping job coming",
    background: "primary",
    icon: faClock,
  },
  {
    title: "Visit Our Location",
    description: "lorem we are oping job coming",
    background: "dark",
    icon: faLocationArrow,
  },
  {
    title: "Contact Us",
    description: "lorem we are oping job coming",
    background: "primary",
    icon: faPhone,
  },
];

const BusinessInfo = () => {
  return (
    <section className="d-flex justify-content-center">
      <div className="row w-75">
        {businessInfo.map((info) => (
          <InfoCard info={info}></InfoCard>
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
