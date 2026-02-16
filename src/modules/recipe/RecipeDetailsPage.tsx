import { useContext } from "react";
import styles from './RecipeDetailsPage.module.scss';
import { RecipesContext } from "../../shared/context/RecipesContext";
import { useNavigate, useParams } from "react-router-dom";
import { PowerDetails } from "../../shared/ui/powerDetails/PowerDetails";
import { ComplexityDetails } from "../../shared/ui/complexityDetails/ComplexityDetails";
import { TypeDetails } from "../../shared/ui/typeDetails/TypeDetails";
import { Ingredient } from "../../shared/ui/ingredient/Ingredient";
import { FavoriteButton } from "../../shared/ui/buttons/favoriteButton/FavoriteButton";

export const RecipeDetailsPage = () => {
  const { recipes } = useContext(RecipesContext);
  const { recipeId } = useParams<{ recipeId?: string }>();
  const navigate = useNavigate();

  const currentRecipe = recipeId
    ? recipes.find(recipe => recipe.id === Number(recipeId))
    : undefined;

  const recipeIngredients = currentRecipe?.ingredients;

  const recipeInstructions = currentRecipe?.instructions;

  const removeStepNumber = (value: string) =>
    value.replace(/^\d+\.\s/, "");

  return (
    <div className={styles.container}>
      <div 
        className={styles.backButton}
        onClick={() => {navigate('/')}}
      >
        <span className={styles.backButton__icon} />
        <p className={styles.backButton__title}>Back</p>
      </div>

      <div className={styles.recipe}>
        <div className={styles.recipe__mainBlock}>
          <div className={styles.pictureBlock}>
            <img 
              className={styles.picture}
              src="src/img/tunaSandwich.jpg" 
              alt="recipe picture" 
            />

            <div className={styles.specs}>
              <FavoriteButton />
            </div>
          </div>
          
          <div className={styles.mainInfo}>
            <h2 className={styles.mainInfo__title}>
              {currentRecipe?.title}
            </h2>
            <p className={styles.mainInfo__description}>
              {currentRecipe?.description}
            </p>
            <div className={styles.mainInfo__details}>
              {currentRecipe && (
                <>
                  <PowerDetails recipe={currentRecipe} />
                  <TypeDetails recipe={currentRecipe} />
                  <ComplexityDetails recipe={currentRecipe} />
                </>
              )}
            </div>
          </div>
        </div>

        <div className={styles.recipe__detailsBlock}>
          <div className={styles.preparation}>
            {recipeInstructions && (
              recipeInstructions.map(instruction => (
                <div className={styles.preparation__item} key={instruction.id}>
                  <p className={styles.preparation__instruction}>
                    {removeStepNumber(instruction.text)}
                  </p>
                  <div className={styles.preparation__stepNumber}>
                    <p className={styles.preparation__stepNumberText}>{instruction.id}</p>
                  </div>
              </div>
              ))
            )}
           
          </div>

          <div className={styles.ingredients}>
            <h2 className={styles.ingredients__title}>
              Ingredients
            </h2>
            {recipeIngredients && (
              <ul className={styles.ingredients__list}>
                {recipeIngredients.map(ingredient => (
                  <Ingredient ingredient={ingredient} key={ingredient.id} />
                ))}
              </ul>
            )}
            <div className={styles.ingredients__button}>
              <div className={styles.buttonInner}>
                <p className={styles.buttonText}>Add to cart</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}