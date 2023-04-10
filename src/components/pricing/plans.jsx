import Section from "../shared/section";
import Container from "../shared/container/Container";
import ContainerLarge from "../shared/container/containerLarge/ContainerLarge";
import P from "../shared/p";
import "./styles.css";
import Heading from "../shared/heading";
import Switch from "../shared/switch/Switch";
import CardPlan from "../shared/card/cardPlan";

const Plans = ({ discountOnYearly, billedAnually, monthly, setMonthly }) => {
  return (
    <Section>
      <ContainerLarge>
        <Container
          sx={{ textAlign: "center", maxWidth: "660px", paddingBottom: "20px" }}
        >
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
          <Switch forCurrency={billedAnually} setMonthly={setMonthly} />
        </Container>
        <div className="row gx-4 gy-4">
          <div className="col-lg-4 col-md-6">
            <CardPlan
              title="Business"
              price="5"
              priceAnually="48"
              monthly={monthly}
              benefits={[
                "Publish up to 3 Job posts",
                "Connect up to 3 universities",
                "Email support",
                "Up to 3 users",
              ]}
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <CardPlan
              title="Growth"
              price="15"
              priceAnually="144"
              monthly={monthly}
              popular
              popularText="Save 20%"
              benefits={[
                "Publish up to 30 job posts",
                "Connect up to 30 universities",
                "Phone and email support from a dedicated team",
                "Unlimited users",
              ]}
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <CardPlan
              title="Enterprise"
              benefits={[
                "Publish unlimited Job posts",
                "Get connected with unlimited universities",
                "Email support",
                "Unlimited users",
              ]}
            />
          </div>
        </div>
      </ContainerLarge>
    </Section>
  );
};

Plans.defaultProps = {
  discountOnYearly: "20",
  billedAnually: false,
};

export default Plans;
