import React from 'react'
import usePokemonOnDisplay from '../../hooks/usePokemonOnDisplay'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import './PokemonSideImage.css'
import typeColours from '../../assets/type-colours.json'

const PokemonSideImage = () => {
    const {loading, pokemonDetails} = usePokemonOnDisplay()
    return (
        <div className="pokemon-side-image-container">
            <div className="pokemon-display-details">
                <p>{!loading && pokemonDetails.name}</p>
            </div>
            <div className="pokemon-image">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                {loading ? 
                    <LoadingSpinner height={240} width={240}/> :
                    <img src={pokemonDetails.sprites.front_default}
                        width="240"
                        height="240"
                        alt={`${pokemonDetails.name} sprite`}/>}
            </div>
            <div className="pokemon-display-details taller">
                Types: 
                {
                    !loading && 
                    pokemonDetails.types
                        .map((typeObject, index) => (
                            <span key={index} className="type-badge" style={{backgroundColor: typeColours[typeObject.type.name]}}>
                                {typeObject.type.name}
                            </span>
                        ))
                }
            </div>
        </div>
    )
}

export default PokemonSideImage
