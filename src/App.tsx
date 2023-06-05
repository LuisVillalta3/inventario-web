import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Soporte } from "./pages";
import "./index.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/soporte" element={<Soporte />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
