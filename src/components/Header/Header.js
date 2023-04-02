import React from 'react'

import { Button } from '../../common'
import { Logo, SearchForm } from "../"

import styles from './Header.module.scss'

function Header() {
	return (
		<header className={styles.header}>
			<div className={`${styles.logoButtonWrapper} container-lg`}>
				<Logo/>
				<Button className="addMovie">
					+ Add Movie
				</Button>
			</div>

			<div className={`${styles.titleSearchWrapper} container-md`}>
				<h1 className={styles.header__title}>Find your movie</h1>
				<SearchForm initialSearchQuery='Initial Query' onSearch={(keyword) => console.log(`Simulating search behaviour for keyword - ${keyword}`)}/>
			</div>
		</header>
	)
}

export default Header;
