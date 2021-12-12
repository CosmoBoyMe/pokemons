import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'
import { getPokemonCards } from '../../api'
import { IPokemonCardsResponse, IPokemonCardsItem } from '../../interfaces'
import { MAX_POKEMONS_COUNT } from '../../const'

interface IPokemonsState {
    errorMessage: string
    pokemons: [IPokemonCardsItem] | null
    currentPageNumber: number
    pokemonsTotalCount: number
    fetching: boolean
}

const initialState: IPokemonsState = {
    pokemons: null,
    currentPageNumber: 1,
    pokemonsTotalCount: 0,
    errorMessage: '',
    fetching: false,
}

export const loadPokemonCards = createAsyncThunk(
    'pokemons/loadPokemonCards',
    async (_, { rejectWithValue, getState }): Promise<any> => {
        const { pokemons, filters } = getState() as RootState
        const { currentPageNumber } = pokemons
        const { selectedType, selectedSubType } = filters

        try {
            const { data } = await getPokemonCards(
                currentPageNumber,
                MAX_POKEMONS_COUNT,
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

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        setCurrentPageNumber: (state, action: PayloadAction<number>) => {
            state.currentPageNumber = action.payload
        },
    },
    extraReducers: {
        [loadPokemonCards.pending.type]: (state) => {
            state.fetching = true
        },
        [loadPokemonCards.fulfilled.type]: (
            state,
            action: PayloadAction<IPokemonCardsResponse>
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
    },
})

export { pokemonsSlice }
export const { setCurrentPageNumber } = pokemonsSlice.actions
export default pokemonsSlice.reducer
