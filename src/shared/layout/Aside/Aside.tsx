import { NavLink } from "react-router-dom";
import styles from './Aside.module.scss';

export const Aside = () => {
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
            <NavLink className={styles.sidebar__nav__link} to="favorites">
              Favorites
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