import React from "react";
import "./styles.css";

const Heading = ({ content, variant }) => {
  return <h2 className={variant}>{content}</h2>;
};

Heading.defaultProps = {
  variant: "heading-primary",
};

export default Heading;
