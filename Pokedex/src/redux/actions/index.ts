import { Dispatch } from "react";
import { PokemonAction } from "../../types/Pokemon";

export const POKEMON = 'POKEMON';
export type AppDispatch = Dispatch<PokemonAction>;

export const getPokemons = async (dispatch: Dispatch<PokemonAction>)=> {
    
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/5/');
        if (response.ok) {
        const data = await response.json();
        dispatch({ type: POKEMON, payload: data });
        } else {
        console.log('API response error:', response.status);
        }
    } catch (error) {
        console.error('Response error:', error);
    }
    
};