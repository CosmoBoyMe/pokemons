import { FC } from 'react'
import './OtpForm.scss'

import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { FormField } from '../../Molecules/FormField'
import { FormButton } from '../../Atoms/FormButton'

interface IOtpFormValues {
    code: string
}

const otpFormSchema = yup
    .object()
    .shape({
        code: yup.string().required('is Required field'),
    })
    .required()

const OtpForm: FC = () => {
    const handlerSubmitForm: SubmitHandler<IOtpFormValues> = ({ code }) => {
        console.log(code)
    }

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<IOtpFormValues>({
        resolver: yupResolver(otpFormSchema),
    })

    return (
        <form className="otp-form" onSubmit={handleSubmit(handlerSubmitForm)}>
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
                        // errorMessage={errors.login?.message ?? null}
                    />
                )}
            />
            <FormButton />
        </form>
    )
}

export { OtpForm }
