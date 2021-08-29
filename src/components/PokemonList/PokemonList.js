import { useContext, useRef, useCallback, useState } from "react"
import { PokemonListContext } from "../../contexts/PokemonListContext"
import usePokemonList from '../../hooks/usePokemonList';
import PokemonItem from "../PokemonItem/PokemonItem";
import "./PokemonList.css";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

const PokemonList = () => {

    const {pokemonList, loading, error, hasMore, updateOffset} = useContext(PokemonListContext)

    const observedPokemonItems = useRef(0)

    const getCenterPokemonObserver = useRef()
    const lastPokemonObserver = useRef()

    const centerPokemon = useCallback(element => {
        if (!observedPokemonItems.current) {
            observedPokemonItems.current = 0
        }

        if(!getCenterPokemonObserver.current) {
            getCenterPokemonObserver.current = new IntersectionObserver((entries, observer) => {
                
                console.log('here')

                if(observedPokemonItems.current <= 7) {
                    const intersectingEntries = entries.filter(entry => entry.isIntersecting)
                    const midIndex = Math.floor(intersectingEntries.length / 2)
                    observedPokemonItems.current -= 1
                    observer.observe()
    
                    if (
                        intersectingEntries[midIndex] &&
                        intersectingEntries[midIndex].target
                    ) {
                        console.log(intersectingEntries[midIndex].target)
                    }
                }
            }, {})
        }

        if (observedPokemonItems.current < 7 && element) {
            observedPokemonItems.current += 1
            getCenterPokemonObserver.current.observe(element)
        }
    }, [])

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
                        return <PokemonItem innerRef={centerPokemon} key={index} index={index + 1} pokemon={p}></PokemonItem>
                    }
                })}
            </div>
            {loading && <Loading />}
            {error && <Error message={"Couldn't refresh pokemon list"}/>}
        </div>
    )
}

export default PokemonList
