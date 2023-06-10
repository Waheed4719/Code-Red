import { useState } from 'react'
import { BsCheckLg, BsChevronDown } from 'react-icons/bs'
import DropdownItem from './DropdownItem'

type Props = {
  label: string
  options: string[]
  selectedOption: string
  handleOptionSelect: (value: string) => void
}

const Dropdown = ({
  label,
  options,
  selectedOption,
  handleOptionSelect,
}: Props) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
  const handleClickDropdown = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation()
    setDropdownIsOpen((prev) => !prev)
  }
  return (
    <div className='w-[170px]'>
      <div className='relative'>
        <button
          onClick={handleClickDropdown}
          className='text-white flex cursor-pointer items-center rounded px-3 py-1.5 text-left focus:outline-none whitespace-nowrap bg bg-dark-fill-3 hover:bg-dark-fill-2 active:bg-dark-fill-3 w-full justify-between'
          type='button'
        >
          {label}
          <BsChevronDown />
        </button>
        {dropdownIsOpen && (
          <ul
            className='absolute mt-1 max-h-56 overflow-auto rounded-lg p-2 z-50 focus:outline-none shadow-lg   w-full bg-dark-layer-1'
            style={{
              filter:
                'drop-shadow(rgba(0, 0, 0, 0.04) 0px 1px 3px) drop-shadow(rgba(0, 0, 0, 0.12) 0px 6px 16px)',
            }}
          >
            {options.map((value) => (
              <DropdownItem
                key={value}
                value={value}
                selectedOption={selectedOption ?? options[0]}
                handleItemChange={(val) => handleOptionSelect(val)}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Dropdown
