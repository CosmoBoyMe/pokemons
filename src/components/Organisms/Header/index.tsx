import { FC } from 'react'
import './Header.scss'
import { useNavigate, useLocation } from 'react-router-dom'

const Header: FC = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const handlerClickBackBtn = (): void => {
        const pageNumber = -1
        navigate(pageNumber)
    }

    const handlerClickLogoutBtn = (): void => {
        console.log('logout btn')
    }

    return (
        <header className="header">
            {pathname !== '/pokemons' && (
                <button
                    className="header__back-btn"
                    onClick={handlerClickBackBtn}
                    type="button"
                >
                    Back
                </button>
            )}
            <button
                className="header__logout-btn"
                onClick={handlerClickLogoutBtn}
                type="button"
            >
                Logout
            </button>
        </header>
    )
}

export { Header }
