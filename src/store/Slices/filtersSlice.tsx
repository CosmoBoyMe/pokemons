import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getPokemonTypes, getPokemonSubTypes } from '../../api'

interface IFilterState {
    types: null | Array<string>
    subTypes: null | Array<string>
    selectedType: string
    selectedSubType: string
    errorMessage: null | string
    fetching: boolean
}

const initialState: IFilterState = {
    types: null,
    subTypes: null,
    selectedType: '',
    selectedSubType: '',
    errorMessage: null,
    fetching: false,
}

export const loadPokemonTypes = createAsyncThunk<
    Array<string>,
    undefined,
    {
        rejectValue: string
    }
>('pokemons/loadPokemonTypes', async (_, { rejectWithValue }) => {
    try {
        const { data } = await getPokemonTypes()
        return data.data
    } catch (error: any) {
        const errorMessage: string = error.response.data
        return rejectWithValue(errorMessage)
    }
})

export const loadPokemonSubTypes = createAsyncThunk<
    Array<string>,
    undefined,
    {
        rejectValue: string
    }
>('filters/loadPokemonSubTypes', async (_, { rejectWithValue }) => {
    try {
        const { data } = await getPokemonSubTypes()
        return data.data
    } catch (error: any) {
        return rejectWithValue(error.response.data)
    }
})

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSelectedType(state, action: PayloadAction<string>) {
            state.selectedType = action.payload
        },
        setSelectedSubType(state, action: PayloadAction<string>) {
            state.selectedSubType = action.payload
        },
    },
    extraReducers: {
        [loadPokemonTypes.pending.type]: (state) => {
            state.fetching = true
        },
        [loadPokemonTypes.fulfilled.type]: (
            state,
            action: PayloadAction<Array<string>>
        ) => {
            state.types = action.payload
            state.errorMessage = ''
            state.fetching = false
        },
        [loadPokemonTypes.rejected.type]: (
            state,
            action: PayloadAction<string>
        ) => {
            state.errorMessage = action.payload
            state.fetching = false
        },

        [loadPokemonSubTypes.pending.type]: (state) => {
            state.fetching = true
        },
        [loadPokemonSubTypes.fulfilled.type]: (
            state,
            action: PayloadAction<Array<string>>
        ) => {
            state.subTypes = action.payload
            state.errorMessage = ''
            state.fetching = false
        },
        [loadPokemonSubTypes.rejected.type]: (
            state,
            action: PayloadAction<string>
        ) => {
            state.errorMessage = action.payload
            state.fetching = false
        },
    },
})

export { filterSlice }
export const { setSelectedType, setSelectedSubType } = filterSlice.actions
export default filterSlice.reducer
