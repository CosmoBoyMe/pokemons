import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getPokemonCard } from '../../api'
import { IPokemonCard } from '../../interfaces'

interface IPokemonsState {
    errorMessage: string
    selectedPokemon: null | IPokemonCard
    selectedPokemonId: null | string
    fetching: boolean
}

export const loadPokemonCard = createAsyncThunk(
    'pokemons/loadPokemonCard',
    async (pokemonId: string, { rejectWithValue }): Promise<any> => {
        try {
            const { data } = await getPokemonCard(pokemonId)
            return data.data
        } catch (error: any) {
            const errorMessage: string = error.response.data
            return rejectWithValue(errorMessage)
        }
    }
)

const initialState: IPokemonsState = {
    selectedPokemonId: null,
    selectedPokemon: null,
    errorMessage: '',
    fetching: false,
}

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setSelectedPokemonId: (state, action: PayloadAction<string>) => {
            state.selectedPokemonId = action.payload
        },
    },
    extraReducers: {
        [loadPokemonCard.pending.type]: (state) => {
            state.fetching = true
        },

        [loadPokemonCard.fulfilled.type]: (
            state,
            action: PayloadAction<IPokemonCard>
        ) => {
            state.selectedPokemon = action.payload
            state.errorMessage = ''
            state.fetching = false
        },

        [loadPokemonCard.rejected.type]: (
            state,
            action: PayloadAction<string>
        ) => {
            state.errorMessage = action.payload
            state.fetching = false
        },
    },
})

export { pokemonSlice }
export const { setSelectedPokemonId } = pokemonSlice.actions
export default pokemonSlice.reducer
