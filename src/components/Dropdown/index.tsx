import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import DropdownItem from './DropdownItem'
import ClickAwayComponent from '../ClickAwayComponent'
import SearchFilterDropdown from './SearchFilterDropdown'

type DropdownType = 'selection' | 'search-filter'

type Props = {
  label: string | React.ReactNode
  options: string[]
  selectedOption: string
  handleOptionSelect: (value: string) => void
  type?: DropdownType
  showArrow?: boolean
  className?: string
}

const Dropdown = ({
  label,
  options,
  selectedOption,
  handleOptionSelect,
  type = 'selection',
  showArrow = true,
  className,
}: Props) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)

  const handleClickDropdown = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation()
    setDropdownIsOpen((prev) => !prev)
  }

  const handleItemChange = (value: string) => {
    handleOptionSelect(value)
    setDropdownIsOpen(false)
  }

  return (
    <ClickAwayComponent
      className={`flex ${className}`}
      onClickAway={() => setDropdownIsOpen(false)}
    >
      <div className='relative w-full'>
        <button
          onClick={handleClickDropdown}
          className='h-[32px] text-sm w-full gap-4 text-white flex cursor-pointer items-center rounded px-3 py-1.5 text-left focus:outline-none whitespace-nowrap bg bg-dark-fill-3 hover:bg-dark-fill-2 active:bg-dark-fill-3 justify-between'
          type='button'
        >
          {label}
          {showArrow && (
            <BsChevronDown
              className={` transition-transform duration-200 ${
                dropdownIsOpen ? 'rotate-180' : 'rotate-0'
              }`}
            />
          )}
        </button>

        {dropdownIsOpen && type === 'selection' ? (
          <ul
            className='absolute mt-1 max-h-56 overflow-auto rounded-lg p-2 z-50 focus:outline-none shadow-lg w-fit  bg-dark-layer-1'
            style={{
              filter:
                'drop-shadow(rgba(0, 0, 0, 0.04) 0px 1px 3px) drop-shadow(rgba(0, 0, 0, 0.12) 0px 6px 16px)',
            }}
          >
            {options.map((value) => (
              <DropdownItem
                key={value}
                value={value}
                selectedOption={selectedOption}
                handleItemChange={(val) => handleItemChange(val)}
              />
            ))}
          </ul>
        ) : dropdownIsOpen && type === 'search-filter' ? (
          <SearchFilterDropdown options={options} />
        ) : null}
      </div>
    </ClickAwayComponent>
  )
}

export default Dropdown
