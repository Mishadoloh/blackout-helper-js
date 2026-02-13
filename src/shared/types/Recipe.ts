export type RecipeCategory = 'with_light' | 'no_light';

export type DishType = 'breakfast' | 'lunch' | 'dinner';

export type RecipeComplexity = 'easy' | 'medium' | 'hard';

export type Recipe = {
  ID: number;
  Title: string;
  Description: string;
  Image_url: string;
  Category: RecipeCategory;
  Type_of_dish: DishType;
  Cooking_time: number; // minutes
  Complexity: RecipeComplexity;
  View_count: number;
  Instructions: string;
};