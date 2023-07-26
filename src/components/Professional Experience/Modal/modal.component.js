import React from "react";

export default function Modal({ Show, setShow, ModalData }) {
  let classes = "";
  if (Show === false) {
    classes = "hide";
  } else {
    classes = "show";
  }
  return (
    <div>
      <div
        id="modal-bg"
        className={classes}
        onClick={() => {
          setShow(false);
        }}
      />
      <div id="modal" className={classes}>
        <div className="modal-job-title">
          <strong id="modal-job-title">{ModalData.Name}</strong>
        </div>
        <button
          className="close-button"
          onClick={() => {
            setShow(false);
          }}
        >
          x
        </button>
        <div id="modal-job-inline">
          <span id="modal-job-role">{ModalData.Role}</span>
          <span>
            <strong id="modal-job-date">{ModalData.Date}</strong>
          </span>
        </div>
        <hr id="modal-head-bdy-seperation"/>
        {/* <br /> */}
        <strong className="modal-job-responsibility">Responsibility:</strong>
        <div id="modal-job-responsibility-list">
          {Object.values(ModalData.Responsibility).map((responsibility, i) => {
            return (
              <div key={i} className="modal-list">
                {responsibility}
              </div>
            );
          })}
        </div>
        <div id="modal-job-award-list">
          {Object.values(ModalData.Awards).map((award, i) => {
            return (
              <div key={i}>
                <strong className="modal-job-award">Awards:</strong>
                <div className="modal-list">{award}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
