import React from "react";

function Nav(props) {
  const { selectedTab, setSelectedTab } = props;
  return (
    <div className="container">
      <div className="left-side">
        {" "}
        <h1 className="title">Ethan Brockway</h1>
      </div>

      <div className="right-side">
        <p className={`mx-2 ${selectedTab === "about" && "selected-tab"}`}>
          {" "}
          <span
            onClick={() => {
              setSelectedTab("about");
            }}
            className="nav-links"
          >
            About me
          </span>
        </p>
        <p className={`mx-2 ${selectedTab === "portfolio" && "selected-tab"}`}>
          <span
            onClick={() => {
              setSelectedTab("portfolio");
            }}
            className="nav-links"
          >
            Portfolio
          </span>
        </p>
        <p className={`mx-2 ${selectedTab === "contact" && "selected-tab"}`}>
          <span
            onClick={() => {
              setSelectedTab("contact");
            }}
            className="nav-links"
          >
            Contact
          </span>
        </p>
        <p className={`mx-2 ${selectedTab === "resume" && "selected-tab"}`}>
          <span
            onClick={() => {
              setSelectedTab("resume");
            }}
            className="nav-links"
          >
            {" "}
            Resume
          </span>
        </p>
      </div>
    </div>
  );
}
export default Nav;
