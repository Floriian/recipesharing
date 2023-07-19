import { CreateIngredientDto, CreateRecipeDto } from "@recipe-sharing/types";
import { useForm } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useEffect } from "react";
export function CreateRecipeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateRecipeDto>({
    resolver: classValidatorResolver(CreateIngredientDto),
  });

  const submitData = async (data: CreateRecipeDto) => {
    console.log(data);
  };

  useEffect(() => console.log(errors), [errors]);

  return (
    <form
      onSubmit={handleSubmit(submitData)}
      className="grid grid-cols-1 gap-2"
    >
      <Input {...register("name")} placeholder="Recipe name" />
      <Textarea {...register("description")} placeholder="Desciption" />

      <Textarea {...register("ingredients.ingredients")} />

      <Button type="submit">Create Recipe</Button>
    </form>
  );
}
