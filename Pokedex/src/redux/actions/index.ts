import { Dispatch } from "react";
import { PokemonAction } from "../../types/Pokemon";

export const POKEMON = 'POKEMON';
export const POKEMON_LIST = 'POKEMON_LIST';

export type AppDispatch = Dispatch<PokemonAction>;

//get single pokemon info
export const getPokemon = async (dispatch: Dispatch<PokemonAction>, url: string)=> {
    try {
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        dispatch({ type: POKEMON, payload: data });
        }else if(response.status === 404) {
            dispatch({ type: POKEMON, payload: null });
        } else {
        console.log('API response error:', response.status);
        }
    } catch (error) {
        console.error('Response error:', error);
    }
    
};

//this one returns a list of pokemon, with name and url
export const getPokemonList = async (dispatch: Dispatch<PokemonAction>, url: string) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        dispatch({ type: POKEMON_LIST, payload: data });
        } else {
        console.log('API response error:', response.status);
        }
    } catch (error) {
        console.error('Response error:', error);
    }
};
