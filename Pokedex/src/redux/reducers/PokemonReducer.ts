import Pokemon, { PokemonAction, PokemonList } from "../../types/Pokemon";
import { POKEMON, POKEMON_LIST } from "../actions/index";

export type InitialStateType = {
    pokemonData: Pokemon | null;
    pokemonList: PokemonList,
    };

    const initialState: InitialStateType = {
        pokemonData: null,
        pokemonList: {} as PokemonList,
    };

const pokemonReducer = (state = initialState, action : PokemonAction) => {
    switch (action.type) {
        case POKEMON:
        return {
            ...state,
            pokemonData: action.payload,
        };
        case POKEMON_LIST:
            return {
                ...state,
                pokemonList: action.payload,
            };
        default:
        return state;
    }
};

export default pokemonReducer;
