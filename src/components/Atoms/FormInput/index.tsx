import { ChangeEventHandler, FC } from 'react'
import './FormInput.scss'
import cn from 'classnames'

interface IFormInputProps {
    type: 'password' | 'text'
    placeholder: string
    id: string
    name: string
    value: string
    isValid: boolean
    onChange: ChangeEventHandler<HTMLInputElement>
}

const Input: FC<IFormInputProps> = ({
    type,
    placeholder,
    id,
    name,
    value,
    isValid,
    onChange,
}) => {
    return (
        <input
            className={cn('form-input', {
                'form-input--invalid': !isValid,
            })}
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
