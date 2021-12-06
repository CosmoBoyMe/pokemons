import { FC } from 'react'
import LoaderSvg from '../../../assets/loader.svg'
import './Loader.scss'

const Loader: FC = () => {
    return <img className="loader" src={LoaderSvg} alt="loader" />
}

export { Loader }
