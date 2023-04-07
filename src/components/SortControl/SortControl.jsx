import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './SortControl.module.scss';

export const SortControl = ({ options, label, defaultOption, onSort }) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleChange = ({ target }) => {
    const { value } = target;

    setSelectedOption(value);
    onSort(value);
  };

  return (
    <div className={styles.sortControl}>
      <label htmlFor='sortControl' className={styles.sortControl_label}>
        {label}

        <select
          id='sortControl'
          className={styles.sortControl_select}
          onChange={handleChange}
          value={selectedOption}
        >
          {options.map(({ id, name }) => (
            <option
              key={id}
              className={styles.sortControl_option}
              value={name}
              data-testid={`option-${id}`}
            >
              {name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

SortControl.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.string,
  defaultOption: PropTypes.string,
  onSort: PropTypes.func,
};
