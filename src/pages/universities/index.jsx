import React from "react";
import Hero from "../../components/hero";
import HeroImage from "./assets/global-online-education.svg";
import Description from "../../components/description/Description";

import serviceImage from "./assets/sdsa.svg";
import first from "./assets/group-11382.svg";
import second from "./assets/group-11383.svg";
import third from "./assets/group-11376.svg";

function universities() {
  return (
    <>
      <Hero
        heading="‍Streamlined Campus Placements Drives"
        subHeading="For universities"
        description="Organise hassle-free digital campus placement drives for your universities and colleges."
        heroImage={HeroImage}
      />
      <Description
        serviceTitle="Placement drives made easy"
        serviceHeading="Batch-wise Placement Drive and candidate management"
        serviceImage={serviceImage}
        serviceImageAlt="university service"
        title="University Features"
        heading="Automated and networked Placement System"
        contents={[
          {
            image: first,
            alt: "alt",
            heading: "Invite candidates to groups",
            description:
              "Organize and manage your Placement Drive easily by inviting candidates and segmenting them into batches",
            width: "60%",
            padding: "0px",
            imageWidth: "100%",
          },
          {
            image: second,
            alt: "alt",
            heading: "Create campus drives ‍and share job posts",
            description:
              "Easliy monitor student data with Campus Placement drives",
            width: "60%",
            padding: "0px",
            imageWidth: "100%",
            side: "right",
            marginBottom: "120px",
          },
          {
            image: third,
            alt: "alt",
            heading: "Assess Student performance",
            description:
              "Evaluate students' interview skills and improve them by analyzing their performance during interviews",
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

export default universities;
