import { FC } from 'react'
import './PokemonCard.scss'

interface IPokemonCardProps {
    imgSrc: string
    name: string
    artist: string
}

const PokemonCard: FC<IPokemonCardProps> = ({ imgSrc, name, artist }) => {
    return (
        <div className="pokemon-card">
            <img
                className="pokemon-card__img"
                src={imgSrc}
                alt={`pokemon ${name}`}
            />
            <p className="pokemon-card__name">{name}</p>
            <p className="pokemon-card__artist">{artist}</p>
        </div>
    )
}

export { PokemonCard }
