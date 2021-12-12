import { FC } from 'react'
import './CharacterItem.scss'

interface ICharacterItemProps {
    attributesName: string
    attributes: string | [string]
}

const CharacterItem: FC<ICharacterItemProps> = ({
    attributesName,
    attributes,
}) => {
    return (
        <div className="character-item">
            <p className="character-item__text">
                <span className="character-item__attributes-name">
                    {attributesName}:{' '}
                </span>
                {typeof attributes === 'string'
                    ? attributes
                    : attributes.join(', ')}
            </p>
        </div>
    )
}

export { CharacterItem }
