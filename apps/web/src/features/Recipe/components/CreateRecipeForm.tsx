import { CreateRecipeDto } from "@recipe-sharing/types";
import { useForm } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { recipeService } from "@/services/recipe.service";
export function CreateRecipeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateRecipeDto>({
    resolver: classValidatorResolver(CreateRecipeDto),
  });

  const submitData = async (data: CreateRecipeDto) => {
    try {
      const res = recipeService.createRecipe(data);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => console.log(errors), [errors]);

  return (
    <form
      onSubmit={handleSubmit(submitData)}
      className="grid grid-cols-1 gap-2"
    >
      <Input {...register("name")} placeholder="Recipe name" />
      <Textarea {...register("description")} placeholder="Desciption" />

      <Textarea {...register("ingredients")} placeholder="Ingredients" />

      <div className="grid grid-cols-1 md:grid-cols-2">
        <Input type="number" {...register("kcal")} placeholder="KCAL" />
        <div className="flex items-center gap-1.5">
          <Checkbox id="glutenfree" {...register("glutenFree")} />
          <label htmlFor="glutenfree">Gluten free</label>
        </div>
      </div>
      <Button type="submit">Create Recipe</Button>
    </form>
  );
}
