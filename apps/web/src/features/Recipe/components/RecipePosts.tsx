import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { getRecipeThunk } from "@/features/Recipe/recipe.thunks";
import { useEffect } from "react";

export function RecipePosts() {
  const dispatch = useAppDispatch();
  const recipe = useAppSelector((state) => state.recipe);
  useEffect(() => {
    return () => {
      dispatch(getRecipeThunk());
    };
  }, [dispatch]);

  return (
    <div className="border border-secondary">
      {recipe.data.map((recipe) => (
        <div key={recipe.name}>{recipe.name}</div>
      ))}
    </div>
  );
}
