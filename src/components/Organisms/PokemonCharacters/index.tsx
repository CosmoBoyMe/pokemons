import { FC } from 'react'
import { CharacterItem } from '../../Molecules/CharacterItem'
import './PokemonCharacters.scss'

interface IPokemonCharacters {
    name: string
    superType: string
    types: [string]
    subTypes: [string]
    hp: string
    attacks: [
        {
            name: string
            cost: [string]
            convertedEnergyCost: number
            damage: string
            text: string
        }
    ]
}

const PokemonCharacters: FC<IPokemonCharacters> = ({
    name,
    superType,
    types,
    subTypes,
    hp,
    attacks,
}) => {
    return (
        <div className="pokemon-characters">
            <div className="pokemon-characters__list">
                <div className="pokemon-character__item">
                    <CharacterItem
                        attributesName="Pokemon name"
                        attributes={name}
                    />
                </div>
                <div className="pokemon-character__item">
                    <CharacterItem
                        attributesName="Super Type"
                        attributes={superType}
                    />
                </div>
                <div className="pokemon-character__item">
                    <CharacterItem attributesName="types" attributes={types} />
                </div>
                <div className="pokemon-character__item">
                    <CharacterItem
                        attributesName="Sub Type"
                        attributes={subTypes}
                    />
                </div>
            </div>
            <div className="pokemon-characters__list">
                <div className="pokemon-character__item">
                    <CharacterItem
                        attributesName="Attack damage"
                        attributes={attacks[0].damage}
                    />
                </div>
                <div className="pokemon-character__item">
                    <CharacterItem
                        attributesName="Attack cost"
                        attributes={attacks[0].cost}
                    />
                </div>
                <div className="pokemon-character__item">
                    <CharacterItem attributesName="hp" attributes={hp} />
                </div>
            </div>
        </div>
    )
}

export { PokemonCharacters }
