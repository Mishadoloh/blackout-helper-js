import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import App from "./App";
import { RecipeListPage } from "../modules/recipeList/RecipeListPage";
import { FavoritesPage } from "../modules/favorites/FavoritesPage";
import { CartPage } from "../modules/cart/CartPage";
import { RecipesProvider } from "../shared/context/RecipeProvider";
import { FavoritesProvider } from "../shared/context/FavoritesContext";
import { RecipeDetailsPage } from "../modules/recipe/RecipeDetailsPage";


export const Root = () => (
  <Router>
    <RecipesProvider>
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<App />}> 
            <Route index element={<RecipeListPage />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="recipes/:recipeId" element={<RecipeDetailsPage/>} />
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="cart" element={<CartPage />} />
          </Route>
        </Routes>
      </FavoritesProvider>
    </RecipesProvider>
  </Router>
)