import React from "react";
import "./styles.css";

const Heading = ({ children, variant }) => {
  return <h2 className={variant}>{children}</h2>;
};

Heading.defaultProps = {
  variant: "heading-primary",
};

export default Heading;
