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
            <a className={styles.sidebar__nav__link} href="#">
              Profile
            </a>
          </li>
          <li className={styles.sidebar__nav__list__item}>
            <a className={styles.sidebar__nav__link} href="#">
              Recipes
            </a>
          </li>
          <li className={styles.sidebar__nav__list__item}>
            <a className={styles.sidebar__nav__link} href="#">
              Favorites
            </a>
          </li>
          <li className={styles.sidebar__nav__list__item}>
            <a className={styles.sidebar__nav__link} href="#">
              Cart
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};