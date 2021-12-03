import { ChangeEventHandler, FC } from 'react'
import './FormInput.scss'

interface IFormInputProps {
    type: 'password' | 'text'
    placeholder: string
    id: string
    name: string
    value: string
    onChange: ChangeEventHandler<HTMLInputElement>
}

const Input: FC<IFormInputProps> = ({
    type,
    placeholder,
    id,
    name,
    value,
    onChange,
}) => {
    return (
        <input
            className="form-input"
            name={name}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
            type={type}
            value={value}
        />
    )
}

export { Input }
