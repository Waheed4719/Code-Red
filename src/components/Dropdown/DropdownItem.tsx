import React, { ReactNode } from 'react'
import { BsCheckLg, BsChevronDown } from 'react-icons/bs'

type Props<T> = {
  selectedOption: T
  value: T
  handleItemChange: (value: T) => void
}

const DropdownItem = <T extends ReactNode>({
  selectedOption,
  value,
  handleItemChange,
}: Props<T>) => {
  console.log(selectedOption, value)
  return (
    <li
      className='relative flex h-8 cursor-pointer select-none py-1.5 pl-2 text-label-2 dark:text-dark-label-2 hover:bg-dark-fill-3 rounded-lg'
      onClick={() => handleItemChange(value)}
    >
      <div className={`flex h-5 flex-1 items-center pr-2`}>
        <div className='whitespace-nowrap'>{value}</div>
      </div>
      <span
        className={`text-blue dark:text-dark-blue flex items-center dark:text-dark-label-2 pr-2 text-sm ${
          selectedOption === value ? 'visible' : 'invisible'
        }`}
      >
        <BsCheckLg />
      </span>
    </li>
  )
}

export default DropdownItem
