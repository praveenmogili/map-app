import "./assets/styles/App.scss";
import "react-toastify/dist/ReactToastify.css";
import FocusLock from "react-focus-lock";
import Footer from "./features/Footer";
import Home from "./pages/Home";
import NavbarMain from "./features/navbar-menu/NavbarMain";
import React, { useState, useRef } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { useOnClickOutside } from "./hooks/useOnClickOutside";
import { EditSurvey, SurveyResponses, Surveys } from "./pages/surveys";
// import Burger from "./features/navbar-menu/Burger";
// import Menu from "./features/navbar-menu/Menu";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);
  const menuId = "main-menu";

  useOnClickOutside(node, () => setMenuOpen(false));

  return (
    <div id="app">
      <ThemeProvider theme={{}}>
        <BrowserRouter>
          <div id="app-router">
            <NavbarMain />
            <Routes>
              <Route path="/" element={<Navigate to="/surveys" />} />
              <Route path="/surveys" element={<Surveys />} />
              <Route path="/surveys/edit-survey" element={<EditSurvey />} />
              <Route
                path="/surveys/survey-responses"
                element={<SurveyResponses />}
              />
            </Routes>
            <ToastContainer autoClose={2500} />
            <Footer />
            {/* <div ref={node}>
              <FocusLock disabled={!menuOpen}>
                <Burger
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                  aria-controls={menuId}
                />
                <Menu
                  menuOpen={menuOpen}
                />
              </FocusLock>
            </div> */}
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
