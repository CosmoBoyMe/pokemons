import { FC } from 'react'
import './Header.scss'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAppDispatch } from '../../../hooks'
import { logout } from '../../../store/Slices/authSlice'

const Header: FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const handlerClickBackBtn = (): void => {
        const pageNumber = -1
        navigate(pageNumber)
    }

    const handlerClickLogoutBtn = (): void => {
        dispatch(logout())
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
