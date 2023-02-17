import "./assets/styles/App.scss";
import "react-toastify/dist/ReactToastify.css";
import FocusLock from "react-focus-lock";
import Footer from "./features/Footer";
import Home from "./pages/Home";
import NavbarMain from "./features/NavbarMenu/NavbarMain";
import React, { useState, useRef } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { useOnClickOutside } from "./hooks/useOnClickOutside";
import Burger from "./features/NavbarMenu/Burger";
import Menu from "./features/NavbarMenu/Menu";

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
              <Route path="/" element={<Home />} />
            </Routes>
            <ToastContainer autoClose={2500} />
            <Footer />
            <div ref={node}>
              <FocusLock disabled={!menuOpen}>
                <Burger
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                  aria-controls={menuId}
                />
                <Menu
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                  id={menuId}
                />
              </FocusLock>
            </div>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
