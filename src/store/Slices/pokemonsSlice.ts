import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'
import { getPokemonCards, getPokemonCard } from '../../api'

interface IPokemonsState {
    errorMessage: string
    pokemons: Array<any>
    pokemonsCount: number
    currentPageNumber: number
    pokemonsTotalCount: number
    selectedPokemon: null | Array<any>
    selectedPokemonId: null | string
    fetching: boolean
}

export const loadPokemonCards = createAsyncThunk(
    'pokemons/loadPokemonCards',
    async (_, { rejectWithValue, getState }): Promise<any> => {
        const { pokemons, filters } = getState() as RootState
        const { currentPageNumber, pokemonsCount } = pokemons
        const { selectedType, selectedSubType } = filters

        try {
            const { data } = await getPokemonCards(
                currentPageNumber,
                pokemonsCount,
                selectedType,
                selectedSubType
            )
            return data
        } catch (error: any) {
            const errorMessage: string = error.response.data
            return rejectWithValue(errorMessage)
        }
    }
)

export const loadPokemonCard = createAsyncThunk(
    'pokemons/loadPokemonCard',
    async (pokemonId: string, { rejectWithValue }): Promise<any> => {
        console.log(pokemonId)
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
    pokemons: [],
    currentPageNumber: 1,
    pokemonsCount: 5,
    pokemonsTotalCount: 0,
    selectedPokemonId: null,
    selectedPokemon: null,
    errorMessage: '',
    fetching: false,
}

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        setSelectedPokemonId: (state, action: PayloadAction<string>) => {
            state.selectedPokemonId = action.payload
        },
    },
    extraReducers: {
        [loadPokemonCards.pending.type]: (state) => {
            state.fetching = true
        },
        [loadPokemonCards.fulfilled.type]: (
            state,
            action: PayloadAction<any>
        ) => {
            state.pokemons = action.payload.data
            state.pokemonsTotalCount = action.payload.totalCount
            state.errorMessage = ''
            state.fetching = false
        },
        [loadPokemonCards.rejected.type]: (
            state,
            action: PayloadAction<string>
        ) => {
            state.errorMessage = action.payload
            state.fetching = false
        },

        [loadPokemonCard.pending.type]: (state) => {
            state.fetching = true
        },
        [loadPokemonCard.fulfilled.type]: (
            state,
            action: PayloadAction<any>
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

export { pokemonsSlice }
export const { setSelectedPokemonId } = pokemonsSlice.actions
export default pokemonsSlice.reducer
