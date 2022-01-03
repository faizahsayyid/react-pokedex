import { BrowserRouter as Router, Route } from "react-router-dom";
import PokemonListView from "../../components/PokemonListView/PokemonListView";
import Header from "../../components/Header/Header";
import PokemonDetails from "../../components/PokemonDetails/PokemonDetails";
import NotFoundPage from "../../components/NotFoundPage/NotFoundPage";
import useTheme from "../../hooks/useTheme";
import useMusic from "../../hooks/useMusic";
import "./AppContainer.css";

function AppContainer() {
  // var audio = new Audio("/pokemon-copy-right-free-music.mp3");
  // console.log(audio);
  useTheme();
  return (
    <>
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
    </>
  );
}

export default AppContainer;
