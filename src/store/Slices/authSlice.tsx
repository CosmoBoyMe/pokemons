import { createSlice } from '@reduxjs/toolkit'

interface IAuthState {
    isAuth: boolean
    viewOtpForm: boolean
}

const initialState: IAuthState = {
    viewOtpForm: false,
    isAuth: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authUser: (state) => {
            state.isAuth = true
        },

        logout: (state) => {
            state.isAuth = false
        },

        toogleViewOtpForm: (state, action) => {
            state.viewOtpForm = action.payload
        },
    },
})

export { authSlice }

export const { authUser, logout, toogleViewOtpForm } = authSlice.actions

export default authSlice.reducer
