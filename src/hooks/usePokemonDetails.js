import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const usePokemonDetails = (pokemon) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  const getPokemon = () => {
    const toArray = [];
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        toArray.push(res.data);
        setPokemonType(res.data.types[0].type.name);
        setPokemonData(toArray);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        history.push("/not-found");
      });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getPokemon, []);

  return { pokemonData, pokemonType, loading };
};

export default usePokemonDetails;
