import { FC } from 'react'
import './PokemonInfo.scss'

interface IPokemonInfoProps {
    imgSrc: string
    description?: string
}

const PokemonInfo: FC<IPokemonInfoProps> = ({ imgSrc, description }) => {
    return (
        <div className="pokemon-info">
            <img src={imgSrc} alt="pokemon" className="pokemon-info__img" />
            <p className="pokemon-info__description">{description}</p>
        </div>
    )
}

export { PokemonInfo }
