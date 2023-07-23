import { store } from "@/app/store/store";
import { Home } from "@/components/home/Home";
import { Layout } from "@/components/layout/Layout";
import { RecipePage } from "@/features/Recipe/components/RecipePage";
import { ShowRecipe } from "@/features/Recipe/components/ShowRecipe";
import { UserPage } from "@/features/User/components/UserPage";
import { injectStore } from "@/services/bearer.interceptor";
import { Route, Routes } from "react-router-dom";

function App() {
  injectStore(store);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/recipes">
          <Route index element={<RecipePage />} />
          <Route path="/recipes/:id" element={<ShowRecipe />} />
        </Route>
        <Route path="/user">
          <Route index element={<UserPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
