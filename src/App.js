import './App.scss';
import { Counter, GenreSelect, SearchForm} from './components';

import { GENRES } from './constants';

function App() {
  return (
    <div className="App">
			<Counter initialValue={0} />
			<SearchForm initialSearchQuery='Initial Query' onSearch={(keyword) => console.log(`Simulating search behaviour for keyword - ${keyword}`)}/>
			<GenreSelect genres={GENRES} defaultGenre='All' onSelect={genre => console.log(genre)}/>
    </div>
  );
}

export default App;
