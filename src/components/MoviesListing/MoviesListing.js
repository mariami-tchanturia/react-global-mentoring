import React from 'react'
import { GenreSelect, MovieTile } from "../"
import styles from "./MoviesListing.module.scss"

export default function MoviesListing({movies, genres}) {
	return (
		<main className={styles.moviesWrapper}>
			<div className="container-lg">
				<div>
					<GenreSelect genres={genres} defaultGenre='All' onSelect={genre => console.log(genre)}/>
					{/* <SortControl/> */}
				</div>

				<div className={styles.movies}>
					{movies.map(movie => <MovieTile key={movie.id} movie={movie}/>)}
				</div>
			</div>
		</main>
	)
}
