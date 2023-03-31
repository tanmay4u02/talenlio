import React from "react";
import "./styles.css";
import H1 from "../shared/h1";
import P from "../shared/p";
import Button from "../shared/button";

const Hero = ({ heading, subHeading, description, heroImage }) => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="d-flex">
          <div className="hero-block">
            <div className="content-block-hero">
              <H1 content={heading} />
              <P variant="paragraph-hero">{description}</P>
              <div className="btn-wrap-hero">
                <Button
                  content="Join Waitlist"
                  link="https://app.talenlio.com/auth/user-type"
                  variant="primary"
                />
                <Button
                  content="Watch Video"
                  link="https://youtu.be/axjp1bjy5eI"
                  style={{ marginLeft: "22px" }}
                />
              </div>
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
