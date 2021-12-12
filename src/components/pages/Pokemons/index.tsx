import './Pokemons.scss'
import { FC, useState, useEffect } from 'react'
import { useNavigate, Navigate } from 'react-router'

import {
    setSelectedPokemonId,
    loadPokemonCard,
} from '../../../store/Slices/pokemonSlice'
import {
    loadPokemonCards,
    setCurrentPageNumber,
} from '../../../store/Slices/pokemonsSlice'

import { useAppDispatch, useAppSelector } from '../../../hooks'
import {
    authSelector,
    pokemonsSelector,
    pokemonSelector,
} from '../../../selectors'
import { SCREENS } from '../../../routes/endpoints'

import { Loader } from '../../Atoms/Loader'
import { ModalPokemonContent } from '../../Organisms/ModalPokemonContent'
import { Modal } from '../../Organisms/Modal'
import { Header } from '../../Organisms/Header'
import { PokemonCards } from '../../Organisms/PokemonCards'
import { Pagination } from '../../Organisms/Pagination'
import { PokemonFilters } from '../../Organisms/PokemonFilters'

const Pokemons: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const navigate = useNavigate()
    const { isAuth } = useAppSelector(authSelector)
    const { pokemons, fetching } = useAppSelector(pokemonsSelector)
    const { pokemonsTotalCount, currentPageNumber } =
        useAppSelector(pokemonsSelector)

    const {
        selectedPokemon,
        selectedPokemonId,
        fetching: isPokemonCardLoading,
    } = useAppSelector(pokemonSelector)

    const dispatch = useAppDispatch()

    // pagination
    const handlerClickPageNumber = (pageNumber: number) => {
        dispatch(setCurrentPageNumber(pageNumber))
        dispatch(loadPokemonCards())
    }

    // pokemonCards
    const handlerClickCard = (id: string) => {
        dispatch(setSelectedPokemonId(id))
        dispatch(loadPokemonCard(id))
        setIsOpen(true)
    }

    // modal
    const handlerCloseModal = () => {
        setIsOpen(false)
    }

    const handlerClickMoveToPokemonPage = () => {
        navigate(`/pokemon/${selectedPokemonId}`)
    }

    useEffect(() => {
        if (pokemons === null) {
            dispatch(loadPokemonCards())
        }
    }, [dispatch, pokemons])

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
                            <PokemonCards
                                onClickCard={handlerClickCard}
                                pokemons={pokemons}
                                loading={fetching}
                            />
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
            <Modal open={isOpen} closeModal={handlerCloseModal}>
                {selectedPokemon &&
                    (isPokemonCardLoading ? (
                        <div className="pokemons__loader">
                            <Loader />
                        </div>
                    ) : (
                        <ModalPokemonContent
                            name={selectedPokemon.name}
                            imgSrc={selectedPokemon.images.small}
                            onClose={handlerCloseModal}
                            onMoreDetails={handlerClickMoveToPokemonPage}
                        />
                    ))}
            </Modal>
        </div>
    )
}
export { Pokemons }
