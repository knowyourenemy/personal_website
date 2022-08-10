import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Work from "./components/pages/Work";
import Interests from "./components/pages/Interests";
import Connect from "./components/pages/Connect";

function App() {
  return (
    <div className="main-app">
      <Navbar />
      <Home />
      <Projects />
      <Work />
      <Interests />
      <Connect />
    </div>
  );
}

export default App;
