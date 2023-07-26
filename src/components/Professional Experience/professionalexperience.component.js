import React, { useState, useEffect } from "react";
import "./professionalexperience.css";
import Modal from "./Modal/modal.component";

export default function Professionalexperience() {
  const professional_experience_data = require("../../json/professional_experience_data.json");
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState({
    Name: "",
    Role: "",
    Date: "",
    Responsibility: {},
    Awards: {},
  });
  return (
    <section id="section5">
      <h1 className="section5-heading">Professional Experience</h1>
      <div className="section5-content">
        {Object.values(professional_experience_data).map((job, i) => {
          return (
            <div key={i}>
              {/* Job Name */}

              <h3 className="section5-job-title">{job.Name}</h3>
              <div className="section5-grid-div">
                {/* Job Role */}

                <p className="section5-job-role section5-inline">{job.Role}</p>

                {/* Job Start-End Date */}

                <p className="section5-job-dates section5-inline">
                  <strong>{job.Dates}</strong>
                </p>
              </div>

              {/* Job Description */}
              <strong className="section5-heading-award">
                Responsibility:
              </strong>
              <ul className="section5-job-description">
                {job.Responsibility[0]}
              </ul>

              {/* Job Awards */}

              <div className="section5-job-awards">
                {Object.values(job.Awards).map((award, i) => {
                  return (
                    <div key={i}>
                      <strong className="section5-heading-award">
                        Awards:
                      </strong>
                      <p className="section5-job-description">{award}</p>
                    </div>
                  );
                })}
              </div>
              <button
                onClick={() => {
                  setShow(true);
                  setModalData({
                    Name: job.Name,
                    Role: job.Role,
                    Date: job.Dates,
                    Responsibility: job.Responsibility,
                    Awards: job.Awards,
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
