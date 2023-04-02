import React from 'react'
import { GenreSelect, MovieTile } from "../"
import styles from "./MoviesListing.module.scss"

export default function MoviesListing({movies, genres, setPreview}) {

	function handleShowPreview() {
		console.log('')
	}

	return (
		<main className={styles.moviesWrapper}>
			<div className="container-lg">
				<div>
					<GenreSelect genres={genres} defaultGenre='All' onSelect={genre => console.log(genre)}/>
					{/* <SortControl/> */}
				</div>

				<div className={styles.movies}>
					{movies.map(movie => <MovieTile key={movie.id} movie={movie} setPreview={setPreview}/>)}
				</div>
			</div>
		</main>
	)
}
