import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { PersonIcon } from "@radix-ui/react-icons";
import { IRecipe } from "@recipe-sharing/types";
import { useNavigate } from "react-router-dom";

interface Props {
  recipe: IRecipe;
}

export function RecipePost({ recipe }: Props) {
  const { createdAt, description, glutenFree, name, _id } = recipe;
  const navigate = useNavigate();

  const isLongDescription = description.length > 150;
  return (
    <Card className="w-[36rem]">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback>
              <PersonIcon />
            </AvatarFallback>
          </Avatar>
          <div className="text-primary">
            <p>Floriian posted a new recipe.</p>
            <p className="text-gray-400">
              {createdAt.toString().split("T")[0]}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 ">
        <p>
          {isLongDescription
            ? `${description.substring(0, 150)}...`
            : description}
        </p>
        <CardTitle>{name}</CardTitle>
        <Button onClick={() => navigate(`/recipes/${_id}`)}>See more</Button>
      </CardContent>
      <CardFooter className="text-muted">
        {/* <p>{ingredients.length}</p> */}
        <p>{glutenFree}</p>
      </CardFooter>
    </Card>
  );
}
