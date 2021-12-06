import './PokemonCards.scss'
import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { pokemonsSelector } from '../../../selectors'

import {
    loadPokemonCards,
    setSelectedPokemonId,
} from '../../../store/Slices/pokemonsSlice'

import { PokemonCard } from '../../Molecules/PokemonCard'
import { Modal } from '../Modal'
import { Loader } from '../../Atoms/Loader'
import { SCREENS } from '../../../routes/endpoints'

const PokemonCards: FC = () => {
    const { pokemons, fetching } = useAppSelector(pokemonsSelector)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(loadPokemonCards())
    }, [dispatch])

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
                                        onClick={() =>
                                            dispatch(setSelectedPokemonId(id))
                                        }
                                        key={id}
                                        className="pokemon-cards__item"
                                    >
                                        <Link to={SCREENS.SCREEN_POKEMON}>
                                            <PokemonCard
                                                name={name}
                                                artist={artist}
                                                imgSrc={small}
                                            />
                                        </Link>
                                    </li>
                                )
                            }
                        )}
                    </ul>
                    {/* <Modal /> */}
                </>
            )}
        </div>
    )
}

export { PokemonCards }
