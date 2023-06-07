import React from "react";
import amazon from "../amazon.jpg";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <div className="main">
      <div className="main_container">
        <img className="hreo_image" src={amazon} alt="" />
      </div>
    </div>
  );
}
