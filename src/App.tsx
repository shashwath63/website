
import { Header, Footer, About, Contact, HomePage } from "./components";

import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import React from "react";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Header title="My Website" />
        <Routes>
          <React.Fragment>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </React.Fragment>
        </Routes>

        <Footer copyrightDate={2022} />
      </Router>
    </>
  );
};

export default App;
