import Wrapper from "../sections/Wrapper";
import {  FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <h1 className="profile-text">Hi I am krishnakant Dave</h1>
      <h2 className="profile-text">The creator of this awesome pokedex</h2>
      <h4 className="profile-text">
        This was solo project using react-redux
      </h4>
      <div className="profile-links">
        <a href="https://github.com/krish736">
          <FaGithub />
        </a>
        <a href="www.linkedin.com/in/krishnakant-dave">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
