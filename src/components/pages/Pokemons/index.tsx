import { FC } from 'react'
import './Pokemons.scss'
import { Navigate } from 'react-router'

import { Header } from '../../Organisms/Header'
import { PokemonCards } from '../../Organisms/PokemonCards'
import { Pagination } from '../../Organisms/Pagination'
import { PokemonFilters } from '../../Organisms/PokemonFilters'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { authSelector, pokemonsSelector } from '../../../selectors'
import { SCREENS } from '../../../routes/endpoints'
import {
    loadPokemonCards,
    setCurrentPageNumber,
} from '../../../store/Slices/pokemonsSlice'

const Pokemons: FC = () => {
    const { isAuth } = useAppSelector(authSelector)
    const { pokemonsTotalCount, currentPageNumber } =
        useAppSelector(pokemonsSelector)
    const dispatch = useAppDispatch()

    const handlerClickPageNumber = (pageNumber: number) => {
        dispatch(setCurrentPageNumber(pageNumber))
        dispatch(loadPokemonCards())
    }

    if (!isAuth) {
        return <Navigate to={SCREENS.SCREEN_LOGIN} />
    }

    return (
        <div className="pokemons">
            <div className="container">
                <div className="pokemons__header">
                    <Header />
                </div>
                <main className="pokemons__main">
                    <div className="pokemons__filters">
                        <PokemonFilters />
                    </div>
                    <div className="pokemons__content">
                        <div className="pokemons__cards">
                            <PokemonCards />
                        </div>
                        <div className="pokemons__pagination">
                            <Pagination
                                totalCount={pokemonsTotalCount}
                                currentPageNumber={currentPageNumber}
                                onClickPage={handlerClickPageNumber}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
export { Pokemons }
