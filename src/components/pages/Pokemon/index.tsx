import { FC, useEffect } from 'react'
import './Pokemon.scss'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { pokemonsSelector } from '../../../selectors'
import { Header } from '../../Organisms/Header'
import { loadPokemonCard } from '../../../store/Slices/pokemonsSlice'

const Pokemon: FC = () => {
    const { selectedPokemonId, selectedPokemon } =
        useAppSelector(pokemonsSelector)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (selectedPokemonId) {
            dispatch(loadPokemonCard(selectedPokemonId))
        }
    }, [dispatch])

    const { name, hp, supertype, type, subtypes, images, flavorText }: any =
        selectedPokemon ?? {}

    return (
        <div className="pokemon">
            <div className="container">
                <Header />
            </div>
            {selectedPokemon === null ? (
                <h1 className="pokemon__title">
                    PLEASE GO BACK AND SELECT POKEMON
                </h1>
            ) : (
                <main className="pokemon__main">
                    <div className="container">
                        <div className="pokemon__inner">
                            <div className="pokemon__info">
                                <img
                                    src={images.small}
                                    alt="pokemon"
                                    className="pokemon__img"
                                />
                                <div className="pokemon__description">
                                    {flavorText}
                                </div>
                            </div>
                            <ul className="pokemon__characters">
                                <li className="pokemon__character">{name}</li>
                                <li className="pokemon__character">
                                    {supertype}
                                </li>
                                <li className="pokemon__character">{type}</li>
                                <li className="pokemon__character">
                                    {subtypes[0]}
                                </li>
                                <li className="pokemon__character">{hp}</li>
                                <li className="pokemon__character">{name}</li>
                            </ul>
                        </div>
                    </div>
                </main>
            )}
        </div>
    )
}

export { Pokemon }
