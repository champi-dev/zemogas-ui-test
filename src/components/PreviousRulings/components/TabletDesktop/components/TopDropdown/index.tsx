import { useState } from 'react'
import './styles.css'

const TopDropdown = () => {
  const [selected, setSelected] = useState<'List' | 'Grid'>('List')
  const [isOpen, setIsOpen] = useState(false)

  const onOptionClicked = (option: 'List' | 'Grid') => {
    setSelected(option)
    setIsOpen(false)
  }

  return (
    <div className="top-dropdown" onClick={() => setIsOpen(true)}>
      <span>{selected}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="7"
        viewBox="0 0 11 7"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.25 7L6.11959e-07 -9.17939e-07L10.5 0L5.25 7Z"
          fill="#333333"
        />
      </svg>

      <>
        {isOpen ? (
          <ul>
            <li
              onClick={(e) => {
                e.stopPropagation()
                onOptionClicked('List')
              }}
            >
              List
            </li>
            <li
              onClick={(e) => {
                e.stopPropagation()
                onOptionClicked('Grid')
              }}
            >
              Grid
            </li>
          </ul>
        ) : (
          <></>
        )}
      </>
    </div>
  )
}

export default TopDropdown
