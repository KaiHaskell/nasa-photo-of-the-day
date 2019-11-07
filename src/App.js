import React, { useEffect, useState } from "react";
import NasaAotd from "./components/nasaCardInfo.js";
import NavBar from "./components/navBar";
import axios from "axios";
import DatePicker from "react-date-picker";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <NasaAotd />
    </div>
  );
}

export default App;
