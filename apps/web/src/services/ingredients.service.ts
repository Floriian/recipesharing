import { axiosInstance } from "@/services/axiosInstace";
import { BaseResponse } from "@/types";
import { IIngredient } from "@recipe-sharing/types";

export const ingredientsService = {
  getIngredients: async () => {
    const res = await axiosInstance<BaseResponse<IIngredient>>("/ingredients");
    return res;
  },
};
