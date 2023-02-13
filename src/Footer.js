//import react from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="hey">
      <h1>
        Hello bro on react <Link to="/Card">Sign Up</Link>
      </h1>
    </div>
  );
};

export default Footer;
