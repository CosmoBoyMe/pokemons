import { FC } from 'react'
import './ErrorMessage.scss'

interface IErrorMessageProps {
    text?: string
}

const ErrorMessage: FC<IErrorMessageProps> = ({ text }) => (
    <p className="error-message">{text}</p>
)
export { ErrorMessage }
