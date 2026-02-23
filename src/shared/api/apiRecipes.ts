import { withBase } from "../styles/constants";
import type { Recipe } from "../types/Recipe";

const API_URL = import.meta.env.VITE_API_URL;

// const DEFAULT_HEADERS = {
//   'Content-Type': 'application/json; charset=utf-8',
// };

function wait(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export async function getRecipes(): Promise<Recipe[]> {
  await wait(500);

  const response = await fetch(`${API_URL}/catalog/recipes/`);

  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }

  const data: Recipe[] = await response.json();

  return data.map(recipe => ({
    ...recipe,
    image: recipe.image ? `${API_URL}${recipe.image}` : '/placeholder.png'
  }));
}