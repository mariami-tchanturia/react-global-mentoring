import './App.scss';
import { Counter, Header } from './components';

function App() {
  return (
    <div className="App">
			<Counter initialValue={0} />
			<Header/>
    </div>
  );
}

export default App;
