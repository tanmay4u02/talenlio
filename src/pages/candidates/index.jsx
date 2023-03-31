import React from "react";
import Hero from "../../components/hero";
import HeroImage from "./assets/resume-writing-service.svg";
import Description from "../../components/description/Description";

import serviceImage from "./assets/dsdfds.svg";
import first from "./assets/frame-11521-p-800.png";
import second from "./assets/group-11384.svg";
import third from "./assets/group-11385.svg";

function Candidates() {
  return (
    <>
      <Hero
        heading="‍Apply for your jobs professionally"
        subHeading="For Candidates"
        description="Connect seamlessly with employers and placement drives at your university with a modern resume, cover letters and dedicated website."
        heroImage={HeroImage}
      />
      <Description
        serviceTitle="JOB-HUNTING MADE SIMPLE"
        serviceHeading="Create your resume, showcase your skills, and Apply for jobs easily"
        serviceImage={serviceImage}
        serviceImageAlt="candidate service"
        title="Candidate Features"
        heading="All - in - one resume builder and job tracking"
        contents={[
          {
            image: first,
            alt: "alt",
            heading: "Build a professional Resume",
            description:
              "Share your modern resume with potential employers by using a template with essential data",
            width: "60%",
            padding: "0px",
            imageWidth: "100%",
          },
          {
            image: second,
            alt: "alt",
            heading: "Section - wise Resume filling",
            description:
              "Premade resume sections will help you to create a professionally acclaimed resume quickly and easily",
            width: "60%",
            padding: "0px",
            imageWidth: "100%",
            side: "right",
            marginBottom: "120px",
          },
          {
            image: third,
            alt: "alt",
            heading: "Get your own Personal Website",
            description:
              "Set up a personal website with your resume data and share link with employers",
            width: "60%",
            padding: "0px",
            imageWidth: "100%",
            marginBottom: "0px",
          },
        ]}
      />
    </>
  );
}

export default Candidates;
