import React from "react";
import Hero from "../../components/hero";
import HeroImage from "./assets/candidates.svg";
import Description from "../../components/description/Description";

import serviceImage from "./assets/frame-11604.svg";
import first from "./assets/group-11376.svg";
import second from "./assets/group-11378.svg";
import third from "./assets/group-11380.svg";
import PageConclusion from "../../components/layout/pageConclusion/PageConclusion";

function Employers() {
  return (
    <>
      <Hero
        heading="‍Hiring made easy"
        subHeading="FOR EMPLOYERS"
        description="Recruit top talent for your company through universities and colleges by connecting with a network."
        heroImage={HeroImage}
      />
      <Description
        serviceTitle="Recruiting Made Simple"
        serviceHeading="Campus Hiring and online Recruitment infrastructure"
        serviceImage={serviceImage}
        serviceImageAlt="employer service"
        title="Employer Features"
        heading="Automated Job Post and Interview Process"
        contents={[
          {
            image: first,
            alt: "alt",
            heading: "Evaluations on every Hiring round",
            description:
              "Hire candidates hassle-free by evaluating them based on their skills, and conducting interviews with multiple Interview panel members and members of the team.",
            width: "60%",
            padding: "0px",
            imageWidth: "100%",
          },
          {
            image: second,
            alt: "alt",
            heading: "One - click Job Post",
            description:
              "Create Job Posts with ease. Publish a personal career page for your company to share job postings easliy.",
            width: "60%",
            padding: "0px",
            imageWidth: "100%",
            side: "right",
            marginBottom: "120px",
          },
          {
            image: third,
            alt: "alt",
            heading: "Set custom Configuration for Hiring",
            description:
              "Configurations customised to your job requirements to make it easier for interview panels to conduct interviews.",
            width: "60%",
            padding: "0px",
            imageWidth: "100%",
            marginBottom: "0px",
          },
        ]}
      />
      <PageConclusion
        content="Explore the new way of hiring!"
        buttonText="Join waitlist"
        buttonLink="https://app.talenlio.com/auth/user-type"
      />
    </>
  );
}

export default Employers;
