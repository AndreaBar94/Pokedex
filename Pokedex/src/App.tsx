import { Dispatch, useEffect, useState } from 'react';
import './App.css'
import Pokedex from './components/Pokedex'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store/store';
import { PokemonAction } from './types/Pokemon';
import { getPokemon } from './redux/actions/index';

function App() {
  const pokemonData = useSelector((state: RootState) => state.pokemonData);
  const dispatch = useDispatch() as Dispatch<PokemonAction>;
  const [pokemonName, setPokemonName] = useState('');

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}/`;
    getPokemon(dispatch, url);
  }, [dispatch, pokemonName]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value);
  };

  return (
    <>
      <input type='search' value={pokemonName} onChange={handleInputChange} placeholder="Search..." className='custom-input'/>
      {pokemonData && <Pokedex pokemonData={pokemonData} />}
    </>
  )
}

export default App
