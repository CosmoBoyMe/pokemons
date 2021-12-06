import './Modal.scss'
import { FC } from 'react'

interface IModalProps {
    active: boolean
    closeModal(): void
}

const Modal: FC<IModalProps> = ({ active, children, closeModal }) => {
    if (!active) {
        return null
    }
    return (
        <div onClick={closeModal} className="modal">
            <div
                className="container"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="modal__content">{children}</div>
            </div>
        </div>
    )
}

export { Modal }
