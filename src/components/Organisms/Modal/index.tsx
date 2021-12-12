import './Modal.scss'
import { FC } from 'react'

interface IModalProps {
    open: boolean
    closeModal(): void
}

const Modal: FC<IModalProps> = ({ open, children, closeModal }) => {
    if (!open) {
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
