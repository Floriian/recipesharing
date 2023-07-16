import { Home } from "@/components/home/Home";
import { Layout } from "@/components/layout/Layout";
import { RecipeLayout } from "@/features/Recipe/components/RecipeLayout";
import { RecipePost } from "@/features/Recipe/components/RecipePost";
import { RecipePosts } from "@/features/Recipe/components/RecipePosts";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/recipes">
          <Route index element={<RecipePosts />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
