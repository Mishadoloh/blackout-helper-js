import styles from './FilterByPower.module.scss';

export const FilterByPower = () => {
  return (
    <div className={styles.filter_power}>
      <p className={styles.title}>Can be cooked</p>
      <div className={styles.buttons}>
        <button className={styles.button}>All</button>
        <button className={styles.button}>With power</button>
        <button className={styles.button}>Without power</button>
      </div>
    </div>
  );
};
