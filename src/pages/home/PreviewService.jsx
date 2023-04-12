import React from "react";
import Section from "../../components/shared/section";
import Container from "../../components/shared/container/Container";
import P from "../../components/shared/p";

import "./styles.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const PreviewService = ({ section, align, previewImage, title, features }) => {
  return (
    <Section variant={`section-${section}`}>
      <Container className="container-1201">
        <div
          className={`d-flex align-items-center ${
            align === "right" ? "justify-content-end" : ""
          }`}
        >
          <div style={{ width: "80%", height: "530px" }}>
            <img
              src={previewImage}
              alt="preview"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            animateOnce
            className="content-square-1 "
            style={{ [align === "left" ? "right" : "left"]: "0" }}
          >
            <div className="">
              <P variant="title-content">{title}</P>
              {features.map((feature, ind) => (
                <h3 className="heading-5">- {feature}</h3>
              ))}
            </div>
          </AnimationOnScroll>
        </div>
      </Container>
    </Section>
  );
};

PreviewService.defaultProps = {
  section: "ow",
  align: "left",
};

export default PreviewService;
