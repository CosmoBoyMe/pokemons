import { FC, useState } from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import './LoginForm.scss'

import { FormField } from '../../Molecules/FormField'
import { FormButton } from '../../Atoms/FormButton'
import { ErrorMessage } from '../../Atoms/ErrorMessage'
import { SCREENS } from '../../../routes/endpoints'
import { AUTH_ERROR_MESSAGE } from '../../../const'

interface ILoginFormValues {
    login: string
    password: string
}

const loginFormSchema = yup
    .object()
    .shape({
        login: yup.string().required('is Required field'),
        password: yup.string().required('is Required field'),
    })
    .required()

const isUserRegistred = (login: string, password: string): boolean =>
    login === 'kode@kode.ru' && password === 'Enk0deng'

const LoginForm: FC = () => {
    const [error, setError] = useState<string | null>(null)

    const navigate = useNavigate()

    const handlerSubmitForm: SubmitHandler<ILoginFormValues> = ({
        login,
        password,
    }) => {
        if (isUserRegistred(login, password)) {
            navigate(SCREENS.SCREEN_OTP)
        }
        setError(AUTH_ERROR_MESSAGE)
    }

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<ILoginFormValues>({
        resolver: yupResolver(loginFormSchema),
    })

    return (
        <form className="login-form" onSubmit={handleSubmit(handlerSubmitForm)}>
            <div className="login-form__controller">
                <Controller
                    name="login"
                    control={control}
                    defaultValue=""
                    render={({ field, fieldState: { invalid } }) => (
                        <FormField
                            placeholder="login"
                            type="text"
                            labelName="Login"
                            value={field.value}
                            isValid={!invalid}
                            errorMessage={errors.login?.message}
                            onChange={field.onChange}
                            name="login"
                            id="login"
                        />
                    )}
                />
            </div>
            <div className="login-form__controller">
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field, fieldState: { invalid } }) => (
                        <FormField
                            placeholder="password"
                            type="password"
                            labelName="password"
                            value={field.value}
                            isValid={!invalid}
                            errorMessage={errors.password?.message}
                            onChange={field.onChange}
                            name="password"
                            id="password"
                        />
                    )}
                />
            </div>
            <div className="login-form__btn">
                <FormButton />
            </div>
            {error && <ErrorMessage text={error} />}
        </form>
    )
}

export { LoginForm }
