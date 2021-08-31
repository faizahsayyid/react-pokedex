import axios from 'axios'
import { useEffect, useContext, useState} from 'react'
import { PokemonListContext } from '../contexts/PokemonListContext'

const usePokemonOnDisplay = () => {
    const { pokemonOnDisplay } = useContext(PokemonListContext)
    const [pokemonDetails, setPokemonDetails] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonOnDisplay}`)
            .then(res => {
                setPokemonDetails(res.data)
                setLoading(false)
            })
    }, [pokemonOnDisplay]) 

    return {loading, pokemonDetails}
}

export default usePokemonOnDisplay