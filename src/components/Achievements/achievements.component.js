import React from "react";
import "./achievements.css"

export default function Achievements() {
  const achievements_data = require("../../json/achievements_data.json");
  return (
    <section id="section3">
      <h1 className="section-heading">Achievements</h1>
      <ul className="section3-content">
        {Object.values(achievements_data).map((achievement, i) => {
          return <li key={i}>{achievement}</li>;
        })}
      </ul>
    </section>
  );
}
