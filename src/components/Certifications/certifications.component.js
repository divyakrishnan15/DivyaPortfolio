import React from "react";
import "./certifications.css"

export default function Certifications() {
  const certifications_data = require("../../json/certifications_data.json");
  return (
    <section id="section4">
      <h1 className="section-heading">Certifications</h1>
      <ul className="section4-content">
        {Object.values(certifications_data).map((certification, i) => {
          return <li key={i}>{certification}</li>;
        })}
      </ul>
    </section>
  );
}
