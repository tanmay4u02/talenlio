import React from "react";
import Hero from "../../components/hero";
import HeroImage from "./assets/candidates.svg";

function Employers() {
  return (
    <Hero
      heading="‍Hiring made easy"
      subHeading="FOR EMPLOYERS"
      description="Recruit top talent for your company through universities and colleges by connecting with a network."
      heroImage={HeroImage}
    />
  );
}

export default Employers;
