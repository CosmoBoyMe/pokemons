import { FC, useState } from 'react'
import './Pagination.scss'

// const currentPage = 1
const maxPageCount = 5
const totalItemsCount = 30
const maxItemsPerPage = 5

// const createPageNumbersArray = (
//     startPageNumber,
//     maxPageNumber
// ): Array<number> => {
//     const pageNumbers = []

//     const

// }

const Pagination: FC = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const handlerClickUl = (): void => {
        console.log(1)
    }

    const handlerClickBtn = (): void => {
        console.log(1)
    }

    return (
        <div className="pagination">
            <ul onClick={handlerClickUl} className="pagination__number-list">
                <li className="pagination__page-number" />
            </ul>
            <button onClick={handlerClickBtn} className="pagination__last-btn">
                last
            </button>
        </div>
    )
}

export { Pagination }
