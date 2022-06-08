import * as React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
export default function Footer() {
  return (
    <footer className="footer-container">
      <a href="https://github.com/EthanBrockway">
        <GitHubIcon className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/ethan-brockway-6b186b1a8/">
        <LinkedInIcon className="icon" />
      </a>
      <a href="mailto:ebrockway01@gmail.com">
        <EmailIcon className="icon" />
      </a>
    </footer>
  );
}
