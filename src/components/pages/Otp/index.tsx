import { FC } from 'react'
import { OtpForm } from '../../Organisms/OtpForm'
import './Otp.scss'

const Otp: FC = () => {
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
