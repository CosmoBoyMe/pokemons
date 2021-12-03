import { FC } from 'react'
import './Pokemons.scss'

import { Header } from '../../Organisms/Header'
import { PokemonCards } from '../../Organisms/PokemonCards'
import { Pagination } from '../../Organisms/Pagination'
import { PokemonFilters } from '../../Organisms/PokemonFilters'

const Pokemons: FC = () => {
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
                            <Pagination />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
export { Pokemons }
