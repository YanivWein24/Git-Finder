import React from "react";
import "./Footer.css";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="footer">
      <p>Ⓒ Yaniv Weinshtein {year}</p>
      <div className="socials">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/YanivWein24/"
          aria-label="My Github"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/yaniv-weinshtein/"
          aria-label="My Linkedin"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://yaniv-weinshtein.netlify.app/"
          aria-label="My Portfolio Website"
        >
          <i className="fa-solid fa-globe"></i>
        </a>
        <a aria-label="My Email" href="mailto:yanivwein22@gmail.com">
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
