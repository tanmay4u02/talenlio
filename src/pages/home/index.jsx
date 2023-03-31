import React from "react";
import Hero from "../../components/hero";
import HeroImage from "./assets/job-interview.svg";
import Description from "./Description";

function Home() {
  return (
    <>
      <Hero
        heading="Showcase talents and uncover opportunities"
        subHeading=""
        description="Talenlio helps streamline campus placements for universities, makes recruitment seamless for employers and helps candidates land their dream job."
        heroImage={HeroImage}
      />
      <Description />
    </>
  );
}

export default Home;
