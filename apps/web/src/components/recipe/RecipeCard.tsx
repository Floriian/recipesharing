import React from "react";
import { IRecipe } from "@recipe-sharing/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
export function RecipeCard({
  description,
  glutenFree,
  ingredients,
  kcal,
  name,
}: IRecipe) {
  const showDots = description.length >= 150;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{showDots ? description.slice(0, 150) + "..." : description}</p>
        <div className="text-sm text-zinc-300 flex">
          {glutenFree ? "Gluten-free" : "Not gluten-free"}
          {kcal} kcal
          {ingredients.length} ingredients
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
