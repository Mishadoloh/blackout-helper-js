import { NavLink } from "react-router-dom";
import type { Recipe } from "../../types/Recipe";
import styles from './RecipeCard.module.scss';
import { PowerDetails } from "../powerDetails/PowerDetails";
import { ComplexityDetails } from "../complexityDetails/ComplexityDetails";
import { FavoriteButton } from "../buttons/favoriteButton/FavoriteButton";

type Props= {
  recipe: Recipe;
}

export const RecipeCard: React.FC<Props> = ({ recipe }) => {
  return (
    <div className={styles.recipeCard}>

      <NavLink 
        to={`/recipes/${recipe.id}`} 
        className={styles.cardLink}
      >
        <div className={styles.pictureBlock}>
          <img 
            className={styles.picture} 
            src="src/img/tunaSandwich.jpg" 
            // src={recipe.image_url}
            alt="tuna sandwich" 
          />

          <div className={styles.specs}>
            <div className={styles.time}>
              <span 
                className={styles.time__icon} 
                aria-hidden="true"
              />
              <p className={styles.time__text}>{recipe.cooking_time}m</p>
            </div>

            <FavoriteButton />
        
          </div>
        
        </div>
        <h2 className={styles.recipeTitle}>{recipe.title}</h2>
      </NavLink>

      <p className={styles.recipeDescription}>{recipe.description}</p>

      <div className={styles.recipeDetails}>
        <PowerDetails recipe={recipe} />
        <ComplexityDetails recipe={recipe}/>
  
      </div>

    </div>
  );
}