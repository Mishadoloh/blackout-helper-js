import styles from './NoResults.module.scss';

export const NoResults = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>No recipes found</h2>
      <p className={styles.message}>
        Try changing your filters or search criteria to find what you're looking for.
      </p>
    </div>
  );
};
