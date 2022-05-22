import React from "react";
import profilePic from "../../img/profile-pic.jpg";

function About() {
  return (
    <div className="about-section">
      <h1 className="about-title">About Me</h1>
      <div className="par-1">
        <img src={profilePic} alt="profile-pic" className="about-picture"></img>
        <p>
          I have been studying code for the past 6 months through Kansas
          Universities' software engineer bootcamp. I have developed a lot of
          backend knowledge and enjoy working with express, mongo, and even
          mySQL.
        </p>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <p>
        I will be graduating the bootcamp on June 1st 2022 and look forward to
        learning more code to better improve the way I am able to structure,
        organize, and build applications.
      </p>
    </div>
  );
}

export default About;
