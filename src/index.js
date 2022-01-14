import React from 'react';
import './index.css';
import Home from './Home';
// import Game from './component/game'
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/game" element={<Game/>} /> */}
      <Route path="*" element={<div>404</div>} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
