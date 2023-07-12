import React from "react";
import { RecipeCard } from "../components/recipe/RecipeCard";
import { PostCard } from "../components/post/PostCard";
export function Homepage() {
  return (
    <div className="flex w-full justify-center">
      <PostCard />
    </div>
  );
}
