import React from "react";
import "./styles.css";
import Button from "../shared/Button";

const Hero = ({ heading, subHeading, description, heroImage }) => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="d-flex">
          <div className="hero-block">
            <div className="content-block-hero">
              <h1>{heading}</h1>
              <p>{description}</p>
            </div>
          </div>
          <div className="hero-image-wrap">
            <img src={heroImage} className="hero-image" alt="job interview" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
