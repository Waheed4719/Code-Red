import React, { useState } from 'react'
import TextField from '../Input/TextField'
import { FaSearch } from 'react-icons/fa'

type Props = {
  options?: string[]
}

const SearchFilterDropdown = ({ options }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)

  let filteredOptions = options

  if (!isExpanded) {
    filteredOptions = options?.slice(0, 5)
  }
  return (
    <div
      className='absolute bg-dark-layer-1 p-3 rounded-md z-[1] flex flex-col gap-2 mt-1 w-[400px]'
      style={{
        filter:
          'drop-shadow(rgba(0, 0, 0, 0.04) 0px 1px 3px) drop-shadow(rgba(0, 0, 0, 0.12) 0px 6px 16px)',
      }}
    >
      <TextField placeholder='Search tags' icon={<FaSearch size={12} />} />
      <nav className='flex gap-4 text-white'>
        <div>Topics</div>
        <div>Companies</div>
      </nav>
      <div className='flex gap-2 flex-wrap text-white'>
        {filteredOptions?.map((option) => (
          <div
            className='bg-dark-layer-2 rounded-lg text-gray-400 px-2 py-1 text-[12px]'
            key={option}
          >
            {option}
          </div>
        ))}
      </div>
      <div className='border-b border-gray-500'></div>
      <div className='w-full flex justify-end'>
        <button className='text-white font-medium text-md'>Reset</button>
      </div>
    </div>
  )
}

export default SearchFilterDropdown
