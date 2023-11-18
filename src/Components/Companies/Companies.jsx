import React from "react";
import "./Companies.css";
const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src={require("../assets/prologis.png")} alt="" />
        <img src={require("../assets/tower.png")} alt="" />
        <img src={require("../assets/equinix.png")} alt="" />
        <img src={require("../assets/realty.png")} alt="" />
      </div>
    </section>
  );
};

export default Companies;
