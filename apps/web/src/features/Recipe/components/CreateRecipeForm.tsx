import { CreateRecipeDto } from "@recipe-sharing/types";
import { useForm } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { recipeService } from "@/services/recipe.service";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
export function CreateRecipeForm() {
  const form = useForm<CreateRecipeDto>({
    resolver: classValidatorResolver(CreateRecipeDto),
    defaultValues: {
      glutenFree: false,
      description: "",
      ingredients: "",
      kcal: "0", //Because CreateRecipeDto kcal field is @IsNumberString() and it needs to be string.
      name: "",
    },
  });

  const submitData = async (data: CreateRecipeDto) => {
    try {
      const res = recipeService.createRecipe(data);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  // useEffect(() => console.log(errors), [errors]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitData)}
        className="grid grid-cols-1 gap-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Recipe name</FormLabel>
              <FormControl>
                <>
                  <Input placeholder="Recipe name" {...field} />
                </>
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gluten-Free</FormLabel>
              <FormControl>
                <Textarea placeholder="Description" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="ingredients"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ingredients</FormLabel>
              <FormControl>
                <Textarea placeholder="Description" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 items-center place-items-center">
          <FormField
            control={form.control}
            name="kcal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kalories</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="kcal" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="glutenFree"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gluten Free?</FormLabel>
                <FormControl className="flex gap-4">
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange as () => void}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">Create Recipe</Button>
      </form>
    </Form>
  );
}
