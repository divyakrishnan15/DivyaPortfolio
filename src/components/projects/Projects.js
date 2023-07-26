import React, { useState } from "react";
import "./project.css";
import { projectjson } from "../../json/projects_data";
import Modal from "./Modal/Modal";

export default function Projects() {
  const [show, setShow] = useState(false);
  // const[id,setId]=useState(0)
  const [modalData, setModalData] = useState([]);
  const projects = projectjson;

  return (
    <section id="section7">
      <h1 className="section6-heading">Projects:</h1>
      <div className="outer-proj">
        {Object.values(projects).map((proj) => {
          return (
            <div className="inner-proj" key={proj.id}>
              <h1 className="projects-heading">{proj.projname}</h1>

              <div>
                {proj.video ? (
                  <iframe
                    className="projimg"
                    src={'https://www.youtube-nocookie.com/embed/' + proj.video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                  ></iframe>
                ) : (
                  <img src={proj.projimg} alt="proj img" className="projimg" />
                )}
                {show ? (
                  <Modal
                    display={show}
                    setShow={setShow}
                    projData={modalData}
                  ></Modal>
                ) : null}

                {/* {show ? <Modal display={show} id={proj.id} projData={proj.images}></Modal> : null} */}
              </div>

              <div className="tool-main">
                <span className="tools-span">
                  <strong>Tools used:</strong>{" "}
                </span>
                <span className="tools-span">{proj.tools}</span>
              </div>

              <div className="deploy-main">
                Deployed:{" "}
                <a href={proj.url} target="_blank" rel="noreferrer">
                  <img
                    src={proj.deployed}
                    alt="projimg"
                    className="projdeployimg"
                  />
                </a>
              </div>
              <svg
                fill="#000000"
                width="30px"
                height="30px"
                viewBox="0 0 32 32"
                id="icon"
                xmlns="http://www.w3.org/2000/svg"
                className="popup_project"
                onClick={() => {
                  setShow(true);
                  setModalData(proj.images);
                }}
              >
                <title>popup</title>
                <path d="M28,4H10A2.0059,2.0059,0,0,0,8,6V20a2.0059,2.0059,0,0,0,2,2H28a2.0059,2.0059,0,0,0,2-2V6A2.0059,2.0059,0,0,0,28,4Zm0,16H10V6H28Z" />
                <path d="M18,26H4V16H6V14H4a2.0059,2.0059,0,0,0-2,2V26a2.0059,2.0059,0,0,0,2,2H18a2.0059,2.0059,0,0,0,2-2V24H18Z" />
                <rect
                  id="_Transparent_Rectangle_"
                  data-name="&lt;Transparent Rectangle&gt;"
                  className="cls-1"
                  width="32"
                  height="32"
                  style={{ fill: "none" }}
                />
              </svg>
            </div>
          );
        })}
      </div>
    </section>
  );
}
