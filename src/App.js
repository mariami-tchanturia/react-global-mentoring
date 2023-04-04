import './App.scss';
import { useState } from 'react';

import { Counter, MoviesListing, Header, Footer } from './components';

import { GENRES_OPTIONS, SELECT_OPTIONS } from './constants';
import { MOCKED_MOVIES } from './mocks/mocks';

function App() {
  const [preview, setPreview] = useState(null);

  return (
    <div className='App'>
      <Counter initialValue={0} />

      <Header preview={preview} setPreview={setPreview} />
      <MoviesListing
        genres={GENRES_OPTIONS}
        movies={MOCKED_MOVIES}
        preview={preview}
        setPreview={setPreview}
        options={SELECT_OPTIONS}
      />
      <Footer />
    </div>
  );
}

export default App;
