import { axiosInstance } from "@/services/axiosInstace";
import { BaseResponse } from "@/types";
import { CreateRecipeDto, IRecipe } from "@recipe-sharing/types";

export const recipeService = {
  getRecipes: async () => {
    const res = await axiosInstance.get<BaseResponse<IRecipe[]>>("/recipes");
    return res;
  },

  getRecipe: async (id: string) => {
    const res = await axiosInstance.get<BaseResponse<IRecipe>>(
      `/recipes/${id}`
    );
    return res;
  },
  createRecipe: async (data: CreateRecipeDto) => {
    const res = await axiosInstance.post<BaseResponse<IRecipe>>(
      "/recipes",
      data
    );
    console.log(res);
    return res;
  },
};
