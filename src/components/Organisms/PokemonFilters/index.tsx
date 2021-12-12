import { FC, useEffect } from 'react'
import './PokemonFilters.scss'

import { Select } from '../../Molecules/Select'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import {
    loadPokemonSubTypes,
    loadPokemonTypes,
    setSelectedType,
    setSelectedSubType,
} from '../../../store/Slices/filtersSlice'
import { filtersSelector } from '../../../selectors'
import {
    loadPokemonCards,
    setCurrentPageNumber,
} from '../../../store/Slices/pokemonsSlice'

const PokemonFilters: FC = () => {
    const { types, subTypes, selectedSubType, selectedType } =
        useAppSelector(filtersSelector)
    const dispatch = useAppDispatch()

    const handlerSetType = (typeName: string): void => {
        dispatch(setCurrentPageNumber(1))
        dispatch(setSelectedType(typeName))
        dispatch(loadPokemonCards())
    }

    const handerSetSubType = (subTypeName: string): void => {
        dispatch(setCurrentPageNumber(1))
        dispatch(setSelectedSubType(subTypeName))
        dispatch(loadPokemonCards())
    }

    useEffect(() => {
        if (!types && !subTypes) {
            dispatch(loadPokemonTypes())
            dispatch(loadPokemonSubTypes())
        }
    }, [dispatch, types, subTypes])

    return (
        <div className="pokemon-filters">
            {types && (
                <div className="pokemon-filters__select">
                    <Select
                        items={types}
                        name="Type"
                        selectedItemName={selectedType}
                        setSelectedItemName={handlerSetType}
                    />
                </div>
            )}
            {subTypes && (
                <div className="pokemon-filters__select">
                    <Select
                        items={subTypes}
                        name="SubType"
                        selectedItemName={selectedSubType}
                        setSelectedItemName={handerSetSubType}
                    />
                </div>
            )}
        </div>
    )
}

export { PokemonFilters }
