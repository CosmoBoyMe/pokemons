import { ChangeEventHandler, FC } from 'react'
import './FormField.scss'
import { Input } from '../../Atoms/FormInput'
import { ErrorMessage } from '../../Atoms/ErrorMessage'

interface IFormField {
    labelName: string
    id: string
    value: string
    isValid: boolean
    errorMessage?: string
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
    errorMessage,
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
                isValid={isValid}
                name={name}
                value={value}
                id={id}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            />
            <ErrorMessage text={errorMessage} />
        </div>
    )
}

export { FormField }
