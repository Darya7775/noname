import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "/src/components/base/layout/layout";
import Main from "/src/components/page/main/main";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}