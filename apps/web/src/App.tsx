import { Home } from "@/components/home/Home";
import { Layout } from "@/components/layout/Layout";
import { RecipePosts } from "@/features/Recipe/components/RecipePosts";
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
