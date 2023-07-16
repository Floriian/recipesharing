import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { getIngredientThunk } from "@/features/Ingredients/ingredients.thunk";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IIngredient } from "@recipe-sharing/types";
import { useEffect, useMemo, useState } from "react";

export function IngredientSelect() {
  const [selectedIngredients, setSelectedIngredients] =
    useState<IIngredient[]>();

  const ingredients = useAppSelector((state) => state.ingredients);
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(getIngredientThunk());
    };
  }, []);

  const ingredientsList = useMemo(() => {
    if (ingredients.isLoading) {
      return (
        <SelectGroup>
          <SelectLabel>Loading</SelectLabel>
        </SelectGroup>
      );
    }

    return (
      <>
        {ingredients.data.map((ingredient, i) => (
          <SelectItem
            key={i + ingredient.name + Math.random()}
            value={ingredient.name}
          >
            {ingredient.name}
          </SelectItem>
        ))}
      </>
    );
  }, [ingredients.isLoading]);

  return (
    <Select>
      <SelectTrigger className="w-32">
        <SelectValue placeholder="Select an ingredient" />
      </SelectTrigger>
      <SelectContent>{ingredientsList}</SelectContent>
    </Select>
  );
}
