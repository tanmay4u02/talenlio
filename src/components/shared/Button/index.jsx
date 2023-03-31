import React from "react";
import "./styles.css";

function Button({ content, link, variant, sx }) {
  return (
    <a
      href={link}
      className={`button first ${
        variant === "primary" ? " bg-first third" : ""
      }`}
      target="_blank"
      rel="noreferrer"
      style={sx}
    >
      {content}
    </a>
  );
}

Button.defaultProps = {
  variant: "secondary",
};

export default Button;
