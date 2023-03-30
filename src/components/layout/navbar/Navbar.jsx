import { Link } from "react-router-dom";
import Logo from "../../../media/logo.svg";
import "./styles.css";
import Button from "../../shared/Button";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container mx-auto">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Link to="/">
              <img
                src={Logo}
                className="navbrand"
                alt="Showcase talents and uncover opportunities"
              />
            </Link>
          </div>
          <div className="d-flex ms-auto">
            <ul className="d-flex mb-0 pe-5 list-unstyled align-items-center">
              <li>
                <Link to="/" className="nav-link first">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/for-employers" className="nav-link">
                  Employers
                </Link>
              </li>
              <li>
                <Link to="/for-universities" className="nav-link">
                  Universities
                </Link>
              </li>
              <li>
                <Link to="/for-candidates" className="nav-link">
                  Candidates
                </Link>
              </li>
            </ul>
            <Button
              content="Sign In"
              link="https://app.talenlio.com/auth/login"
              variant="secondary"
              style={{ marginLeft: "2rem" }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
