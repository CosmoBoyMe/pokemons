import { ChangeEventHandler, FC } from 'react'
import './FormField.scss'
import { Input } from '../../Atoms/FormInput'

interface IFormField {
    labelName: string
    id: string
    value: string
    isValid: boolean
    type: 'password' | 'text'
    placeholder: string
    name: string
    onChange: ChangeEventHandler<HTMLInputElement>
}

const FormField: FC<IFormField> = ({
    id,
    labelName,
    type,
    value,
    isValid,
    placeholder,
    name,
    onChange,
}) => {
    return (
        <div className="form-field">
            <label className="form-field__label" htmlFor={id}>
                {labelName}
            </label>
            <Input
                name={name}
                value={value}
                id={id}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}

export { FormField }
