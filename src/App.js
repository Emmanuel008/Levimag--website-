import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line
import SerebukaDance from "pages/SerebukaDance";
import RoyalMagazine from "pages/RoyalMagazine";
import Home from "pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyles/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/serebuka-dance" element={<SerebukaDance/>}/>
      <Route path="/royal-magazine" element={<RoyalMagazine/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
