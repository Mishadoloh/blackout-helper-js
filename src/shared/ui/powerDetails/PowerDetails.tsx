import type React from "react";
import type { Recipe } from "../../types/Recipe";
import styles from './PowerDetails.module.scss';

type Props = {
  recipe: Recipe;
};

export const PowerDetails: React.FC<Props> = ({ recipe }) => {
  return (
    <div className={styles.power}>
      <span 
        className={styles.power__icon} 
        aria-hidden="true"
      />
      <p className={styles.power__title}>
        {recipe.category === 'no_light'
          ? <p>Without power</p>
          : <p>With power</p>
      }
      </p>
    </div>
  );
}