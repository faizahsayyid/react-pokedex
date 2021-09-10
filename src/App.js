import { BrowserRouter as Router, Route } from "react-router-dom";
import PokemonListView from "./components/PokemonListView/PokemonListView";
import Header from "./components/Header/Header";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import { SettingsProvider } from "./contexts/SettingsContext";

function App() {
  return (
    <SettingsProvider>
      <Header />
      <Router>
        <Route exact path="/">
          <PokemonListView />
        </Route>
        <Route exact path="/not-found">
          <NotFoundPage />
        </Route>
        <Route exact path="/:pokemon">
          <PokemonDetails />
        </Route>
      </Router>
    </SettingsProvider>
  );
}

export default App;
