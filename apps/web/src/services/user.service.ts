import { axiosInstance } from "@/services/axiosInstace";
import { BaseResponse } from "@/types";
import { IUser } from "@recipe-sharing/types";

export const userService = {
  getUser: async (includeRecipes?: boolean) => {
    const { data } = await axiosInstance.get<BaseResponse<IUser>>(
      `/user?=includeRecipes=${includeRecipes}`
    );
    return data;
  },
};
