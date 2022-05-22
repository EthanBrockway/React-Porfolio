import React from "react";

function Nav(props) {
  const { selectedTab, setSelectedTab } = props;
  return (
    <nav className="top-nav navContainer">
      <div className="container">
        <div className="left-side">
          {" "}
          <h1 className="title">Ethan Brockway</h1>
        </div>

        <div className="right-side">
          <p
            className={`mx-2 ${selectedTab === "about" && "selected-tab"}`}
            onClick={() => {
              setSelectedTab("about");
            }}
          >
            About me
          </p>
          <p
            className={`mx-2 ${selectedTab === "portfolio" && "selected-tab"}`}
            onClick={() => {
              setSelectedTab("portfolio");
            }}
          >
            Portfolio
          </p>
          <p className={`mx-2 ${selectedTab === "contact" && "selected-tab"}`}>
            <span
              onClick={() => {
                setSelectedTab("contact");
              }}
            >
              Contact
            </span>
          </p>
          <p
            className={`mx-2 ${selectedTab === "resume" && "selected-tab"}`}
            onClick={() => {
              setSelectedTab("resume");
            }}
          >
            Resume
          </p>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
