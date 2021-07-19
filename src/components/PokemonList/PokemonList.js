import { useContext, useRef, useCallback } from "react"
import { PokemonListContext } from "../../contexts/PokemonListContext"
import usePokemonList from '../../hooks/usePokemonList';
import PokemonItem from "../PokemonItem/PokemonItem";
import "./PokemonList.css";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

const PokemonList = () => {

    const {pokemonList, loading, error, hasMore, updateOffset} = useContext(PokemonListContext)

    const lastPokemonObserver = useRef()
    const lastPokemonElement = useCallback(element => {
        if (loading) return 
        if (lastPokemonObserver.current) {
            lastPokemonObserver.current.disconnect()
        }

        lastPokemonObserver.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && hasMore) {
                updateOffset()
            }
        })
        if(element) {
            lastPokemonObserver.current.observe(element)
        }
    }, [loading, hasMore, updateOffset])

    usePokemonList()

    return (
        <div className="load-err-container">
            <div className="pokemon-list-container">
                {pokemonList.map( (p, index) => {
                    if(pokemonList.length === index + 1) {
                        return <PokemonItem innerRef={lastPokemonElement} key={index} index={index + 1} pokemon={p}></PokemonItem>
                    } else {
                        return <PokemonItem key={index} index={index + 1} pokemon={p}></PokemonItem>
                    }
                })}
            </div>
            {loading && <Loading />}
            {error && <Error message={"Couldn't refresh pokemon list"}/>}
        </div>
    )
}

export default PokemonList
