import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FavoritesContext } from "../../context/FavoritesContextStore";
import { RecipesContext } from "../../context/RecipesContext";
import styles from './Aside.module.scss';

export const Aside = () => {
  const { favorites } = useContext(FavoritesContext);
  const { recipes } = useContext(RecipesContext);

  const count = recipes.filter(recipe => favorites.includes(recipe.id)).length;

  return (
    <aside className={styles.aside}>
      <header className={styles.header}>
        <a href="/" className={styles.header__logo}>Logo</a>
      </header>

      <nav className={styles.sidebar__nav}>
        <ul className={styles.sidebar__nav__list}>
          <li className={styles.sidebar__nav__list__item}>
            <NavLink className={styles.sidebar__nav__link} to="/">
              Recipes
            </NavLink>
          </li>
          <li className={styles.sidebar__nav__list__item}>
            <NavLink className={styles.sidebar__nav__link} to="/favorites">
              Favorites 
              {count > 0 && <span className={styles.sidebar__nav__count}>{count}</span>}
            </NavLink>
          </li>
          <li className={styles.sidebar__nav__list__item}>
            <NavLink className={styles.sidebar__nav__link} to="cart">
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
