import './App.scss';
import { useState } from 'react';
import { Counter, GenreSelect, SearchForm } from './components';

import { GENRES } from './constants';

function App() {
  const [searchResult, setSearchResult] = useState(
    'Search Result for Initial Query'
  );

  return (
    <div className='App'>
      <Counter initialValue={0} />
      <SearchForm
        initialSearchQuery='Initial Query'
        searchResult={searchResult}
        onSearch={(keyword) => setSearchResult(keyword)}
      />
      <GenreSelect
        genres={GENRES}
        defaultGenre='All'
        onSelect={(genre) => console.log(genre)}
      />
    </div>
  );
}

export default App;
