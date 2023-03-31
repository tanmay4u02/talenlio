import Section from "../../components/shared/section";
import ContainerLarge from "../../components/shared/container/containerLarge/ContainerLarge";
import Wrap from "../../components/shared/wrap";
import P from "../../components/shared/p";
import Heading from "../../components/shared/heading";

const Description = () => {
  return (
    <Section variant="section-blog">
      <Section variant="sub-section">
        <ContainerLarge>
          <Wrap variant="wrap-title">
            <P variant="title">OUR&nbsp;SERVICES</P>
            <Heading>End - to - End solution for Hiring and Placement</Heading>
          </Wrap>
        </ContainerLarge>
      </Section>
    </Section>
  );
};

export default Description;
