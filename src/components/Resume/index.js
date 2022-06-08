import React from "react";
import resume from "../../img/Ethan_Brockway_Resume.pdf";
export default function Resume() {
  return (
    <div className="resume-container">
      <a href={resume} className="resume">
        Resume
      </a>
      <div>
        <h2>Front end languages:</h2>
        <ul>
          <li>React.js</li>
          <li>JavasScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>TypeScript</li>
        </ul>
      </div>
      <div>
        <h2>Back end languages:</h2>
        <ul>
          <li>Mysql and NoSQL db's</li>
          <li>Mongoose</li>
          <li>Express</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
        </ul>
      </div>
    </div>
  );
}
