import React from "react";
import "./styles.css";

const P = ({ content, variant }) => {
  return <p className={`paragraph${variant && "-" + variant}`}>{content}</p>;
};

export default P;
