import { withBase } from "../styles/constants";
import type { Recipe } from "../types/Recipe";

const API_URL = withBase('api/recipes.json');

// const DEFAULT_HEADERS = {
//   'Content-Type': 'application/json; charset=utf-8',
// };

function wait(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export async function getRecipes(): Promise<Recipe[]> {
  return wait(500)
    .then(() => fetch(API_URL))
    .then(response => response.json());
}