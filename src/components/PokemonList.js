import { useContext } from "react"
import { PokemonListContext } from "../contexts/PokemonListContext"
import usePokemonList from '../hooks/usePokemonList';

// Faizah
const PokemonList = () => {

    const {pokemonList, offset, limit} = useContext(PokemonListContext)

    usePokemonList(offset, limit)

    return (
        <div>
            {pokemonList.map( (p, index) => (
                <div key={index}>{p.name}</div>
            ))}
        </div>
    )
}

export default PokemonList
