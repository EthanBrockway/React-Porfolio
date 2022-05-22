import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  const [selectedTab, setSelectedTab] = useState("about");

  function renderTab() {
    switch (selectedTab) {
      case "resume":
        return <Resume />;
      case "contact":
        return <Contact />;
      case "portfolio":
        return <Portfolio />;
      default:
        return <About />;
    }
  }

  return (
    <>
      <Nav setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
      <div className="main-div">{renderTab()}</div>
      <Footer />
    </>
  );
}

export default App;
