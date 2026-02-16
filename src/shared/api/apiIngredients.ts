import { withBase } from "../styles/constants";
import type { Ingredient } from "../types/Ingredient";

const API_URL = withBase('api/ingredients.json');

function wait(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export async function getIngredients(): Promise<Ingredient[]> {
  return wait(500)
    .then(() => fetch(API_URL))
    .then(response => response.json());
}