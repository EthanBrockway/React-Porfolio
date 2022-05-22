import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className="footer"
      >
        <a href="https://github.com/EthanBrockway">
          <BottomNavigationAction
            icon={<GitHubIcon className="icon" />}
            onClick={""}
          />
        </a>
        <a href="https://www.linkedin.com/in/ethan-brockway-6b186b1a8/">
          <BottomNavigationAction icon={<LinkedInIcon className="icon" />} />
        </a>
        <a href="mailto:ebrockway01@gmail.com">
          <BottomNavigationAction icon={<EmailIcon className="icon" />} />
        </a>
      </BottomNavigation>
    </Box>
  );
}
