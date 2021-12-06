import { ChangeEvent, FC, MouseEvent, useState } from 'react'
import './Select.scss'
import cn from 'classnames'

interface ISelectProps {
    items: Array<string>
    name: string
    selectedItemName: string | ''
    setSelectedItemName: (itemName: string) => void
}

const filterItems = (text: string, items: Array<string>): Array<string> => {
    const lowerCaseText = text.toLowerCase()

    return items.filter((item) => {
        const lowerCaseItem = item.toLowerCase()

        return lowerCaseItem.startsWith(lowerCaseText)
    })
}

const Select: FC<ISelectProps> = ({
    items,
    name,
    selectedItemName,
    setSelectedItemName,
}) => {
    const [showDropdown, setShowDropdown] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('')
    const [filtredItems, setfiltredItems] = useState(items)

    const handlerChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.currentTarget
        const newFilteredItems = filterItems(value, items)

        setInputValue(value)
        setfiltredItems(newFilteredItems)
    }

    const toogleDropdown = (): void => {
        setShowDropdown(!showDropdown)
    }

    const handlerClickLi = (event: MouseEvent<HTMLLIElement>): void => {
        const { textContent } = event.currentTarget
        if (textContent !== null) {
            setSelectedItemName(textContent)
            setfiltredItems(items)
            setInputValue('')
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
                {selectedItemName !== '' ? selectedItemName : name}
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
                {filtredItems.map((item) => (
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
