import Section from "../shared/section";
import Container from "../shared/container/Container";
import ContainerLarge from "../shared/container/containerLarge/ContainerLarge";
import P from "../shared/p";
import "./styles.css";
import Heading from "../shared/heading";
import Switch from "../shared/switch/Switch";
import CardPlan from "../shared/card/cardPlan";

const Plans = ({
  discountOnYearly,
  billedAnually,
  plans,
  monthly,
  setMonthly,
}) => {
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
        <div className="row gx-4 gy-4 justify-content-center">
          {plans.map((plan, ind) => (
            <div className="col-lg-4 col-md-6" key={ind}>
              <CardPlan
                title={plan.title}
                price={plan.price}
                priceAnually={plan.priceAnually}
                priceINR={plan.priceINR}
                popular={plan.popular}
                popularText={plan.popularText}
                monthly={monthly}
                benefits={plan.benefits}
                forCurrency={billedAnually}
              />
            </div>
          ))}
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
