import { Dispatch, useEffect } from 'react';
import './App.css'
import Pokedex from './components/Pokedex'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store/store';
import { PokemonAction, PokemonList } from './types/Pokemon';
import { getPokemon, getPokemonList } from './redux/actions/index';

function App() {

  const pokemonData = useSelector((state: RootState) => state.pokemonData);
  const pokemonList: PokemonList = useSelector((state: RootState) => state.pokemonList);

  const dispatch = useDispatch() as Dispatch<PokemonAction>

  const listUrl = 'https://pokeapi.co/api/v2/pokemon/';
  const url = 'https://pokeapi.co/api/v2/pokemon/5/';

  useEffect(() =>{
    getPokemonList(dispatch, listUrl)
    getPokemon(dispatch, url);
  }, [dispatch])

  return (
    <>
      {pokemonData && <Pokedex  pokemonData={pokemonData} pokemonList={pokemonList}/>}
    </>
  )
}

export default App
