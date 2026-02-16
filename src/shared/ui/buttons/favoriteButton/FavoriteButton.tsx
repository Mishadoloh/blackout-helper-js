import styles from './FavoriteButton.module.scss';

export const FavoriteButton = () => {
  return (
    <button className={styles.favorite}>
      <span 
        className={styles.favorite__icon}
        aria-hidden="true"
      />
    </button>
  );
}