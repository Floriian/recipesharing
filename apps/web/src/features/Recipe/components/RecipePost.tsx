import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IRecipe } from "@recipe-sharing/types";

interface Props {
  recipe: IRecipe;
}

export function RecipePost({ recipe }: Props) {
  const { createdAt, description, glutenFree, ingredients, kcal, name } =
    recipe;

  const isLongDescription = description.length > 150;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          {isLongDescription
            ? `${description.substring(0, 150)}...`
            : description}
        </p>
      </CardContent>
      <CardFooter className="text-muted">
        {/* <p>{ingredients.length}</p> */}
        <p>{glutenFree}</p>
      </CardFooter>
    </Card>
  );
}
