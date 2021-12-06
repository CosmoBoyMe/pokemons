import { RootState } from '../store'

const pokemonsSelector = (state: RootState) => state.pokemons
const filtersSelector = (state: RootState) => state.filters
const authSelector = (state: RootState) => state.auth

export { pokemonsSelector, filtersSelector, authSelector }
