import PokemonList from './components/PokemonList/PokemonList';
import { PokemonListProvider } from './contexts/PokemonListContext'
import PokemonSideImage from './components/PokemonSideImage/PokemonSideImage';

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
