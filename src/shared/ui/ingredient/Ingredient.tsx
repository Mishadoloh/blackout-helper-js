import type React from "react";

import styles from './Ingredient.module.scss';
import type { IngredientType } from "../../types/Recipe";
import { useState } from "react";

type Props = {
  ingredient: IngredientType
}

export const Ingredient: React.FC<Props> = ({ ingredient }) => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  return (
    <li className={styles.ingredient} key={ingredient.id}>
      <div className={styles.ingredient__item}>
        <p className={styles.ingredient__name}>
          {ingredient.name}
        </p>

        <div className={styles.ingredient__details}>
          <p>{`${ingredient.quantity} ${ingredient.unit}`}</p>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(prev => !prev)}
          />
        </div>
      </div>
    </li>
  );
}