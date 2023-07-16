import { Home } from "@/components/home/Home";
import { Layout } from "@/components/layout/Layout";
import { RecipeLayout } from "@/features/Recipe/components/RecipeLayout";
import { RecipePost } from "@/features/Recipe/components/RecipePost";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipeLayout />}>
          <Route index element={<RecipePost />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
