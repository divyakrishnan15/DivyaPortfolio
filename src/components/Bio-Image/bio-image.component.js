import React from "react";
import divyakrishnan from "../../assets/DivyaKrishnan.jpg";
import "./bio-image.css"

export default function BioImage() {
  return (
    <section className="divya-krishnan-section">
      <h1 className="img-section-heading">Divya Krishnan</h1>
      <img
        className="divya-krishnan-img"
        src={divyakrishnan}
        height="250p"
        width="220p"
      />
    </section>
  );
}
