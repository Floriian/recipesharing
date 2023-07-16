import { PlateIcon } from "@/components/icons/PlateIcon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ClockIcon } from "@radix-ui/react-icons";
import { IRecipe } from "@recipe-sharing/types";
import { useNavigate } from "react-router-dom";

interface Props {
  recipe: IRecipe;
}
export function RecipeCard({ recipe }: Props) {
  const { description, name, _id } = recipe;
  const isLongDescription = description.length > 150;
  const navigate = useNavigate();
  return (
    <Card>
      <CardHeader>
        {name}
        <div className="flex items-center gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex items-center gap-2">
                  <PlateIcon />
                  <p>
                    {recipe?.ingredients?.length
                      ? recipe.ingredients.length
                      : 0}
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
      </CardHeader>
      <CardContent>
        {isLongDescription
          ? description.substring(0, 150) + "..."
          : description}
      </CardContent>
      <CardFooter>
        <Button onClick={() => navigate(`/recipes/${_id}`)}>See more</Button>
      </CardFooter>
    </Card>
  );
}
