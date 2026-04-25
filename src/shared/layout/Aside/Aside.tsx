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
    <aside className={styles.sidebar}>
      <header className={styles.sidebar__header}>
        <img 
          src="src/img/logo.svg" 
          className={styles.sidebar__logo} 
          alt="logo"
        />
      </header>

      <nav className={styles.sidebar__nav}>
        <ul className={styles.sidebar__list}>
          <li className={styles.sidebar__item}>
            <NavLink className={styles.sidebar__link} to="/">
              <span className={styles.sidebar__iconHome} />
              <h4 className={styles.sidebar__title}>Recipes</h4>
            </NavLink>
          </li>
          <li className={styles.sidebar__item}>
            <NavLink className={styles.sidebar__link} to="/favorites">
              <span className={styles.sidebar__iconFavorite} />
              <h4 className={styles.sidebar__title}>Favorites</h4>
              {count > 0 && <span className={styles.sidebar__count}>{count}</span>}
            </NavLink>
          </li>
          <li className={styles.sidebar__item}>
            <NavLink className={styles.sidebar__link} to="/cart">
              <span className={styles.sidebar__iconCart} />
              <h4 className={styles.sidebar__title}>Cart</h4>
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={styles.sidebar__user}>
        <button className={styles.user__button}></button>
        <div className={styles.user__info}>
          <span className={styles.user__icon} />
          <p className={`body-text ${styles.user__name}`}>Albert Flores</p>
          <span className={styles.user__arrow} />
        </div>
        
      </div>
    </aside>
  );
};
