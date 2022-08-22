import React from "react";
import "./contact.css";
import { pages } from "../../data/pagesData";

export default function Contact() {
  return (
    <>
      <div className="contactHero">
        <h1>{pages[0].hero}</h1>
      </div>

      <div className="contactContainer">
        <div className="columnLeft">
          <h1>{pages[0].title}</h1>
          <p>{pages[0].text}</p>
          <a
            className="btn-hover color-8"
            href="https://nervisq.wixsite.com/nervis"
          >
            Graphic Design Portfolio
          </a>
          <a
            className="btn-hover color-8"
            href="https://www.linkedin.com/in/moises-nervis123/"
          >
            Linked in
          </a>
        </div>
        <div className="columnRight">
          <img src={pages[0].heroImg} alt={pages[0].alt} />
        </div>
      </div>
    </>
  );
}
