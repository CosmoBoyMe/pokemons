import './Pagination.scss'
import classNames from 'classnames'
import { FC } from 'react'
import { buildPageNumbers } from '../../../helpers'
import { MAX_POKEMONS_COUNT, PAGE_COUNT_PER_PAGE } from '../../../const'

interface IPaginationProps {
    totalCount: number
    currentPageNumber: number
    onClickPage(page: number): void
}

const Pagination: FC<IPaginationProps> = ({
    totalCount,
    currentPageNumber,
    onClickPage,
}) => {
    const totalPageCount = Math.ceil(totalCount / MAX_POKEMONS_COUNT)

    const pageNumbers = buildPageNumbers(
        currentPageNumber,
        totalPageCount,
        PAGE_COUNT_PER_PAGE
    )

    return (
        <div className="pagination">
            {currentPageNumber > PAGE_COUNT_PER_PAGE - 2 && (
                <button
                    className="pagination__btn"
                    onClick={() => onClickPage(1)}
                >
                    first
                </button>
            )}
            <ul className="pagination__number-list">
                {pageNumbers.map((pageNumber) => (
                    <li
                        onClick={() => onClickPage(pageNumber)}
                        key={pageNumber}
                        className={classNames('pagination__page-number', {
                            'pagination__page-number--active':
                                pageNumber === currentPageNumber,
                        })}
                    >
                        {pageNumber}
                    </li>
                ))}
            </ul>
            {currentPageNumber < totalPageCount - 2 && (
                <button
                    onClick={() => onClickPage(totalPageCount)}
                    className="pagination__btn"
                >
                    last
                </button>
            )}
        </div>
    )
}

export { Pagination }
