import './App.scss';
import { useState } from 'react';
import { Counter, MoviesListing, Header, Footer } from './components';

import { GENRES, MOVIES } from './constants';

function App() {
	const [preview, setPreview] = useState(null);

  return (
    <div className="App">
			{/* <Counter initialValue={0} /> */}

			<Header preview={preview} setPreview={setPreview}/>
			<MoviesListing genres={GENRES} movies={MOVIES} preview={preview} setPreview={setPreview}/>
			<Footer/>
    </div>
  );
}

export default App;
