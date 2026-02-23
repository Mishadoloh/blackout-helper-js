import { withBase } from "../styles/constants";
import type { IngredientType } from "../types/Recipe";

const API_URL = withBase('api/ingredients.json');

function wait(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export async function getIngredients(): Promise<IngredientType[]> {
  return wait(500)
    .then(() => fetch(API_URL))
    .then(response => response.json());
}
