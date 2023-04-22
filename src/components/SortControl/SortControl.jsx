import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './SortControl.module.scss';

export const SortControl = ({ options, label, setSortCriterion }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = ({ target }) => {
    const { value } = target;

    const selectedOptions = options.filter(({ name }) => name === value);

    setSelectedOption(selectedOptions[0]);
    setSortCriterion(selectedOptions[0].value);
  };

  return (
    <div className={styles.sortControl}>
      <label htmlFor='sortControl' className={styles.sortControl_label}>
        {label}

        <select
          id='sortControl'
          className={styles.sortControl_select}
          onChange={handleChange}
          value={selectedOption.name}
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
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  label: PropTypes.string,
  setSortCriterion: PropTypes.func,
};
