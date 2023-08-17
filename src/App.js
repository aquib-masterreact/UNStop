import "./styles.css";
import Navb from "./Components/Navbar";
import MainContent from "./Components/MainContent";
import Sidebar from "./Components/Sidebar";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <Navb />
        <MainContent />
      </div>
    </div>
  );
}
