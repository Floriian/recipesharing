export interface IRecipe {
  _id: any;
  name: string;
  kcal: number | string;
  glutenFree: boolean;
  description: string;
  ingredients: string;
  createdAt: Date;
}
