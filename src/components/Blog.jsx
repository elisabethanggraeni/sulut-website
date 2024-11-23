import React from "react";
import Manado from "../assets/images/manado.jpg";
import Bitung from "../assets/images/bitung.jpg";
import Likupang from "../assets/images/likupang.jpg";
import Tomohon from "../assets/images/tomohon.jpg";

const Blog = () => {
  return (
    <section className="abuabu" id="blog">
      <div className="layar-dalam">
        <h3>Destination Guide</h3>
        <p className="ringkasan">Choose your destination.</p>
        <div className="blog">
          <div className="area column">
            <div
              className="gambar"
              style={{ backgroundImage: `url(${Manado})` }}
            ></div>
            <div className="text">
              <article>
                <h4>
                  <a href="indexManado.html">What about Manado</a>
                </h4>
                <p>
                  Manado is the capital city of North Sulawesi province, and it
                  has become an interesting city to be visited for its tourism
                  destination, while the location itself is located at the Bay
                  of Manado and is surrounded by a mountainous area.
                </p>
              </article>
            </div>
          </div>
          <div className="area column">
            <div
              className="gambar"
              style={{ backgroundImage: `url(${Bitung})` }}
            ></div>
            <div className="text">
              <article>
                <h4>
                  <a href="indexBitung.html">What about Bitung</a>
                </h4>
                <p>
                  On the north coast of the island of Sulawesi in Indonesia lies
                  Bitung, known for its incredibly vibrant, varied, and
                  often-bizarre marine life that thrives in its coastal waters.
                  Nature lovers are welcome!
                </p>
              </article>
            </div>
          </div>
          <div className="area column">
            <div
              className="gambar"
              style={{ backgroundImage: `url(${Likupang})` }}
            ></div>
            <div className="text">
              <article>
                <h4>
                  <a href="indexLikupang.html">What about Likupang</a>
                </h4>
                <p>
                  Likupang has been identified as a super priority destination
                  in Indonesia. Not only surrounded by exotic natural
                  attractions, Likupang also has a wide variety of delicious
                  dining options and exciting cultures to explore.
                </p>
              </article>
            </div>
          </div>
          <div className="area column">
            <div
              className="gambar"
              style={{ backgroundImage: `url(${Tomohon})` }}
            ></div>
            <div className="text">
              <article>
                <h4>
                  <a href="indexTT.html">What About Tomohon and Tondano?</a>
                </h4>
                <p>
                  Come and enjoy a full day easy and relaxing tour, exploring
                  the Minahasa volcanic highland area.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
