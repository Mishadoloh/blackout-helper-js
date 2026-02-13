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
import { RecipeProvider } from "../shared/context/RecipeProvider";


export const Root = () => (
  <Router>
    <RecipeProvider>
      <Routes>
        <Route path="/" element={<App />}> 
          <Route index element={<RecipeListPage />} />
          <Route path="home" element={<Navigate to="/" replace />} />

          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="cart" element={< CartPage />} />
        </Route>
        
      </Routes>
    </RecipeProvider>
  </Router>
)