import PokemonList from './components/PokemonList/PokemonList';
import { PokemonListProvider } from './contexts/PokemonListContext'

function App() {
  return (
    <>
      <PokemonListProvider>
        <PokemonList />
      </PokemonListProvider>
    </>
  );
}

export default App;
