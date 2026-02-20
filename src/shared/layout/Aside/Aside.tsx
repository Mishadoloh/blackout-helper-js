import { NavLink } from "react-router-dom";
import styles from './Aside.module.scss';

export const Aside = () => {
  return (
    <aside className={styles.sidebar}>
      <header className={styles.sidebar__header}>
        <span className={styles.sidebar__logoIcon} />
        <a href="/" className={styles.sidebar__logo}>Off-Grid Chef</a>
      </header>

      <nav className={styles.sidebar__nav}>
        <ul className={styles.sidebar__list}>
          <li className={styles.sidebar__item}>
            <NavLink className={styles.sidebar__link} to="/">
              <span className={styles.sidebar__iconHome} />
              <p className={styles.sidebar__title}>Recipes</p>
            </NavLink>
          </li>
          <li className={styles.sidebar__item}>
            <NavLink className={styles.sidebar__link} to="favorites">
              <span className={styles.sidebar__iconCart} />
              <p className={styles.sidebar__title}>Favorites</p>
            </NavLink>
          </li>
          <li className={styles.sidebar__item}>
            <NavLink className={styles.sidebar__link} to="cart">
              <span className={styles.sidebar__iconFavorite} />
              <p className={styles.sidebar__title}>Cart</p>
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={styles.sidebar__userInfo}>
        <span className={styles.user__icon} />
        <div className={styles.user__details}>
          <p className={styles.user__name}>Albert Flores</p>
          <p className={styles.user__email}>al.flores@gmail.com</p>
        </div>
      </div>
    </aside>
  );
};