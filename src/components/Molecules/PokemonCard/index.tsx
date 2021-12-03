import { FC } from 'react'
import './PokemonCard.scss'

interface IPokemonCardProps {
    imgSrc: string
    name: string
    atrist: string
}

const PokemonCard: FC<IPokemonCardProps> = ({ imgSrc, name, atrist }) => {
    return (
        <div className="pokemon-card">
            <img src={imgSrc} alt={`pokemon ${name}`} />
            <p className="pokemon-card__name">{name}</p>
            <p className="pokemon-card__artist">{atrist}</p>
        </div>
    )
}

export { PokemonCard }
