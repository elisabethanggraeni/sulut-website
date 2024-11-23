import React from "react";
import Matahari from "../assets/images/matahari.png";
import Tas from "../assets/images/tas.png";
import Kompas from "../assets/images/kompas.png";
const Support = () => {
  return (
    <section className="abuabu" id="support">
      <div className="layar-dalam support">
        <div>
          <img src={Matahari} />
          <h6>Around Manado Condition</h6>
          <p>
            Facing the vast blue open seas and backed by a number of looming
            active volcanoes, Manado spells fantastic diving, adventures through
            the wild and various cultural heritage attractions
          </p>
        </div>
        <div>
          <img src={Tas} />
          <h6>Beautiful Places</h6>
          <p>
            The island of Sulawesi is famous for remote regions where enigmatic
            ancient cultures still flourish.
          </p>
        </div>
        <div>
          <img src={Kompas} />
          <h6>Transportation Online</h6>
          <p>
            inDrive, a mobility service platform that offers vehicle booking,
            freight transportation, and delivery services in multiple locations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Support;
