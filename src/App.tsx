import "./assets/styles/App.scss";
// import "react-toastify/dist/ReactToastify.css";
import Footer from "./features/Footer";
import NavbarMain from "./features/navbar-menu/NavbarMain";
import React, { useState, useRef } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  EditSurvey,
  EditTemplate,
  SurveyResponses,
  Surveys,
  Templates,
} from "./pages/surveys";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div id="app">
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
            <Route path="/surveys/templates" element={<Templates />} />
            <Route
              path="/surveys/template/:templateId/block/:blockId"
              element={<EditTemplate />}
            />
          </Routes>
          <ToastContainer autoClose={2500} />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
