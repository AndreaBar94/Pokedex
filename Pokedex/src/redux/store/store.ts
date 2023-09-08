import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '../reducers/PokemonReducer';

const store = configureStore({
    reducer: pokemonReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
