import { axiosInstance } from "@/services/axiosInstace";
import { BaseResponse } from "@/types";
import { IRecipe } from "@recipe-sharing/types";

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
};
