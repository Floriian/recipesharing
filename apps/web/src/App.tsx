import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={<h1 className="text-red-500">Hello World</h1>}
        ></Route>
      </Route>
    </Routes>
  );
}
