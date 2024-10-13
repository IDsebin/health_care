import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main"; // Main 컴포넌트 임포트
import ActtingManagement from "../src/Service/ActtingManagement"; // ActtingManagement 컴포넌트 임포트

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/actting" element={<ActtingManagement />} />
        <Route path="/home" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
