import React from "react";
import "./Maintext.css";

function Maintext() {
  return (
    <div>
      <main>
        <h5>built for modern use</h5>
        <h1>
          Smarter meetings, <br />
          all in one place
        </h1>
        <p>
          Send messages, share files, show your screen, and record your meetings
          all in one workspace Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </main>

      <section class="vertical-line">
        <div class="line"></div>
        <div class="number">
          <span>02</span>
        </div>
      </section>

      <section class="horizontal-break">
        <div class="horizontal-line"></div>
        <div class="number">
          <span>02</span>
        </div>
        <div class="horizontal-line"></div>
      </section>
    </div>
  );
}

export default Maintext;
