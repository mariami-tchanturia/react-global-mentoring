const GENRES = [
	{
		id:1,
		name: 'All'
	},
	{
		id:2,
		name: 'Documentary'
	},
	{
		id:3,
		name: 'Comedy'
	},
	{
		id:4,
		name: 'Horror'
	},
	{
		id:5,
		name: 'Crime'
	}
]

const MOVIES = [
  {
    id: 1,
    title: 'Star Wars: The Last Jedi',
    year: 2017,
		rating: 8.9,
		duration: '2h 34m',
    genre: 'Action, Adventure, Fantasy',
    plot: 'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
    poster_url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg'
  },
  {
    id: 2,
    title: 'Black Swan',
    year: 2010,
		rating: 6.8,
		duration: '2h 34m',
    genre: 'Drama, Thriller',
    plot: 'A committed dancer wins the lead role in a production of Tchaikovskys \"Swan Lake\" only to find herself struggling to maintain her sanity.',
    poster_url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg'
  },
	{
    id: 3,
    title: 'Star Wars: The Last Jedi',
    year: 2017,
		rating: 8.9,
		duration: '2h 34m',
    genre: 'Action, Adventure, Fantasy',
    plot: 'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
    poster_url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg'
  },
  {
    id: 4,
    title: 'Black Swan',
    year: 2010,
		rating: 6.8,
		duration: '2h 34m',
    genre: 'Drama, Thriller',
    plot: 'A committed dancer wins the lead role in a production of Tchaikovskys \"Swan Lake\" only to find herself struggling to maintain her sanity.',
    poster_url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg'
  }
]

const SELECT_OPTIONS = [
	{
		id:1,
		name: 'Release Date'
	},
	{
		id:2,
		name: 'Title'
	},
]

export {GENRES, MOVIES, SELECT_OPTIONS}
