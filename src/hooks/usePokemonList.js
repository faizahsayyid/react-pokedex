import axios from 'axios'
import { useEffect, useContext} from 'react'
import { PokemonListContext } from '../contexts/PokemonListContext'
import { LIMIT_INCREMENT } from '../contexts/PokemonListActions'

const usePokemonList = (offset) => {
    const {
        setLoading,
        setError,
        setHasMore, 
        pokemonList, 
        updatePokemonList,
        resetPokemonList
    } = useContext(PokemonListContext)

    useEffect(() => {
        resetPokemonList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(() => {
        setLoading(true)
        setError(false)
        axios({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon',
            params: { offset, limit: offset + LIMIT_INCREMENT}
        }).then((res) => {
            updatePokemonList(res.data.results)
            console.log(pokemonList)
            setHasMore(res.data.count > 0)
            setLoading(false)
        }).catch((err) => {
            setError(true)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [offset])
}
export default usePokemonList
