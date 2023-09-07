import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import pokemonReducer from '../reducers/PokemonReducer';

const store = configureStore({
  reducer: pokemonReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
