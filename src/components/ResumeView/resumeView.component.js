import React from "react";
import "./resumeView.css";

export default function ResumeView({ Show, setShow, Resume }) {
  let classes = "";
  if (Show === false) {
    classes = "hide";
  } else {
    classes = "show";
  }
  return (
    <div>
      <div
        id="modal-bg-2"
        className={classes}
        onClick={() => {
          setShow(false);
        }}
      />
      <div id="resumeModal" className={classes}>
        <button
          className="close-button-resume"
          onClick={() => {
            setShow(false);
          }}
        >
          x
        </button>
        <iframe id="resumeViewer" src={Resume}></iframe>
      </div>
    </div>
  );
}
