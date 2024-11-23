import React from "react";
import Ervil from "../assets/images/evril.jpg";
import Elis from "../assets/images/elisabeth.jpg";

const Team = () => {
  return (
    <section id="team">
      <div className="layar-dalam">
        <h3>Meet The Team</h3>
        <p className="ringkasan">
          "We have worked and developed this website to give further information
          about our Travel Blog, we hope that we can satisfied the travellers
          and locals with our guides and information." Thankyou! - The Team
        </p>
        <div className="tim">
          <div>
            <img src={Ervil} />
            <h6>Evril Maringka</h6>
            <span>Manado</span>
          </div>

          <div>
            <img src={Elis} />
            <h6>Elisabeth Anggraeni</h6>
            <span>Jakarta</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
