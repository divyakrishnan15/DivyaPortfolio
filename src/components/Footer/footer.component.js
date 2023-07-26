import React, { useState } from "react";
import resume1 from "../../resumes/DivyaKrishnanresume.pdf";
import resume2 from "../../resumes/DivyaKrishnanCoverLetter.pdf";
import download_button from "../../assets/download-button.png";
import open_button from "../../assets/open-button.png";
import ResumeView from "../ResumeView/resumeView.component";
import "./footer.css";

export default function Footer() {
  const [show, setShow] = useState(false);
  const [resume, setResume] = useState(resume1);
  return (
    <footer id="footer">
      <div className="footer-wrapper">
        <span className="footer-card">
          <section>
            <strong className="footer-heading">Address</strong>
          </section>
          <section className="last">
            <section>50 Town Centre Court</section>
            <section>Scarborough,ON</section>
          </section>
        </span>
        <span className="footer-card">
          <section>
            <strong className="footer-heading">Phone</strong>
          </section>
          <section className="last">+1 416 875 6251</section>
        </span>
        <span className="footer-card">
          <section>
            <strong className="footer-heading">Gmail</strong>
          </section>
          <section className="last">divya.krishnan.155@gmail.com</section>
        </span>
        <span className="footer-card">
          <section>
            <strong className="footer-heading">Resume download</strong>
          </section>
          <section className="footer-resume-wrapper">
            Divya Krishnan Resume
            <a
              className="footer-resume-download"
              href={resume1}
              download={"Divya Krishnan Resume"}
            >
              <img
                className="footer-resume-img"
                src={download_button}
                width="30px"
                height="30px"
              />
            </a>
            <img
              className="footer-resume-img"
              src={open_button}
              onClick={() => {
                setShow(true);
                setResume(resume1)
              }}
              width="30px"
              height="30px"
            />
          </section>
          <section className="footer-resume-wrapper">
            <a
              className="footer-resume-download"
              href={resume2}
              download={"Divya Krishnan Resume - Single Page"}
            >
              Divya Krishnan Cover letter
              <img
                className="footer-resume-img"
                src={download_button}
                width="30px"
                height="30px"
              />
            </a>
            <img
              className="footer-resume-img"
              src={open_button}
              onClick={() => {
                setShow(true);
                setResume(resume2)
              }}
              width="30px"
              height="30px"
            />
            
          </section>
        </span>
        <ResumeView Show={show} setShow={setShow} Resume={resume}/>
      </div>
    </footer>
  );
}
