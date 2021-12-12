import { FC } from 'react'
import { Button } from '../../Atoms/Button'
import './ModalPokemonContent.scss'

interface IModalPokemonContentProps {
    name: string
    imgSrc: string
    onClose: () => void
    onMoreDetails: () => void
}
const ModalPokemonContent: FC<IModalPokemonContentProps> = ({
    name,
    imgSrc,
    onClose,
    onMoreDetails,
}) => {
    return (
        <div className="modal-pokemon-content">
            <h2 className="modal-pokemon-content__name">{name}</h2>
            <img
                className="modal-pokemon-content__img"
                src={imgSrc}
                alt="pokemon"
            />
            <div className="modal-pokemon-content__buttons">
                <Button text="close" onClick={onClose} />
                <Button text="more details" onClick={onMoreDetails} />
            </div>
        </div>
    )
}

export { ModalPokemonContent }
