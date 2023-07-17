import { CreateIngredientDto, CreateRecipeDto } from "@recipe-sharing/types";
import { useForm } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { IngredientInput } from "@/features/Ingredients/components/IngredientInput";
export function CreateRecipeForm() {
  const form = useForm<CreateRecipeDto>({
    resolver: classValidatorResolver(CreateIngredientDto),
  });

  const handleSubmit = async (data: CreateRecipeDto) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      className="grid grid-cols-1 gap-2"
    >
      <Input {...form.register("name")} placeholder="Recipe name" />
      <Textarea {...form.register("description")} placeholder="Desciption" />

      <IngredientInput />

      <Button type="submit">Create Recipe</Button>
    </form>
  );
}
