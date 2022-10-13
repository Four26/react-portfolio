import React from "react";
import "./nav.css";
import { MdHomeFilled } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { RiFileUserFill } from "react-icons/ri";
import { MdMiscellaneousServices } from "react-icons/md";
import { AiFillContacts } from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <MdHomeFilled />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaUserCircle />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <RiFileUserFill />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <MdMiscellaneousServices />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiFillContacts />
      </a>
    </nav>
  );
};

export default Nav;
