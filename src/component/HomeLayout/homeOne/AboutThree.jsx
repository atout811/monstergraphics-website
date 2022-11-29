import React, { Component } from "react";
import {FiUser,FiTarget,FiStar,FiSquare,FiSmile, FiSend, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

class AboutThree extends Component {
  render() {
    let title = "About Us",
      description = "";
    var namesItemOne = [
      "Established in 2020",
      "Satisfied customers in +10 countries 22 clients across the globe",
      "Successful delivery of +30 projects",
      "Multidisciplinary services company catering to a global clientele ",
      "Provide end-to-end digital enablement capabilities.",
      "We are providing digital marketing solutions.",
      "We take pride in enabling our clients to drive sales and organizational growth.",
      "Our 360-strong organization comprises ERP, AI, OTT, AR/VR, DevOps, DPP, and UI/UX",
      // "MonstersGraphics has always been at the leading edge of driving innovation in the offshore development industry.",
      // "Our clients appreciate the value we bring to the table with reduced time to market, high-quality output, and technological innovation at competitive costs without compromising on quality.",
    ];

    return (
      <React.Fragment>
        <div className="about-wrapper">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-4 col-md-12">
                <div className="thumbnail">
                  <img
                    // width="90%"
                    src="/assets/images/about/about-1.png"
                    alt="About Images"
                  />
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="about-inner inner">
                  <div className="section-title">
                     
                    <h2 className="title">{title}</h2>
                    <h2 className="describe">{description}</h2>
                    <ul className="list-style--1">
                      {namesItemOne.map((name, index) => {
                        return (
                          <li key={index}>
                            <FiCheck /> {name}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default AboutThree;
