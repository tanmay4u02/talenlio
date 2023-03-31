import "./styles.css";
import P from "../../../components/shared/p";
import Heading from "../../../components/shared/heading";
import Button from "../../../components/shared/button";
import Wrap from "../../../components/shared/wrap";

const Content = ({ index, heading, description, link, side }) => {
  return (
    <div className={`content-block ${side === "left" ? "left" : "right"}`}>
      <Wrap variant="wrap-content">
        {index && (
          <P variant="title-copy">
            {index}
            <span style={{ color: "var(--secondary-color)" }}>.</span>
          </P>
        )}
        <Heading>{heading}</Heading>
        <P variant="paragraph">{description}</P>
        <Button content="Learn More" sx={{ display: "block" }} link={link} />
      </Wrap>
    </div>
  );
};

Content.defaultProps = {
  side: "left",
};

export default Content;
