import React from 'react'
import './PokemonItem.css'
import pokeball from '../../assets/pokeball.png'

const PokemonItem = ({index, pokemon, innerRef}) => {
    return (
        <div ref={innerRef} className="item">
            <img className="pokeball" src={pokeball} alt="pokeball" height="40" width="40"/>
            <p className="index">{index}</p>
            <p className="name">{pokemon.name}</p>
        </div>
    )
}

export default PokemonItem
