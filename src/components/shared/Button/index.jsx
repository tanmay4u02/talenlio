import React from "react";
import "./styles.css";

function Button({ content, link, variant, style }) {
  return (
    <a
      href={link}
      className={`button first ${
        variant === "primary" ? " bg-first third" : ""
      }`}
      target="_blank"
      rel="noreferrer"
      style={style}
    >
      {content}
    </a>
  );
}

Button.defaultProps = {
  variant: "secondary",
};

export default Button;
