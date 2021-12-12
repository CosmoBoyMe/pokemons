import { RootState } from '../store'

const pokemonsSelector = (state: RootState) => state.pokemons
const pokemonSelector = (state: RootState) => state.pokemon
const filtersSelector = (state: RootState) => state.filters
const authSelector = (state: RootState) => state.auth

export { pokemonsSelector, filtersSelector, authSelector, pokemonSelector }
