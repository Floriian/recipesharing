import { Home } from "@/components/home/Home";
import { Layout } from "lucide-react";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
