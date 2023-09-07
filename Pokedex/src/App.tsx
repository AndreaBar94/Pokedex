import { useEffect, useState } from 'react';
import './App.css'
import Pokedex from './components/Pokedex'

function App() {
  const [pokemonData, setPokemonData] = useState();

  const getPokemons = async () =>{
      try {
          const response = await fetch('https://pokeapi.co/api/v2/pokemon/oinkologne/');
          if(response.ok){
              const data = await response.json();
              console.log(data);
              setPokemonData(data);
          }
      } catch (error) {
          console.log(error);
      }
  }
  useEffect(() =>{
    getPokemons();
  }, [])

  return (
    <>
      {pokemonData && <Pokedex pokemonData={pokemonData} />}
    </>
  )
}

export default App
