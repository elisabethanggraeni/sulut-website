import React from "react";
import Foto1 from "../assets/images/foto1.jpg";
import Foto2 from "../assets/images/foto2.jpg";
import Foto3 from "../assets/images/foto3.jpg";
import Foto4 from "../assets/images/foto4.jpg";
import Foto5 from "../assets/images/foto5.jpg";
import Foto6 from "../assets/images/foto6.jpg";
import Foto7 from "../assets/images/foto7.jpg";
import Foto8 from "../assets/images/foto8.jpg";

const Galery = () => {
  return (
    <section id="gallery">
      <div>
        <img src={Foto1} />
      </div>
      <div>
        <img src={Foto2} />
      </div>
      <div>
        <img src={Foto3} />
      </div>
      <div>
        <img src={Foto4} />
      </div>
      <div>
        <img src={Foto5} />
      </div>
      <div>
        <img src={Foto6} />
      </div>
      <div>
        <img src={Foto7} />
      </div>
      <div>
        <img src={Foto8} />
      </div>
    </section>
  );
};

export default Galery;
