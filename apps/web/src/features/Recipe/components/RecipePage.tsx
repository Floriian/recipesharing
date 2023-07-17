import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { Loading } from "@/components/loading/Loading";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { RecipeCard } from "@/features/Recipe/components/RecipeCard";
import { getRecipeThunk } from "@/features/Recipe/recipe.thunks";
import { IRecipe } from "@recipe-sharing/types";
import { useEffect, useMemo, useState } from "react";

export function RecipePage() {
  const [search, setSearch] = useState<string>("");
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [glutenFree, setGlutenFree] = useState<boolean>(false);

  const recipeState = useAppSelector((state) => state.recipe);
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(getRecipeThunk());
    };
  }, []);

  useEffect(() => {
    if (search === "") {
      setRecipes(recipeState.data);
    }

    if (search != "") {
      const newRecipes = recipeState.data.filter((r) =>
        r.name.toLowerCase().includes(search.toLowerCase())
      );
      setRecipes(newRecipes);
    }
  }, [search]);

  const recipeList = useMemo(() => {
    if (recipeState.isLoading) {
      return <Loading />;
    }

    return (
      <>
        {recipes?.map((r) => (
          <RecipeCard key={r._id} recipe={r} />
        ))}
      </>
    );
  }, [recipeState.isLoading, recipes]);

  const handleCheckbox = () => {
    setGlutenFree(!glutenFree);
  };

  return (
    <>
      <div className="flex w-full justify-center">
        <div>
          {/* //TODO FINISH CHECKBOx */}
          <Input
            placeholder="Type to search"
            className="w-96"
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
          />
          <div className="flex items-center gap-1.5">
            <Checkbox id="glutenfree" onChange={handleCheckbox} />
            <label htmlFor="glutenfree">Gluten free</label>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2">
        {recipeList}
      </div>
    </>
  );
}
