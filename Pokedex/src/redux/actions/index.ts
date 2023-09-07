import { Dispatch } from "react";
import { PokemonAction } from "../../types/Pokemon";

export const POKEMON = 'POKEMON';
export type AppDispatch = Dispatch<PokemonAction>;

export const getPokemons = () => {
    return async (dispatch: Dispatch<PokemonAction>) => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/1/');
                if (response.ok) {
                const data = await response.json();

                console.log('GET: ' ,data);
                
                dispatch({ type: POKEMON, payload: data }as PokemonAction);
            } else {
                console.log('Errore nella risposta dell\'API:', response.status);
            }
        } catch (error) {
            console.error('Errore durante la richiesta:', error);
        }
    };
};
