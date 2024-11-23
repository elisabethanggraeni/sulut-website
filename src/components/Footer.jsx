import React from "react";
import Email from "../assets/images/email.jpg";
import Instagram from "../assets/images/instagram.jpg";
import Phone from "../assets/images/phone.jpg";

function Footer() {
  return (
    <footer id="contact">
      <div className="layar-dalam">
        <div>
          <img src={Phone} alt="Image" height="42" width="42" />
          <h5>Phone</h5>
          call us trough this number 053 675
        </div>
        <div>
          <img src={Email} alt="Image" height="42" width="42" />
          <h5>Email</h5>
          northsulawesi@gmail.com
        </div>
        <div>
          <img src={Instagram} alt="Image" height="42" width="42" />
          <h5>Instagram</h5>
          @northsulawesi
        </div>
      </div>
      <div className="layar-dalam">
        <div className="copyright">
          &copy; 2023 Travelling Indonesia North Sulawesi
        </div>
      </div>
    </footer>
  );
}

export default Footer;
