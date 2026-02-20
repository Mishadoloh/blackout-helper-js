import { useEffect, useRef, useState } from "react";
import type { FilterType } from "../../../types/FilterType";
import styles from './FilterByType.module.scss';

type Props = {
  value: FilterType;
};

const options: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'All options' },
  { value: 'breakfast', label: 'Breakfast' },
  { value: 'lunch', label: 'Lunch' },
  { value: 'dinner', label: 'Dinner' },
];

export const FilterByType: React.FC<Props> = ({ value }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current && 
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  return (
    <div className={styles.filter}>
      <p className={styles.title}>Type of dish</p>
      <div className={styles.selectWrapper} ref={selectRef}>
        <div 
           className={styles.select}
           onClick={() => setIsOpen(prev => !prev)}
        >
          <span className={styles.value}>
            {options.find(option => option.value === value)?.label}
          </span>

          <img
            src="src/img/icons/arrowDown.svg"
            alt="arrow"
            className={isOpen ? styles.arrowOpen : styles.arrow}
          />
        </div>

        {isOpen && (
          <ul className={styles.dropdown}>
            {options.map(option => (
              <li
                key={option.value}
                onClick={() => {setIsOpen(false)}}
                className={styles.listItem}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}