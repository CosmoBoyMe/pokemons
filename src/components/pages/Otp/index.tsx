import { FC } from 'react'
import { Navigate } from 'react-router'
import { useAppSelector } from '../../../hooks'
import { authSelector } from '../../../selectors'
import { OtpForm } from '../../Organisms/OtpForm'
import { SCREENS } from '../../../routes/endpoints'
import './Otp.scss'

const Otp: FC = () => {
    const { isAuth, viewOtpForm } = useAppSelector(authSelector)

    if (isAuth) {
        return <Navigate to={SCREENS.SCREEN_POKEMON} />
    }
    if (!viewOtpForm) {
        return <Navigate to={SCREENS.SCREEN_LOGIN} />
    }
    console.log('code: 12345')
    return (
        <div className="otp">
            <div className="container">
                <div className="otp__form">
                    <OtpForm />
                </div>
            </div>
        </div>
    )
}
export { Otp }
