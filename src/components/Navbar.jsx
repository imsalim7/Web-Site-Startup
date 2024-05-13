import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/realitylogo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light box-shadow">
      <div className="container-fluid nav-cont">
        <a className="navbar-brand" href="/">
          <img className="logo" src={logo} alt="Reality-Check" />
          Reality<b>Check</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 bold">
          <li className="nav-item">
              <Link to="" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="services1" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" className="nav-link">
                ABOUT
              </Link>
            </li>
          </ul>
          <Link to="login">
            <button className="btn btn-primary nav-btn1" type="submit">
              Sign In
            </button>
          </Link>
          <Link to="register">
            <button className="btn btn-primary nav-btn" type="submit">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
