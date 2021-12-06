import { FC, useEffect, useState } from 'react'
import './OtpForm.scss'

import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { checkOtpCode } from '../../../helpers'
import { FormField } from '../../Molecules/FormField'
import { FormButton } from '../../Atoms/FormButton'
import { ErrorMessage } from '../../Atoms/ErrorMessage'
import { SCREENS } from '../../../routes/endpoints'
import { OTP_ERROR_MESSAGE } from '../../../const'
import { useAppDispatch } from '../../../hooks'
import { authUser, toogleViewOtpForm } from '../../../store/Slices/authSlice'

interface IOtpFormValues {
    code: string
}

const otpFormSchema = yup
    .object()
    .shape({
        code: yup.string().min(5).required('is Required field'),
    })
    .required()

const OtpForm: FC = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handlerSubmitForm: SubmitHandler<IOtpFormValues> = ({ code }) => {
        if (checkOtpCode(code)) {
            navigate(SCREENS.SCREEN_POKEMONS)
            dispatch(authUser())
        }
        setErrorMessage(OTP_ERROR_MESSAGE)
    }

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<IOtpFormValues>({
        resolver: yupResolver(otpFormSchema),
    })

    useEffect(() => {
        return () => {
            dispatch(toogleViewOtpForm(false))
        }
    }, [dispatch])

    return (
        <form className="otp-form" onSubmit={handleSubmit(handlerSubmitForm)}>
            <div className="otp-form__controller">
                <Controller
                    name="code"
                    control={control}
                    defaultValue=""
                    render={({ field, fieldState: { invalid } }) => (
                        <FormField
                            placeholder="Code from SMS"
                            type="text"
                            labelName="Code from SMS"
                            value={field.value}
                            isValid={!invalid}
                            onChange={field.onChange}
                            name="code"
                            id="code"
                        />
                    )}
                />
                {errors.code?.message && (
                    <ErrorMessage text={errors.code.message} />
                )}
            </div>
            <div className="otp-form__btn">
                <FormButton />
            </div>
            <ErrorMessage text={errorMessage} />
        </form>
    )
}

export { OtpForm }
