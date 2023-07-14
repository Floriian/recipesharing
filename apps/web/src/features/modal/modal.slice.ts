import { createSlice } from "@reduxjs/toolkit";

type ModalState = {
  createRecipeModel: boolean;
};

const initialState: ModalState = {
  createRecipeModel: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleCreateRecipeModal: (state) => {
      state.createRecipeModel != state.createRecipeModel;
    },
  },
});

export const { toggleCreateRecipeModal } = modalSlice.actions;
