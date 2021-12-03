import { FC } from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import './LoginForm.scss'

import { FormField } from '../../Molecules/FormField'
import { FormButton } from '../../Atoms/FormButton'

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

const LoginForm: FC = () => {
    const handlerSubmitForm: SubmitHandler<ILoginFormValues> = ({
        login,
        password,
    }) => {
        console.log(login, password)
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
                            onChange={field.onChange}
                            name="login"
                            id="login"
                            // errorMessage={errors.login?.message ?? null}
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
                            onChange={field.onChange}
                            name="password"
                            id="password"
                            // errorMessage={errors.login?.message ?? null}
                        />
                    )}
                />
            </div>
            <FormButton />
        </form>
    )
}

export { LoginForm }
