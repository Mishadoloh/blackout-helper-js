import { withBase } from "../styles/constants";
import type { Ingredient } from "../types/Ingredient";

const API_URL = import.meta.env.VITE_API_URL;

function wait(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export async function getIngredients(): Promise<Ingredient[]> {
  await wait(500)
    
  const response = await fetch(`${API_URL}/catalog/recipes/`);

  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }

  return response.json();
}