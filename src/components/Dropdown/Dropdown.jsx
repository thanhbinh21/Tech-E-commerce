import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

const Dropdown = ({ isOpen, links }) => {
  return (
    <div className={`dropdown-container ${isOpen ? "open" : ""}`}>
      <div className="dropdown-menu">
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
