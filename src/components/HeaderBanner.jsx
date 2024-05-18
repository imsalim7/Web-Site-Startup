import "../styles/HeaderBanner.css";
import { Link } from "react-router-dom";
import nightStarsLand from "../assets/night-stars-landscape1.jpg"

const HeaderBanner = () => {
  function scrollToContent() {
    const element = document.getElementById("main-content");
    element.scrollIntoView();
  }

  return (
    <div className="first-container">
      <img
        src={nightStarsLand}
        alt="main-img-bg"
      />
      <div className="overlap-text">
        <p>
          Bringing <b>Truth to Life</b>
          <br />
          Reality <b>Check</b>
        </p>
        <Link to="register" className="nav-link">
        <button
          className="btn btn-light"
          onClick={scrollToContent}
        >
          Get Started
        </button>
        </Link>
      </div>
    </div>
  );
};

export default HeaderBanner;
