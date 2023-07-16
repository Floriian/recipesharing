import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { Loading } from "@/components/loading/Loading";
import { Input } from "@/components/ui/input";
import { RecipeCard } from "@/features/Recipe/components/RecipeCard";
import { getRecipeThunk } from "@/features/Recipe/recipe.thunks";
import { IRecipe } from "@recipe-sharing/types";
import { useEffect, useMemo, useState } from "react";

export function RecipePage() {
  const [search, setSearch] = useState<string>("");
  const [recipe, setRecipe] = useState<IRecipe[]>();

  const recipeState = useAppSelector((state) => state.recipe);
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(getRecipeThunk());
    };
  }, []);

  useEffect(() => {
    if (search.length <= 0 && search === "") {
      setRecipe(recipeState.data);
    } else {
      const newRecipes = recipeState.data.filter((r) =>
        r.name.toLowerCase().includes(search.toLowerCase())
      );
      setRecipe(newRecipes);
    }
  }, [search]);

  const recipeList = useMemo(() => {
    if (recipeState.isLoading) {
      return <Loading />;
    }

    return (
      <>
        {recipe?.map((r) => (
          <RecipeCard key={r._id} recipe={r} />
        ))}
      </>
    );
  }, [recipeState.isLoading, search]);

  return (
    <>
      <div className="flex w-full justify-center">
        <Input
          placeholder="Type to search"
          className="w-96"
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2">
        {recipeList}
      </div>
    </>
  );
}
