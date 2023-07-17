import React, { useState } from 'react'
import Dropdown from '../Dropdown'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { changeProblemFilters } from '@/redux/problemFilterSlice'
import TextField from '../Input/TextField'
import { FaSearch } from 'react-icons/fa'
import { tagOptions } from '@/data/filters'
import { IoSettingsOutline } from 'react-icons/io5'

type ToolbarProps = {}

const difficultyOptions = ['Easy', 'Medium', 'Hard']
const statusOptions = ['Todo', 'Solved', 'Attempted']
const listOptions = [
  'Top 100 liked questions',
  'Top interview questions',
  'Favourites',
]

const Toolbar = (props: ToolbarProps) => {
  const [searchText, setSearchText] = useState<string>('')
  const [list, setList] = React.useState(listOptions[0])
  const { status, difficulty } = useAppSelector((state) => state.problemFilters)
  const dispatch = useAppDispatch()
  const changeFilters = (key: string, value: string) => {
    dispatch(changeProblemFilters({ [key]: value }))
  }

  return (
    <div className='flex gap-2 items-center w-full max-w-[1200px] mx-auto pb-2 overflow-auto'>
      <Dropdown
        className='min-w-[100px]'
        label='Lists'
        options={listOptions}
        selectedOption={list}
        handleOptionSelect={(value) => changeFilters('lists', value)}
      />
      <Dropdown
        className='min-w-[100px]'
        label='Difficulty'
        options={difficultyOptions}
        selectedOption={difficulty}
        handleOptionSelect={(value) => changeFilters('difficulty', value)}
      />
      <Dropdown
        className='min-w-[100px]'
        label='Status'
        selectedOption={status}
        options={statusOptions}
        handleOptionSelect={(value) => changeFilters('status', value)}
      />

      <Dropdown
        className='min-w-[100px]'
        type='search-filter'
        label='Tags'
        selectedOption={status}
        options={tagOptions.map((item) => item.value)}
        handleOptionSelect={(value) => changeFilters('status', value)}
      />
      <TextField
        value={searchText}
        className='flex-1'
        placeholder='Search problems'
        icon={<FaSearch size={12} />}
        onChange={(val: string) => setSearchText(val)}
      />
      <Dropdown
        showArrow={false}
        label={<IoSettingsOutline />}
        selectedOption={status}
        options={statusOptions}
        className='max-w-fit'
        handleOptionSelect={(value) => changeFilters('status', value)}
      />
      <div className='flex gap-2 items-center text-white'>
        <div className='flex rounded-full bg-green-500 min-h-[32px] min-w-[32px] items-center justify-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width='1em'
            height='1em'
            fill='currentColor'
            className='h-[18px] w-[18px] text-white'
          >
            <path
              fillRule='evenodd'
              d='M18.48 17.5h-2.204a5 5 0 01-4.31-2.466l-.625-1.061-.624 1.061a5 5 0 01-4.31 2.466H2.661a1 1 0 110-2h3.746a3 3 0 002.586-1.48L10.181 12 8.993 9.98A3 3 0 006.407 8.5H2.661a1 1 0 110-2h3.746a5 5 0 014.31 2.466l.624 1.061.624-1.061a5 5 0 014.31-2.466h2.205V4.315a.5.5 0 01.874-.332l2.536 2.853a1 1 0 010 1.328l-2.536 2.853a.5.5 0 01-.874-.332V8.5h-2.204a3 3 0 00-2.587 1.48L12.501 12l1.188 2.02a3 3 0 002.587 1.48h2.204v-2.185a.5.5 0 01.874-.332l2.83 3.185a.5.5 0 010 .664l-2.83 3.185a.5.5 0 01-.874-.332V17.5z'
              clipRule='evenodd'
            ></path>
          </svg>
        </div>
        <div className='text-sm whitespace-nowrap'>Pick One</div>
      </div>
    </div>
  )
}

export default Toolbar
