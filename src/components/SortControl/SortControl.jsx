import { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import styles from './SortControl.module.scss';

export const SortControl = ({ options, label, setSortCriterion }) => {
  const { query, push } = useRouter();
  const [selectedOption, setSelectedOption] = useState(
    getSelectedOptionByName(query.sortBy) || options[0]
  );

  const handleChange = ({ target }) => {
    const { value } = target;

    const selectedOption = options.filter(({ name }) => name === value)[0];

    setSelectedOption(selectedOption);
    // setSortCriterion(selectedOption.value);

    push({ query: { ...(query || {}), sortBy: selectedOption.value } });
  };

  function getSelectedOptionByName(name) {
    return options.filter(({ value }) => value === name)[0];
  }

  return (
    <div className={styles.sortControl}>
      <label htmlFor='sortControl' className={styles.sortControl_label}>
        {label}

        <select
          id='sortControl'
          className={styles.sortControl_select}
          onChange={handleChange}
          value={selectedOption.name}
          data-testid='sort-control'
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
