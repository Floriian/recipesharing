import { useAppSelector } from "@/app/store/hooks";
import { RecipeLayout } from "@/features/Recipe/components/RecipeLayout";
import { PlateIcon } from "@/components/icons/PlateIcon";
import { ClockIcon } from "@radix-ui/react-icons";
import { useParams } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ShowRecipe() {
  const { id } = useParams();

  const recipeState = useAppSelector((state) => state.recipe);
  const recipe = recipeState.data.find((recipe) => recipe._id == id);

  return (
    <RecipeLayout>
      <div className="rounded-sm w-2/4 border p-2">
        <h1 className="text-primary font-bold text-5xl">{recipe?.name}</h1>
        <p className="text-gray-500 text-sm">Created by Floriian</p>
        <div className="flex items-center gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex items-center gap-2">
                  <PlateIcon />
                  <p>
                    {/* {recipe?.ingredients.length ? recipe.ingredients.length : 0} */}
                  </p>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Ingredients</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div className="flex items-center gap-2">
            <ClockIcon />
            <p>15 min</p>
          </div>
        </div>
        <p className="text-gray-600">{recipe?.description}</p>
      </div>
    </RecipeLayout>
  );
}
