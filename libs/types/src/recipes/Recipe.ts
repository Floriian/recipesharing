export interface IRecipe {
  _id: any;
  name: string;
  kcal: number;
  glutenFree: boolean;
  description: string;
  ingredients: string;
  createdAt: Date;
}
