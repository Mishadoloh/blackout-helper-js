import styles from './FilterByPower.module.scss';
import type { FilterPower } from "../../../types/FilterPower";

type Props = {
  value: FilterPower;
  onChange: (value: FilterPower) => void;
};

export const FilterByPower: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className={styles.filter_power}>
      <p className={styles.title}>Can be cooked</p>
      <div className={styles.buttons}>
        <button 
          className={`${styles.button} ${value === 'all' ? styles.active : ''}`}
          onClick={() => onChange('all')}
        >
          All
        </button>
        <button 
          className={`${styles.button} ${value === 'with_light' ? styles.active : ''}`}
          onClick={() => onChange('with_light')}
        >
          With power
        </button>
        <button 
          className={`${styles.button} ${value === 'no_light' ? styles.active : ''}`}
          onClick={() => onChange('no_light')}
        >
          Without power
        </button>
      </div>
    </div>
  );
};
