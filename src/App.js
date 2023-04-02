import './App.scss';
import { Counter, MoviesListing, Header } from './components';

import { GENRES, MOVIES } from './constants';

function App() {
  return (
    <div className="App">
			{/* <Counter initialValue={0} /> */}

			<Header/>
			<MoviesListing genres={GENRES} movies={MOVIES}/>
    </div>
  );
}

export default App;
