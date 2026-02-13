import type { Recipe } from "../../types/Recipe";
import styles from './RecipeCard.module.scss';

type Props= {
  recipe: Recipe;
}

export const RecipeCard: React.FC<Props> = ({ recipe }) => {
  const renderComplexity = () => {
    switch (recipe.Complexity) {
      case 'easy':
        return (
          <>
            <span className={styles.complexity__icon_active} />
            <span className={styles.complexity__icon} />
            <span className={styles.complexity__icon} />
          </>
        );
  
      case 'medium':
        return (
          <>
            <span className={styles.complexity__icon_active} />
            <span className={styles.complexity__icon_active} />
            <span className={styles.complexity__icon} />
          </>
        );
  
      case 'hard':
        return (
          <>
            <span className={styles.complexity__icon_active} />
            <span className={styles.complexity__icon_active} />
            <span className={styles.complexity__icon_active} />
          </>
        );
  
      default:
        return null;
    }
  };

  return (
    <div className={styles.recipeCard}>
      <div className={styles.pictureBlock}>
        <img 
          className={styles.picture} 
          src="src/img/tunaSandwich.jpg" 
          // src={recipe.Image_url}
          alt="tuna sandwich" 
        />

        <div className={styles.specs}>
          <div className={styles.time}>
            <span 
              className={styles.time__icon} 
              aria-hidden="true"
            />
            <p className={styles.time__text}>{recipe.Cooking_time}m</p>
          </div>

          <button className={styles.favorite}>
            <span 
              className={styles.favorite__icon}
              aria-hidden="true"
            />
          </button>
        </div>
      
      </div>
     

      <h2 className={styles.recipeTitle}>{recipe.Title}</h2>
      <p className={styles.recipeDescription}>{recipe.Description}</p>

      <div className={styles.recipeDetails}>
        <div className={styles.power}>
          <span 
            className={styles.power__icon} 
            aria-hidden="true"
          />
          <p className={styles.power__title}>{recipe.Category}</p>
        </div>

        <div className={styles.complexity}>
          {renderComplexity()}
        </div>
  
      </div>

    </div>
  );
}