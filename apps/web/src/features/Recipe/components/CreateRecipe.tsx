import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CreateRecipeForm } from "@/features/Recipe/components/CreateRecipeForm";

export function CreateRecipe() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create a new recipe</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new recipe</DialogTitle>
        </DialogHeader>
        <CreateRecipeForm />
      </DialogContent>
    </Dialog>
  );
}
