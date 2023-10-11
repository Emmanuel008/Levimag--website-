import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line
import SerebukaDance from "pages/SerebukaDance";
import RoyalMagazine from "pages/RoyalMagazine";
import Home from "pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GoldPackage from "pages/GoldPackage";
import DiamondPackage from "pages/DiamondPackage";
import SilverPackage from "pages/SilverPackage";
import BronzePackage from "pages/BronzePackage";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyles/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/serebuka-dance" element={<SerebukaDance/>}/>
      <Route path="/royal-magazine" element={<RoyalMagazine/>}/>
      <Route path="/gold" element={<GoldPackage/>}/>
      <Route path="/diamond" element={<DiamondPackage/>}/>
      <Route path="/silver" element={<SilverPackage/>}/>
      <Route path="/bronze" element={<BronzePackage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
