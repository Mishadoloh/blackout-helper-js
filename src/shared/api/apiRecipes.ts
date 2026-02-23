import { withBase } from "../styles/constants";
import type { Recipe } from "../types/Recipe";

const API_URL = withBase('api/recipes.json');

function wait(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export async function getRecipes(): Promise<Recipe[]> {
  return wait(500)
    .then(() => fetch(API_URL))
    .then(response => response.json());
}