import React from "react";
import "./styles.css";

const P = ({ children, variant }) => {
  return <p className={variant}>{children}</p>;
};

P.defaultProps = {
  variant: "paragraph",
};

export default P;
