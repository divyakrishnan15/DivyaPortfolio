import React from "react";
import "./Modal.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function Modal({ display, setShow, projData }) {
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "400px",
    // width:'100px'
    margin: "15px",
  };

  const handleClose = () => {
    // display='false'
    setShow(false);
  };

  return (
    <div id="projModal-main">
      {/* style={closebtn}  */}
      <div onClick={handleClose} className="close-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 384 512"
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
        {/* <FontAwesomeIcon icon="fa-solid fa-xmark" beat /> */}
      </div>

      <Slide className="slide">
        {projData.map((p, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${p.img})` }}
            ></div>
            <div className="model-text" >{p.text}</div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
