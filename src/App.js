import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Menu from "./components/Menu/Menu.js";

export default function App() {
  return (
    <div className="App">
       <Header />
      <div className="Menu">
        <Menu />
      </div>
    </div>
  );
}
