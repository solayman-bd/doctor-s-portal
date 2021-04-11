import React from "react";
import chair from "../../../images/chair.png";
import "./HeaderMain.css";

const HeaderMain = () => {
  return (
    <main
      style={{ height: "600px" }}
      className="row d-d-flex align-items-center"
    >
      <div className="col-md-4 offset-md-1">
        <h1 className="headline">Your New Smile</h1>
        <h1 className="headline">Starts Here</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
          corrupti cumque nemo aut fugit expedita eveniet illo fuga nihil
          facere, rem aperiam dignissimos odit officia quis iusto itaque minus
          deserunt.
        </p>
        <button className="btn-primary">Get Appointment</button>
      </div>
      <div className="col-md-6">
        <img src={chair} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
