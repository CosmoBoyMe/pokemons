import { createSlice } from '@reduxjs/toolkit'
import { setLocalStorageItem, removeLocalStorageItem } from '../../helpers'

interface IAuthState {
    isAuth: boolean
    viewOtpForm: boolean
}

const initialState: IAuthState = {
    viewOtpForm: false,
    isAuth: !!localStorage.getItem('isAuth'),
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authUser: (state) => {
            state.isAuth = true
            setLocalStorageItem('isAuth', 'true')
        },

        logout: (state) => {
            state.isAuth = false
            removeLocalStorageItem('isAuth')
        },

        toogleViewOtpForm: (state, action) => {
            state.viewOtpForm = action.payload
        },
    },
})

export { authSlice }

export const { authUser, logout, toogleViewOtpForm } = authSlice.actions

export default authSlice.reducer
