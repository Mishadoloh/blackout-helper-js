import React from "react";
import type { Recipe } from "../types/Recipe";

export type RecipesContextValue = {
  recipes: Recipe[];
  loading: boolean;
  errorMessage: boolean;
};

export const RecipesContext = React.createContext<RecipesContextValue>({
  recipes: [] as Recipe[],
  loading: false,
  errorMessage: false,
});
