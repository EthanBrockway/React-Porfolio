import React from "react";
import profilePic from "../../img/profile-pic.jpg";

function About() {
  return (
    <div className="about-section">
      <div className="about-1">
        <h1>About Me</h1>
        <img src={profilePic} alt="profile-pic" className="about-picture"></img>
      </div>
      <div className="about-2">
        <div className="par-1">
          <p>
            I have been studying code for the past 6 months through Kansas
            Universities' software engineer bootcamp. I have developed a lot of
            backend knowledge and enjoy working with express, mongo, and even
            mySQL.
          </p>
        </div>

        <div className="par-2">
          <p>
            I will be graduating the bootcamp on June 1st 2022 and look forward
            to learning more code to better improve the way I am able to
            structure, organize, and build applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
