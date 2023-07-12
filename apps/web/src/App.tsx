import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProfileLayout, Layout } from "./components";
import { ProfileHome } from "./pages/profile";
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={<h1 className="text-red-500">Hello World</h1>}
        />

        <Route element={<ProfileLayout />} path="/profile">
          <Route index element={<ProfileHome />} />
        </Route>
      </Route>
    </Routes>
  );
}
