import NavBar from "./components/NavBar.jsx";
import React from "react";
import Favorites from "./pages/Favorites";
import Main from "./pages/Main";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scssStyles/main.css";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Favorites/" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
