import { FC } from 'react'
import './Login.scss'

import { LoginForm } from '../../Organisms/LoginForm'

const Login: FC = () => {
    return (
        <div className="login">
            <div className="container">
                <div className="login__login-form">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export { Login }
