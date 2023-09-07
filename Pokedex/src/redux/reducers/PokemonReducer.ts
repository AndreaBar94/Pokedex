import Pokemon, { PokemonAction } from "../../types/Pokemon";
import { POKEMON } from "../actions/index";

export type InitialStateType = {
    pokemonData: Pokemon | null;
    };

    const initialState: InitialStateType = {
        pokemonData: null,
    };

const pokemonReducer = (state = initialState, action : PokemonAction) => {
    switch (action.type) {
        case POKEMON:
        return {
            ...state,
            pokemonData: action.payload,
        };
        default:
        return state;
    }
};

export default pokemonReducer;
