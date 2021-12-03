import { FC } from 'react'
import './reset.css'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'

const App: FC = function app() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    )
}

export default App
