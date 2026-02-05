import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import App from "./App";
import { RecipeList } from "../modules/recipeList/RecipeList";

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}> 
        <Route index element={<RecipeList />} />
        <Route path="home" element={<Navigate to="/" replace />} />
      </Route>
      
    </Routes>
  </Router>
)