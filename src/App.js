import * as React from "react";
import "./styles.css";
import Card from "./Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Footer />
        <Routes>
          <Route
            path="/appa"
            element={<h1>Hello Brother Pehchan Kon bole to motha don</h1>}
          />
          <Route path="/Card" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
