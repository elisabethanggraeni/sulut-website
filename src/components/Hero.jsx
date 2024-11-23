import React from "react";
import Background from "../assets/images/backround.jpg";
const Hero = () => {
  return (
    <header id="home">
      <div className="overlay">
        <img src={Background} />
      </div>
      {/* <video autoPlay muted loop>
        <source src="NorthSulawesi.mp4" type="video/mp4" />
      </video> */}
      <div className="intro">
        <h3>Visit North Sulawesi</h3>
        <p>
          Your Journey Awaits You! Take Steps in North Sulawesi and Let the
          Journey Begins
        </p>
        <p>
          <a
            href="https://www.britannica.com/place/North-Sulawesi"
            className="tombol"
            target="_blank"
          >
            MORE INFO
          </a>
        </p>
      </div>
    </header>
  );
};

export default Hero;
