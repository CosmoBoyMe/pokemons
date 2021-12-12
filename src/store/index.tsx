import { configureStore } from '@reduxjs/toolkit'
import pokemons from './Slices/pokemonsSlice'
import auth from './Slices/authSlice'
import pokemon from './Slices/pokemonSlice'
import filters from './Slices/filtersSlice'

const reducers = {
    auth,
    pokemons,
    pokemon,
    filters,
}

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
