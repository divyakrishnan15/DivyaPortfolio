import React, { useState } from "react";
import "./education.css";
import Modal from "./Modal/modal.component";


export default function Education() {
  const education = require("../../json/education.json");
  // const education = require("");
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState({
    Degree: "",
    UniSch: "",
    Location: "",
    Date: "",
    News: [],
  });
  
  return (
    <section id="section6">
      <h1 className="section6-heading">Education</h1>
      <div className="section6-content">
        {Object.values(education).map((education, i) => {
           
          return (
            <div key={i}>
              {/* Education Name */}
              {/* {console.log("education = ",education)} */}
              <h3 className="section6-education-title">{education.Degree}</h3>
              <div className="section6-grid-div">
                {/* Education Role */}

                <p className="section6-education-unisch section6-inline">
                  {education.University}
                  {education.School}
                </p>
                <p className="section6-education-location section6-inline">
                  {education.Location}
                </p>
                {/* Education Mark */}
                <p className="section6-education-mark section6-inline">
                  {education.Mark}
                </p>

                {/* Education Date */}
                <p className="section6-education-dates section6-inline">
                  <strong>{education.Date}</strong>
                </p>
              </div>

              {/* Education Description */}
              {/* <strong className="section6-heading-award">
                Responsibility:
              </strong>
              <ul className="section6-education-description">
                {education.Responsibility[0]}
              </ul> */}

              {/* Education Awards */}

              {/* <div className="section6-education-awards">
                {Object.values(education.Awards).map((award, i) => {
                  return (
                    <div key={i}>
                      <strong className="section6-heading-award">
                        Awards:
                      </strong>
                      <p className="section6-education-description">{award}</p>
                    </div>
                  );
                })}
              </div> */}
              <button
                onClick={() => {
                  setShow(true);
                  setModalData({
                    Degree: education.Degree,
                    UniSch: [education.University, education.School],
                    Location: education.Location,
                    Date: education.Date,
                    Mark: education.Mark,
                    News: education.News,
                  });
                }}
              >
                Readmore...
              </button>
              <Modal Show={show} setShow={setShow} ModalData={modalData} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
