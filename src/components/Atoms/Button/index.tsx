import { FC } from 'react'

interface IButtonProps {
    text: string
    onClick: () => void
}

const Button: FC<IButtonProps> = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className="button">
            {text}
        </button>
    )
}

export { Button }
