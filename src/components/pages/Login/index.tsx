import './Login.scss'
import { FC } from 'react'
import { Navigate } from 'react-router'

import { LoginForm } from '../../Organisms/LoginForm'
import { useAppSelector } from '../../../hooks'
import { authSelector } from '../../../selectors'
import { SCREENS } from '../../../routes/endpoints'

const Login: FC = () => {
    const { isAuth } = useAppSelector(authSelector)

    if (isAuth) {
        return <Navigate to={SCREENS.SCREEN_POKEMONS} />
    }
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
