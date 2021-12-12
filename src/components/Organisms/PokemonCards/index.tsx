import './PokemonCards.scss'
import { FC, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks'

import { loadPokemonCards } from '../../../store/Slices/pokemonsSlice'
import {
    setSelectedPokemonId,
    loadPokemonCard,
} from '../../../store/Slices/pokemonSlice'

import { pokemonSelector, pokemonsSelector } from '../../../selectors'
import { SCREENS } from '../../../routes/endpoints'

import { Loader } from '../../Atoms/Loader'
import { PokemonCard } from '../../Molecules/PokemonCard'
import { Modal } from '../Modal'
import { ModalPokemonContent } from '../ModalPokemonContent'

const PokemonCards: FC = () => {
    const { pokemons, fetching } = useAppSelector(pokemonsSelector)
    const {
        selectedPokemon,
        selectedPokemonId,
        fetching: isPokemonFetcing,
    } = useAppSelector(pokemonSelector)
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handlerClickLi = (id: string) => {
        dispatch(setSelectedPokemonId(id))
        dispatch(loadPokemonCard(id))
        setIsOpen(true)
    }

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

    return (
        <div className="pokemon-cards">
            {fetching ? (
                <div className="pokemon-cards__loader">
                    <Loader />
                </div>
            ) : (
                <>
                    <ul className="pokemon-cards__list">
                        {pokemons.map(
                            ({ id, name, artist, images: { small } }) => {
                                return (
                                    <li
                                        onClick={() => handlerClickLi(id)}
                                        key={id}
                                        className="pokemon-cards__item"
                                    >
                                        <PokemonCard
                                            name={name}
                                            artist={artist}
                                            imgSrc={small}
                                        />
                                    </li>
                                )
                            }
                        )}
                    </ul>
                    <Modal open={isOpen} closeModal={handlerCloseModal}>
                        {selectedPokemon &&
                            (isPokemonFetcing ? (
                                <div className="pokemon-cards__loader">
                                    <Loader />
                                </div>
                            ) : (
                                <ModalPokemonContent
                                    name={selectedPokemon.name}
                                    imgSrc={selectedPokemon.images.small}
                                    onClose={handlerCloseModal}
                                    onMoreDetails={
                                        handlerClickMoveToPokemonPage
                                    }
                                />
                            ))}
                    </Modal>
                </>
            )}
        </div>
    )
}

export { PokemonCards }
