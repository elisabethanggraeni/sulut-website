import React, { useState, useEffect } from "react";
import LogoWhite from "../assets/images/logo-white.png";
import LogoBlack from "../assets/images/logo-black.png";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 989) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };
  return (
    <nav className={isScrolled ? "putih" : ""}>
      <div className="layar-dalam">
        <div className="logo">
          <a href="#">
            <img
              src={LogoWhite}
              className="putih"
              alt="Logo White"
              style={{ display: isScrolled ? "none" : "block" }}
            />
          </a>
          <a href="#">
            <img
              src={LogoBlack}
              className="hitam"
              alt="Logo Black"
              style={{ display: isScrolled ? "block" : "none" }}
            />
          </a>
        </div>
        <div className="menu">
          {windowWidth < 990 && (
            <button className="tombol-menu" onClick={toggleMenu}>
              <span className="garis"></span>
              <span className="garis"></span>
              <span className="garis"></span>
            </button>
          )}
          <ul
            style={{
              display: windowWidth > 989 || isMenuOpen ? "block" : "none",
            }}
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#aboutus">About Us</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#blog">Destination</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
