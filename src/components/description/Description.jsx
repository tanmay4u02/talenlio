import Section from "../shared/section";
import ContainerBg from "../shared/container/containerBg/ContainerBg";
import Wrap from "../shared/wrap";
import P from "../shared/p";
import Heading from "../shared/heading";
import Content from "./Content";

import "./styles.css";
import ExampleImage from "../assets/rectangle-1684.svg";
import Service from "./Service";

const Description = ({
  serviceTitle,
  serviceHeading,
  serviceImage,
  serviceImageAlt,
  title,
  heading,
  contents,
}) => {
  return (
    <Section variant="section-content">
      {serviceImage && (
        <Service
          title={serviceTitle}
          heading={serviceHeading}
          serviceImage={serviceImage}
          imageAlt={serviceImageAlt}
        />
      )}
      <ContainerBg>
        <Wrap>
          <P variant="title">{title}</P>
          <Heading>{heading}</Heading>
        </Wrap>
        {contents.map((element, index) => (
          <div
            className={`${index % 2 === 0 ? "column-wrap-reversed" : "d-flex"}`}
            style={
              element.marginBottom
                ? {
                    marginBottom: element.marginBottom,
                  }
                : {}
            }
            key={index}
          >
            <div className="image-block">
              <img
                src={element.image}
                alt={element.alt}
                width="315"
                loading="lazy"
              />
            </div>
            <Content
              index={element.index ? element.index : undefined}
              heading={element.heading}
              description={element.description}
              link={element.link}
              side={element.side ? element.side : "left"}
            />
          </div>
        ))}
        {/* <div className="column-wrap-reversed">
          <div className="image-block">
            <img
              src={EmployerImg}
              alt="employer descr-img"
              width="315"
              loading="lazy"
            />
          </div>
          <Content
            index="1"
            heading="Employer creates Jobs"
            description="Talenlio enables companies to recruit top talent by creating jobs, managing interviews and connecting with colleges and universities."
            link="/for-employers"
          />
        </div>
        <div className="d-flex" style={{ marginBottom: "140px" }}>
          <div className="image-block">
            <img
              src={UniversityImg}
              alt="university descr-img"
              width="315"
              loading="lazy"
            />
          </div>
          <Content
            index="2"
            heading="Universities manage campus drives"
            description="Campus placement drives can be seamlessly managed by University and college placement centres, helping students to get placed at different companies"
            link="/for-universities"
            side="right"
          />
        </div>
        <div className="column-wrap-reversed" style={{ marginBottom: "0px" }}>
          <div className="image-block">
            <img
              src={CandidateImg}
              alt="candidate descr-img"
              width="315"
              loading="lazy"
            />
          </div>
          <Content
            index="3"
            heading="Candidates can apply for jobs"
            description="Candidates can create their Resumes and Personal websites to showcase their skills and apply for open jobs and Campus placements."
            link="/for-candidates"
          />
        </div> */}
      </ContainerBg>
    </Section>
  );
};

Description.defaultProps = {
  contents: [
    {
      image: ExampleImage,
      alt: "example image",
      index: 1,
      heading: "example",
      description:
        "Talenlio enables companies to recruit top talent by creating jobs, managing interviews and connecting with colleges and universities.",
      link: "/for-employers",
    },
  ],
};

export default Description;
