import { Dispatch, useEffect } from 'react';
import './App.css'
import Pokedex from './components/Pokedex'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store/store';
import { PokemonAction } from './types/Pokemon';
import { getPokemons } from './redux/actions/index';

function App() {
  const pokemonData = useSelector((state: RootState) => state.pokemonData);
  console.log(pokemonData)
  const dispatch = useDispatch() as Dispatch<PokemonAction>

  useEffect(() =>{
    getPokemons(dispatch);
  }, [dispatch])

  return (
    <>
      {pokemonData && <Pokedex pokemonData={pokemonData} />}
    </>
  )
}

export default App
