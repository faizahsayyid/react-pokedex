import { useState, useEffect } from 'react'
import PokemonList from './PokemonList';
import Pagination from './Pagination';
import axios from 'axios';


function App() {

  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancel
    setLoading(true)
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
      setLoading(false)
    })

    return () => cancel()
  }, [currentPageUrl])

  const goToNextPage = () => {
    setCurrentPageUrl(nextPageUrl)
  }

  const goToPrevPage = () => {
    setCurrentPageUrl(prevPageUrl)
  }

  if (loading) return "Loading..."

  return (
    <>
      <PokemonList pokemon={pokemon}/>
      <Pagination 
      goToNextPage={nextPageUrl ? goToNextPage : null}
      goToPrevPage={prevPageUrl ? goToPrevPage : null}
      />
    </>
  );
}

export default App;
