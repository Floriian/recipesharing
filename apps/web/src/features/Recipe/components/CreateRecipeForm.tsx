import { CreateRecipeDto, UNITS, Units } from "@recipe-sharing/types";
import { useFieldArray, useForm } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { recipeService } from "@/services/recipe.service";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { addIngredient } from "@/features/Recipe/recipe.slice";
import { useAppDispatch } from "@/app/store/hooks";
import { useEffect, useMemo } from "react";
import { DevTool } from "@hookform/devtools";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export function CreateRecipeForm() {
  const dispatch = useAppDispatch();

  const form = useForm<CreateRecipeDto>({
    resolver: classValidatorResolver(CreateRecipeDto),
    defaultValues: {
      glutenFree: false,
      description: "",
      ingredients: [{}],
      kcal: "0", //Because CreateRecipeDto kcal field is @IsNumberString() and it needs to be string.
      name: "",
    },
  });

  const { fields, append, remove } = useFieldArray<CreateRecipeDto>({
    control: form.control,
    name: "ingredients",
  });

  const submitData = async (data: CreateRecipeDto) => {
    try {
      const { data: recipeServiceResponse } = await recipeService.createRecipe(
        data
      );
      dispatch(addIngredient(recipeServiceResponse.data));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log(form.formState.errors);
  }, [form.formState.errors]);

  const ingredientsInputs = useMemo(() => {
    return (
      <>
        <FormField
          control={form.control}
          name={`ingredients`}
          render={() => (
            <FormItem>
              <FormLabel>Ingredient</FormLabel>
              {fields.map((field, i) => (
                <div key={field.id}>
                  <FormControl>
                    <>
                      <div className="grid grid-cols-12 grid-rows-1 gap-2">
                        <div className="col-span-3">
                          <Input
                            type="number"
                            {...form.register(
                              `ingredients.${i}.amount` as const
                            )}
                            {...field}
                          />
                        </div>
                        <div className="col-span-3 col-start-4">
                          <Select
                            {...form.register(`ingredients.${i}.unit` as const)}
                            {...field}
                            onValueChange={(e) =>
                              form.setValue(`ingredients.${i}.unit`, e as Units)
                            }
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue>Unit</SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                {Object.values(UNITS).map((v) => (
                                  <SelectItem defaultValue="" value={v} key={v}>
                                    {v}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="col-span-6 col-start-7">
                          <Input
                            {...form.register(`ingredients.${i}.name` as const)}
                            {...field}
                          />
                        </div>
                      </div>
                      <div className="col-span-12 mt-2 row-start-2 flex gap-2">
                        <Button
                          className="w-full bg-orange-500"
                          type="button"
                          onClick={() => {
                            remove(i);
                            form.unregister(`ingredients.${i}`);
                          }}
                          disabled={fields.length <= 1}
                        >
                          Remove ingredient
                        </Button>
                        <Button
                          className="w-full"
                          type="button"
                          onClick={() => append(field)}
                        >
                          Add Ingredient
                        </Button>
                      </div>
                    </>
                  </FormControl>
                </div>
              ))}
            </FormItem>
          )}
        />
      </>
    );
  }, [fields]);

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
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Description" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        {ingredientsInputs}

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

        <Button type="submit" className="bg-green-800">
          Create Recipe
        </Button>
      </form>
      <DevTool control={form.control} />
    </Form>
  );
}
