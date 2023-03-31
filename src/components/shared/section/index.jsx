import "./styles.css";

const Section = ({ children, variant }) => {
  return (
    <div
      className={
        variant === "sub-section" ? "sub-section" : `section ${variant}`
      }
    >
      {children}
    </div>
  );
};

Section.defaultProps = {
  variant: "content",
};

export default Section;
