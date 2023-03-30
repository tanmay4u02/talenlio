import React from "react";
import "./styles.css";

function Button({ content, link, variant, style }) {
  return (
    <a
      href={link}
      className={`button first${
        variant === "primary" ? " bg-first third" : ""
      }`}
      target="_blank"
      style={style}
    >
      {content}
    </a>
  );
}

export default Button;
