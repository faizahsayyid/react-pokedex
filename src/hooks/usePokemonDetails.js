import {useState, useEffect} from 'react';
import axios from "axios";
import { useHistory } from 'react-router';

const usePokemonDetails = (pokemon) => {
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonType, setPokemonType] = useState("");

    const history = useHistory();
    
    const getPokemon = () => {
        const toArray = [];
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        axios.get(url).then((res) => {
          console.log(res.data)
          toArray.push(res.data);
          setPokemonType(res.data.types[0].type.name);
          setPokemonData(toArray);
        }).catch((e) => {
            history.push('/not-found')
        })
      };
    
      useEffect(() => {
        getPokemon()
      }, [])
    
    return {pokemonData, pokemonType}
}

export default usePokemonDetails;