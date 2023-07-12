import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProfileLayout, Layout } from "./components";
import { Homepage, ProfileHome } from "./pages";
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Homepage />} />

        <Route element={<ProfileLayout />} path="/profile">
          <Route index element={<ProfileHome />} />
        </Route>
      </Route>
    </Routes>
  );
}
