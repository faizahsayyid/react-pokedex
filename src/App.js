import { BrowserRouter as Router, Route } from 'react-router-dom'
import PokemonListView from './components/PokemonListView/PokemonListView';
import Header from './components/Header/Header'
import Example from './components/Example';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Route exact path='/'>
          <PokemonListView />
        </Route>
        <Route exact path='/:pokemon'>
          <Example />
        </Route>
      </Router>
    </>
  );
}

export default App;
