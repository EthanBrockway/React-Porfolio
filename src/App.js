import logo from "./logo.svg";
import "./App.css";
import React from "react";
import About from "./About";
import Nav from "./Nav";

function App() {
  return (
    <div>
      <Nav />
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
