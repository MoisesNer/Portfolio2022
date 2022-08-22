import React from "react";
import "./infoSection.css";
import { Link } from "react-router-dom";
import Loading from "../Loading";
// import { InfoData } from "../../data/InfoData";
// import PropTypes from "prop-types";

import { withProjectConsumer } from "../../context";

function ProjectContainer({ context }) {
  const { loading, projects } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <section className="infoSection">
      {projects.map((item, index) => (
        <div className="container" key={index}>
          <div className="columnLeft">
            <h1>{item.heading}</h1>
            <p>{item.paragraph1}</p>

            {/* -- LINKS -- */}
            {/* <p>Check the Project:</p> */}
            <h4>Go to:</h4>
            <Link className="btn-hover color-8" to={item.slug}>
              {/* {item.buttonLabel} */}
              Project Info
            </Link>

            <a
              className="btn-hover color-8"
              href={item.link}
              rel="noreferrer"
              target="_blank"
            >
              {/* {item.heading}  */}
              Website
            </a>
          </div>
          <div className="columnRight">
            <img src={item.image[0]} alt={item.label} />
          </div>
        </div>
      ))}
    </section>
  );
}

export default withProjectConsumer(ProjectContainer);
