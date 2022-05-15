import React, { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Nav from "./Nav";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <div>
          {!contactSelected ? (
            <>
              <About />
            </>
          ) : (
            <Contact />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
