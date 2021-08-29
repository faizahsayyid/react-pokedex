import PokemonList from './components/PokemonList/PokemonList';
import { PokemonListProvider } from './contexts/PokemonListContext'
import PokemonSideImage from './components/PokemonSideImage/PokemonSideImage';

function App() {
  return (
    <>
      <PokemonListProvider>
        <PokemonList />
        <PokemonSideImage />
      </PokemonListProvider>
    </>
  );
}

export default App;
