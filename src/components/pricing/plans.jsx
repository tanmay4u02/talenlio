import Section from "../shared/section";
import Container from "../shared/container/Container";
import ContainerLarge from "../shared/container/containerLarge/ContainerLarge";
import P from "../shared/p";
import "./styles.css";
import Heading from "../shared/heading";
import Switch from "../shared/switch/Switch";

const Plans = ({ discountOnYearly, billedAnually }) => {
  return (
    <Section>
      <ContainerLarge>
        <Container sx={{ textAlign: "center", maxWidth: "660px" }}>
          <P variant="title">Pricing Plan</P>
          <Heading>Simple, transparent pricing</Heading>
          <P variant="secondary-small">
            {billedAnually ? (
              "Billed Anually"
            ) : (
              <>
                {"Get "}
                <strong style={{ color: "black" }}>
                  {discountOnYearly}% off
                </strong>
                {" with annual paymentt"}
              </>
            )}
          </P>
          <Switch forCurrency={billedAnually} />
        </Container>
      </ContainerLarge>
    </Section>
  );
};

Plans.defaultProps = {
  discountOnYearly: "20",
  billedAnually: false,
};

export default Plans;
