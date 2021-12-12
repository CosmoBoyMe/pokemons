import { FC, useEffect } from 'react'
import './Pokemon.scss'
import { useParams } from 'react-router'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { pokemonSelector } from '../../../selectors'
import { Header } from '../../Organisms/Header'
import { loadPokemonCard } from '../../../store/Slices/pokemonSlice'
import { PokemonCharacters } from '../../Organisms/PokemonCharacters'
import { PokemonInfo } from '../../Organisms/PokemonInfo'
import { Loader } from '../../Atoms/Loader'

const Pokemon: FC = () => {
    const { id } = useParams()
    const { selectedPokemon } = useAppSelector(pokemonSelector)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (id !== undefined && selectedPokemon?.id !== id) {
            dispatch(loadPokemonCard(id))
        }
    }, [dispatch, id])

    return (
        <div className="pokemon">
            <div className="container">
                <Header />
                {selectedPokemon === null ? (
                    <div className="pokemon__loader">
                        <Loader />
                    </div>
                ) : (
                    <main className="pokemon__main">
                        <div className="pokemon__inner">
                            <div className="pokemon__info">
                                <PokemonInfo
                                    imgSrc={selectedPokemon.images.large}
                                    description={selectedPokemon.flavorText}
                                />
                            </div>
                            <div className="pokemon__characters">
                                <PokemonCharacters
                                    hp={selectedPokemon.hp}
                                    name={selectedPokemon.name}
                                    subTypes={selectedPokemon.subtypes}
                                    superType={selectedPokemon.supertype}
                                    types={selectedPokemon.types}
                                    attacks={selectedPokemon.attacks}
                                />
                            </div>
                        </div>
                    </main>
                )}
            </div>
        </div>
    )
}

export { Pokemon }
