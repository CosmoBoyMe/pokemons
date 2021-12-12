import './PokemonCards.scss'
import { FC } from 'react'

import { Loader } from '../../Atoms/Loader'
import { PokemonCard } from '../../Molecules/PokemonCard'
import { IPokemonCardsItem } from '../../../interfaces'

interface IPokemonCardsProps {
    pokemons: [IPokemonCardsItem] | null
    onClickCard: (id: string) => void
    loading: boolean
}

const PokemonCards: FC<IPokemonCardsProps> = ({
    pokemons,
    onClickCard,
    loading,
}) => {
    return (
        <div className="pokemon-cards">
            {loading ? (
                <div className="pokemon-cards__loader">
                    <Loader />
                </div>
            ) : (
                <ul className="pokemon-cards__list">
                    {pokemons &&
                        pokemons.map(
                            ({ id, name, artist, images: { small } }) => {
                                return (
                                    <li
                                        onClick={() => onClickCard(id)}
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
            )}
        </div>
    )
}

export { PokemonCards }
