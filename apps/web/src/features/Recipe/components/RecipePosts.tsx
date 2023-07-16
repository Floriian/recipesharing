import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { Loading } from "@/components/loading/Loading";
import { RecipeLayout } from "@/features/Recipe/components/RecipeLayout";
import { RecipePost } from "@/features/Recipe/components/RecipePost";
import { getRecipeThunk } from "@/features/Recipe/recipe.thunks";
import { useEffect, useMemo } from "react";

export function RecipePosts() {
  const dispatch = useAppDispatch();
  const recipe = useAppSelector((state) => state.recipe);
  useEffect(() => {
    dispatch(getRecipeThunk());
  }, []);

  const recipeList = useMemo(() => {
    if (recipe.isLoading) {
      return <Loading />;
    }

    return (
      <>
        {recipe.data.map((recipe) => (
          <RecipePost recipe={recipe} key={recipe.description} />
        ))}
      </>
    );
  }, [recipe.isLoading]);

  return (
    <RecipeLayout>
      <div className="border border-secondary max-w-2xl">{recipeList}</div>
    </RecipeLayout>
  );
}
