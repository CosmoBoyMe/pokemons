import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { SCREENS } from './endpoints'

import { Login } from '../Components/pages/Login'
import { Otp } from '../Components/pages/Otp'
import { Pokemon } from '../Components/pages/Pokemon'
import { Pokemons } from '../Components/pages/Pokemons'

const AppRoutes: FC = () => (
    <Routes>
        <Route path={SCREENS.SCREEN_LOGIN} element={<Login />} />
        <Route path={SCREENS.SCREEN_OTP} element={<Otp />} />
        <Route path={SCREENS.SCREEN_POKEMONS} element={<Pokemons />} />
        <Route path={SCREENS.SCREEN_POKEMON} element={<Pokemon />} />
        <Route
            path="*"
            element={<Navigate replace to={SCREENS.SCREEN_POKEMONS} />}
        />
    </Routes>
)

export { AppRoutes }
