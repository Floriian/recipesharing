import { Injectable } from '@nestjs/common';
import { IIngredient, IngredientServiceActions } from '@recipe-sharing/types';

@Injectable()
export class IngredientsService implements IngredientServiceActions {
  getIngredients(): IIngredient[] | Promise<IIngredient[]> {
    throw new Error('Method not implemented.');
  }
  getIngredient(name: string): IIngredient | Promise<IIngredient> {
    throw new Error('Method not implemented.');
  }
  updateIngredient(id: string): IIngredient | Promise<IIngredient> {
    throw new Error('Method not implemented.');
  }
  deleteIngredient(id: string): boolean | Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
