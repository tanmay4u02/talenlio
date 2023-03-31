import React from "react";
import "./styles.css";

const P = ({ content, variant }) => {
  return <p className={variant}>{content}</p>;
};

P.defaultProps = {
  variant: "paragraph",
};

export default P;
