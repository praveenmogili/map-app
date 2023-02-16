import React from "react";
import "./assets/styles/App.scss";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import NavbarMain from "./features/NavbarMain";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div id="app">
      <BrowserRouter>
        <div id="app-router">
          <NavbarMain />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <ToastContainer autoClose={2500} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
