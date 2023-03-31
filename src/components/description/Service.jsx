import Wrap from "../shared/wrap";
import P from "../shared/p";
import Heading from "../shared/heading";

import "./styles.css";

const Service = ({ title, heading, serviceImage, imageAlt }) => (
  <Wrap variant="title-wrap-copy">
    <P variant="title">{title}</P>
    <Heading variant="heading-primary h3-center">{heading}</Heading>
    <img
      src={serviceImage}
      loading="lazy"
      width="771"
      alt={imageAlt}
      style={{
        marginTop: "52px",
        marginBottom: "0px",
      }}
    ></img>
  </Wrap>
);

export default Service;
