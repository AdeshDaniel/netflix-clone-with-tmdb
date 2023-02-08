import React, { useEffect, useState } from "react";
import "./nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", {});
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png?20170904093427"
        alt="netflix"
      />

      <img
        className="nav__avatar"
        src="https://pbs.twimg.com/profile_images/"
        alt="netflix"
      />
    </div>
  );
};

export default Nav;
