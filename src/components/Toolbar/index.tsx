import React from 'react'
import Dropdown from '../Dropdown'

type ToolbarProps = {}

const difficultyOptions = ['Easy', 'Medium', 'Hard']
const statusOptions = ['Todo', 'Solved', 'Attempted']
const listOptions = [
  'Top 100 liked questions',
  'Top interview questions',
  'Favourites',
]

const Toolbar = (props: ToolbarProps) => {
  const [difficulty, setDifficulty] = React.useState(difficultyOptions[0])
  const [status, setStatus] = React.useState(statusOptions[0])
  const [list, setList] = React.useState(listOptions[0])

  return (
    <div className='flex gap-2 items-center sm:w-7/12 w-full max-w-[1200px] mx-auto px-3 pb-2'>
      <Dropdown
        label='Lists'
        options={listOptions}
        selectedOption={list}
        handleOptionSelect={(value) => setList(value)}
      />
      <Dropdown
        label='Difficulty'
        options={difficultyOptions}
        selectedOption={difficulty}
        handleOptionSelect={(value) => setDifficulty(value)}
      />
      <Dropdown
        label='Status'
        selectedOption={status}
        options={statusOptions}
        handleOptionSelect={(value) => setStatus(value)}
      />
      <Dropdown
        label='Tags'
        selectedOption={status}
        options={statusOptions}
        handleOptionSelect={(value) => setStatus(value)}
      />
      <Dropdown
        label='Tags'
        selectedOption={status}
        options={statusOptions}
        handleOptionSelect={(value) => setStatus(value)}
      />
    </div>
  )
}

export default Toolbar
