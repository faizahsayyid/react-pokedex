import PokemonList from './components/PokemonList';
import { PokemonListProvider } from './contexts/PokemonListContext'

function App() {
  return (
    <PokemonListProvider>
      <PokemonList />
      <div>Loading...</div>
      <div>Error</div>
    </PokemonListProvider>
  );
}

export default App;
