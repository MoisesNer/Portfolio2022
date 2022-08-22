import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProjectContext } from "../../context";
import StyledHero from "./StyledHero";
import "./project.css";

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug
    };
  }
  static contextType = ProjectContext;

  render() {
    const { getProject } = this.context;
    const project = getProject(this.state.slug);
    if (!project) {
      return (
        <div className="error">
          <div className="error-container">
            <div className="error-text-wrapper">
              <div className="error-title" data-content="NO PROJECT">
                NO PROJECT
              </div>

              <div className="error-subtitle" data-content="found">
                found with those characteristics
              </div>

              <div className="error-buttons">
                <Link className="error-button" to="/">
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
    const {
      heading,
      paragraph1,
      paragraph2,
      technology,
      image,
      title,
      link
    } = project;
    const [mainImg, ...gallery] = image;
    return (
      <>
        <StyledHero img={mainImg}>
          {/* <h1>{project.heading}</h1> */}
        </StyledHero>

        <section className="single-project">
          <h2>{project.heading}</h2>
          <div className="project-info">
            <article className="project-desc">
              <h3>PROJECT DESCRIPTION:</h3>
              <p>{paragraph1}</p>
              <p>{paragraph2}</p>
            </article>

            <article className="project-link">
              <h4>Go to:</h4>
              <a
                className="btn-hover color-8"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                {/* {heading}  */}
                Website
              </a>
              <Link className="btn-hover color-8" to="/">
                Home
              </Link>
            </article>

            <div className="project-charac">
              <h3>TECHNOLOGY USED:</h3>
              <ul className="charac-list">
                {technology.map((item, index) => {
                  return <li key={index}>- {item}</li>;
                })}
              </ul>
            </div>
          </div>
        </section>
        <section className="section-images">
          <div className="project-images">
            {gallery.map((item, index) => {
              return <img key={index} src={item} alt={heading} />;
            })}
          </div>
        </section>
      </>
    );
  }
}
