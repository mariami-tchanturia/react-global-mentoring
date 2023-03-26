import { useState } from 'react';
import { Button, Input } from '../../common';

import styles from './SearchForm.module.scss';

const SearchForm = ({initialSearchQuery , onSearch}) => {
	const [searchQuery , setSearchQuery] = useState(initialSearchQuery || '');

	function handleKeyUp(e) {
		if (e.key === "Enter") {
			console.log("Enter was triggered");
			onSearch(searchQuery);
		}
	}

  return (
    <>
			<div className={styles.searchForm}>
				<h1 className={styles.searchForm__title}>SearchForm Component</h1>
				<div className={styles.searchForm__form}>
					<Input
						placeholderText='What do you want to watch?'
						className='searchForm__input'
						value={searchQuery}
						onChange={setSearchQuery}
						onKeyUp={handleKeyUp}
						required={false}
					/>
					<Button onClick={() => onSearch(searchQuery)} className="btn--primary">
						Search
					</Button>
				</div>
			</div>
    </>
  );
};

export default SearchForm;
