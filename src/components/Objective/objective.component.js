import React from "react";
import "./objective.css"

export default function Objective() {
  const objective = require("../../json/objective.json");
  return (
    <section id="section1">
      <h1 className="section-heading">Objective</h1>
      <p className="section1-content">{objective}</p>
    </section>
  );
}
