import { useEffect } from 'react';
import './App.css'
import Pokedex from './components/Pokedex'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, getPokemons } from './redux/actions';
import { RootState } from './redux/store/store';

function App() {
  const pokemonData = useSelector((state: RootState) => state.pokemonData);
  console.log(pokemonData)
  const dispatch: AppDispatch = useDispatch();

  useEffect(() =>{
    dispatch(getPokemons())
  }, [dispatch])

  return (
    <>
      {pokemonData && <Pokedex pokemonData={pokemonData} />}
    </>
  )
}

export default App
