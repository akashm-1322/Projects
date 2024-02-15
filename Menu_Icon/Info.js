import React from "react";
import EDMPhoto from "../Images/akash.jpg";

export default function Info() {
  return (
    <div className="info">
      <img className="info--photo" src={EDMPhoto} alt="Akash M" />
      <h1 className="info--fullname">Akash M</h1>
      <h5 className="info--role">Developer</h5>
      <div className="info--buttons">
        <address>
          <a href="mailto:ash1322mkv@gmail.com">
            {" "}
            <button className="button button--email">
              Email
            </button>
          </a>
        </address>
        <a
          href="https://www.linkedin.com/in/akash-m-000994258/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button button--linkedin">
            LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}