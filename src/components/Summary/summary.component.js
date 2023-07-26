import React from "react";
import "./summary.css"

export default function Summary() {
    const summary_data = require("../../json/summary_data.json")
  return (
    <section id="section2">
      <h1 className="section-heading">Summary</h1>
      <ul className="section2-content">
        {Object.values(summary_data).map((summary, i) => {
          return <li key={i}>{summary}</li>;
        })}
      </ul>
    </section>
  );
}
