import React from "react";
import "./footer.css";
const Footer = () => {
  return (

    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>

      <p>c 2023 . All rights Reserved</p>
    </footer>
  );
};

export default Footer;
