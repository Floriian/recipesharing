import { useAppSelector } from "@/app/store/hooks";

export function UserRecipes() {
  const userRecipes = useAppSelector((state) => state.user.data.recipes);

  return (
    <>
      {userRecipes.map((recipe, i) => (
        <div key={i}>{recipe._id}</div>
      ))}
    </>
  );
}
