import { useState } from 'react'
import './styles.css'

interface TopDropdownProps {
  onSelected: (selected: 'list' | 'grid') => void
}

const TopDropdown = ({ onSelected }: TopDropdownProps) => {
  const [selected, setSelected] = useState<'list' | 'grid'>('list')
  const [isOpen, setIsOpen] = useState(false)

  const onOptionClicked = (option: 'list' | 'grid') => {
    setSelected(option)
    onSelected(option)
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
                onOptionClicked('list')
              }}
            >
              List
            </li>
            <li
              onClick={(e) => {
                e.stopPropagation()
                onOptionClicked('grid')
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
