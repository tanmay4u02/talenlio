import ContainerFooter from "../../shared/container/containerFooter";
import Logo from "../../../media/logo-white.svg";
import { Link } from "react-router-dom";
import LinksBlock from "./LinksBlock";

import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <ContainerFooter>
        <div style={{ order: "-1" }}>
          <Link to="#" className="footer-logo-link">
            <img
              src={Logo}
              width="140"
              alt="Showcase talents and uncover opportunities"
              className="footer-image"
            />
          </Link>
        </div>
        <div className="div-block-2">
          <LinksBlock
            heading="Legal"
            links={{
              "Contact us": "/privacy-policy/#contact-us",
              "Privacy Policy": "/privacy-policy",
              Disclaimer: "/disclaimer",
              "Terms and Conditions": "/terms-and-conditions",
            }}
          />
          <LinksBlock
            heading="Community"
            links={{
              Login: "https://app.talenlio.com/auth/login",
              "Join Waitlist": "https://form.jotform.com/221864175912358",
              "Book a demo": "https://www.talenlio.com/#",
            }}
          />
          <LinksBlock
            heading="Get Started"
            links={{
              Home: "#",
              Employers: "/for-employers",
              Universities: "/for-universities",
              Candidates: "/for-candidates",
            }}
          />
        </div>
      </ContainerFooter>
      <div className="d-flex p-0 justify-content-between align-items-center">
        <div className="text-block-3">
          © Copyright 2023 All Rights Reserved | Powered by{" "}
          <a
            href="https://www.ilmtec.in/"
            target="_blank"
            className="link-3"
            rel="noreferrer"
          >
            <strong>ILMTEC</strong> Solutions
          </a>
          Private Limited
        </div>
      </div>
    </div>
  );
};

export default Footer;
