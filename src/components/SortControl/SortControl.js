import React, {useState} from 'react'

import styles from './SortControl.module.scss'

function SortControl({options, label, defaultOption, onSort}) {
	const [selectedOption, setSelectedOption] = useState(defaultOption);

	function handleChange(e) {
		const { value } = e.target;
		setSelectedOption(value);
		onSort(value);
	}

	return (
		<div className={styles.sortControl}>
			<label htmlFor='sortControl' className={styles.sortControl_label}>
        {label}

        <select id='sortControl' className={styles.sortControl_select} onChange={handleChange} value={selectedOption}>
          {options.map(({id, name}) => (
            <option key={id} className={styles.sortControl_option} value={name}>
              {name}
            </option>
          ))}
        </select>
      </label>
		</div>
	)
}

export default SortControl;
