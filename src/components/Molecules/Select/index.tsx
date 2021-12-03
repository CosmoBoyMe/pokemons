import { ChangeEvent, FC, MouseEvent, useState } from 'react'
import './Select.scss'
import cn from 'classnames'

interface ISelectProps {
    items: Array<string>
    name: string
}
const filterTypes = (text: string, items: Array<string>): Array<string> => {
    return items.filter((item) => item.startsWith(text))
}

const Select: FC<ISelectProps> = ({ items, name }) => {
    const [showDropdown, setShowDropdown] = useState<boolean>(false)
    const [selectedType, setSelectedType] = useState<string>('')
    const [inputValue, setInputValue] = useState<string>('')
    const [sortedTypeList, setSortedTypeList] = useState(items)
    const [lastInputValueLength, setLastInputLength] = useState<number>(0)

    const handlerChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.currentTarget
        const userDeletChar = lastInputValueLength > value.length
        let filtredItems

        if (userDeletChar) {
            filtredItems = filterTypes(value, items)
        } else {
            filtredItems = filterTypes(value, sortedTypeList)
        }

        setInputValue(value)
        setLastInputLength(value.length)
        setSortedTypeList(filtredItems)
    }

    const toogleDropdown = (): void => {
        setShowDropdown(!showDropdown)
        setLastInputLength(0)
        setSortedTypeList(items)
        setInputValue('')
    }

    const handlerClickLi = (event: MouseEvent<HTMLLIElement>): void => {
        const { textContent } = event.currentTarget
        if (textContent !== null) {
            setSelectedType(textContent)
            toogleDropdown()
        }
    }

    return (
        <div
            className={cn('select', {
                'select--active': showDropdown,
            })}
            onClick={toogleDropdown}
        >
            <p className="select__name">
                {selectedType !== '' ? selectedType : name}
            </p>
            <ul
                className={cn('select__dropdown', {
                    'select__dropdown--active': showDropdown,
                })}
                onClick={(event) => event.stopPropagation()}
            >
                <li className="select__search">
                    <input
                        onChange={handlerChangeInput}
                        type="text"
                        value={inputValue}
                        className="select__search-input"
                    />
                </li>
                {sortedTypeList.map((item) => (
                    <li
                        data-option=""
                        onClick={handlerClickLi}
                        className="select__item"
                        key={item}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export { Select }
