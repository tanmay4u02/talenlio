import Section from "../../../components/shared/section";
import ContainerBg from "../../../components/shared/container/containerBg/ContainerBg";
import Wrap from "../../../components/shared/wrap";
import P from "../../../components/shared/p";
import Heading from "../../../components/shared/heading";
import Content from "./Content";

import "./styles.css";
import EmployerImg from "./assets/job-offer.svg";
import UniversityImg from "./assets/global-online-education.svg";
import CandidateImg from "./assets/resume-writing-service.svg";

const Description = () => {
  return (
    <Section variant="section-content">
      <ContainerBg>
        <Wrap>
          <P variant="title">How it Works</P>
          <Heading>Connecting Employers, Universities and Candidates</Heading>
        </Wrap>
        <div className="column-wrap-reversed">
          <div className="image-block">
            <img src={EmployerImg} alt="employer descr-img" width="315" />
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
            <img src={UniversityImg} alt="university descr-img" width="315" />
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
            <img src={CandidateImg} alt="candidate descr-img" width="315" />
          </div>
          <Content
            index="3"
            heading="Candidates can apply for jobs"
            description="Candidates can create their Resumes and Personal websites to showcase their skills and apply for open jobs and Campus placements."
            link="/for-candidates"
          />
        </div>
      </ContainerBg>
    </Section>
  );
};

export default Description;
