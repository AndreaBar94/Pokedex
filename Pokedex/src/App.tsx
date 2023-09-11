import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Dispatch, useState } from 'react';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Pokedex from './components/Pokedex'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store/store';
import { PokemonAction } from './types/Pokemon';
import { getPokemon } from './redux/actions/index';
import NotFoundCard from './components/NotFoundCard';

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
      <div className="circle"></div>
      <div className='in-circle'></div>
      <div className='in-circle2'></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="circle4"></div>
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
        {pokemonData?.id ? (<Pokedex pokemonData={pokemonData} />) : <NotFoundCard/>}
      <div className='decorative-bottom'></div>
      </main>
    </>
  )
}

export default App
