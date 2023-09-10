import { Dispatch, useState } from 'react';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Pokedex from './components/Pokedex'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store/store';
import { PokemonAction } from './types/Pokemon';
import { getPokemon } from './redux/actions/index';

function App() {
  const pokemonData = useSelector((state: RootState) => state.pokemonData);
  const dispatch = useDispatch() as Dispatch<PokemonAction>;
  const [pokemonName, setPokemonName] = useState('');

  const handleSearchClick = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`;
    getPokemon(dispatch, url);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value);
  };

  return (
    <>
    <main>
      <h1>Looking for a Pokémon?</h1>
      <div className='input-search-box'>
        <input 
        type='search' 
        value={pokemonName} 
        onChange={handleInputChange} 
        placeholder="Search..." 
        className='custom-input'/>
        <button 
          onClick={handleSearchClick}
          className='search-button'
          >
            <FontAwesomeIcon icon={faSearch} className='search-logo'/>
        </button>
      </div>
      

      {pokemonData && <Pokedex pokemonData={pokemonData} />}
    </main>
      
    </>
  )
}

export default App
