import React from "react";

export default function Modal({ Show, setShow, ModalData }) {
  let classes = "";
  if (Show === false) {
    classes = "hide";
  } else {
    classes = "show";
  }
  const handleNewsRender = () => {
    if (ModalData.News !== []) {
      return (
        <div>
          <strong className="modal-job-responsibility">News</strong>
          <div id="modal-job-responsibility-list">
            {Object.values(ModalData.News).map((news, i) => {
              return (
                <div key={i} className="modal-list">
                  {news}
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    else{
      return
    }
  };
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
        <div className="modal-education-title">
          <strong id="modal-education-title">{ModalData.Degree}</strong>
        </div>
        <button
          className="close-button"
          onClick={() => {
            setShow(false);
          }}
        >
          x
        </button>
        <div id="modal-education-inline">
          <span id="modal-education-uni-sch">{ModalData.UniSch}</span>
          <span id="modal-education-location">{ModalData.Location}</span>
          <span>
            <strong id="modal-education-date">{ModalData.Date}</strong>
          </span>
        </div>
        <br />
        {handleNewsRender()}
        {/* <div id="modal-job-award-list">
          {Object.values(ModalData.Awards).map((award, i) => {
            return (
              <div key={i}>
                <strong className="modal-job-award">Awards:</strong>
                <div className="modal-list">{award}</div>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
}
