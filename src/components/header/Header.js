import React from "react";
import imageleft from "../images/image-hero-left.png";
import imageright from "../images/image-hero-right.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header>
        <div>
          <img src={imageleft} alt="" />
        </div>

        <div id="header-text">
          <h1>
            Group chat <br />
            for everyone
          </h1>
          <p>
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>

          <div id="button">
            <button id="download">
              <i class="bi bi-cloud-download"></i> Download v1.3
            </button>
            <button id="what-is-it">What is it?</button>
          </div>
        </div>

        <div>
          <img src={imageright} alt="" />
        </div>
      </header>

      <section class="vertical-line">
        <div class="line"></div>
        <div class="number">
          <span>01</span>
        </div>
      </section>

      <section class="horizontal-break">
        <div class="horizontal-line"></div>
        <div class="number">
          <span>01</span>
        </div>
        <div class="horizontal-line"></div>
      </section>
    </div>
  );
};

export default Header;
