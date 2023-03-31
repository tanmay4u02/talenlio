import React from "react";
import "./styles.css";

const Wrap = ({ children, variant, sx }) => {
  return (
    <div className={`wrap ${variant}`} style={sx}>
      {children}
    </div>
  );
};

export default Wrap;
