import React from "react";

function Nav(props) {
  const { contactSelected, setContactSelected } = props;
  return (
    <header className="flex-row px-1">
      <h2>Ethan Brockway</h2>
      <nav className="top-nav">
        <ul className="flex-row">
          <li className="mx-2">About me</li>
          <li className="mx-2">Portfolio</li>
          <li className="mx-2">
            <span
              onClick={() => {
                setContactSelected(true);
                console.log(contactSelected);
              }}
            >
              Contact
            </span>
          </li>
          <li className="mx-2">Resume</li>
        </ul>
      </nav>
    </header>
  );
}
export default Nav;
