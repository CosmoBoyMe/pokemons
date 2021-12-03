import { FC } from 'react'
import './PokemonFilters.scss'

import { Select } from '../../Molecules/Select'

const PokemonFilters: FC = () => {
    const pokemonsTypes: Array<string> = []
    const pokemonsSubTypes: Array<string> = []

    return (
        <div className="pokemon-filters">
            <div className="pokemon-filters__select">
                <Select items={pokemonsTypes} name="Type" />
            </div>
            <div className="pokemon-filters__select">
                <Select items={pokemonsSubTypes} name="SubType" />
            </div>
        </div>
    )
}

export { PokemonFilters }
