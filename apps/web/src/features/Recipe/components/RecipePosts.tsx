import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { Loading } from "@/components/loading/Loading";
import { RecipeLayout } from "@/features/Recipe/components/RecipeLayout";
import { RecipePost } from "@/features/Recipe/components/RecipePost";
import { getRecipeThunk } from "@/features/Recipe/recipe.thunks";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
export function RecipePosts() {
  const { isAuthenticated } = useAuth0();
  const dispatch = useAppDispatch();
  const recipe = useAppSelector((state) => state.recipe);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getRecipeThunk());
  }, []);

  const recipeList = useMemo(() => {
    if (recipe.isLoading) {
      return <Loading />;
    }

    if (recipe.data.length <= 0) {
      return (
        <p className="text-center text-red-500 font-bold">
          There are no recipes!
        </p>
      );
    }

    return (
      <>
        {recipe.data.map((recipe) => (
          <RecipePost recipe={recipe} key={recipe._id} />
        ))}
      </>
    );
  }, [recipe.isLoading, recipe.data]);

  return (
    <RecipeLayout>
      <div className="flex flex-col gap-4 justify-center">
        {isAuthenticated && (<Button
          className="w-full"
          type="button"
          onClick={() => navigate("/recipes/new")}
          >
          Create Recipe
        </Button>)}
        {recipeList}
      </div>
    </RecipeLayout>
  );
}
