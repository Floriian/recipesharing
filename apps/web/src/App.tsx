import { Home } from "@/components/home/Home";
import { Layout } from "@/components/layout/Layout";
import { RecipePage } from "@/features/Recipe/components/RecipePage";
import { ShowRecipe } from "@/features/Recipe/components/ShowRecipe";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/recipes">
          <Route index element={<RecipePage />} />
          <Route path="/recipes/:id" element={<ShowRecipe />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
