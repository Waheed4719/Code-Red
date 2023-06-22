import React from 'react'
import Dropdown from '../Dropdown'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { changeProblemFilters } from '@/redux/problemFilterSlice'

type ToolbarProps = {}

const difficultyOptions = ['Easy', 'Medium', 'Hard']
const statusOptions = ['Todo', 'Solved', 'Attempted']
const listOptions = [
  'Top 100 liked questions',
  'Top interview questions',
  'Favourites',
]

const Toolbar = (props: ToolbarProps) => {
  const [list, setList] = React.useState(listOptions[0])
  const { status, difficulty } = useAppSelector((state) => state.problemFilters)
  const dispatch = useAppDispatch()
  const changeFilters = (key: string, value: string) => {
    dispatch(changeProblemFilters({ [key]: value }))
  }

  return (
    <div className='flex gap-2 items-center w-full max-w-[1200px] mx-auto pb-2'>
      <Dropdown
        label='Lists'
        options={listOptions}
        selectedOption={list}
        handleOptionSelect={(value) => changeFilters('lists', value)}
      />
      <Dropdown
        label='Difficulty'
        options={difficultyOptions}
        selectedOption={difficulty}
        handleOptionSelect={(value) => changeFilters('difficulty', value)}
      />
      <Dropdown
        label='Status'
        selectedOption={status}
        options={statusOptions}
        handleOptionSelect={(value) => changeFilters('status', value)}
      />
      <Dropdown
        label='Tags'
        selectedOption={status}
        options={statusOptions}
        handleOptionSelect={(value) => changeFilters('status', value)}
      />
      <Dropdown
        label='Tags'
        selectedOption={status}
        options={statusOptions}
        handleOptionSelect={(value) => changeFilters('status', value)}
      />
    </div>
  )
}

export default Toolbar
