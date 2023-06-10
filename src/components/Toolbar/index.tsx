import React from 'react'
import Dropdown from '../Dropdown'

type ToolbarProps = {}

const difficulties = ['Easy', 'Medium', 'Hard']
const statuses = ['Todo', 'Solved', 'Attempted']

const Toolbar = (props: ToolbarProps) => {
  const [difficulty, setDifficulty] = React.useState(difficulties[0])
  const [status, setStatus] = React.useState(statuses[0])

  return (
    <div className='flex gap-2 items-center sm:w-7/12 w-full max-w-[1200px] mx-auto px-3 pb-2'>
      <Dropdown
        label='Difficulty'
        options={difficulties}
        selectedOption={difficulty}
        handleOptionSelect={(value) => setDifficulty(value)}
      />
      <Dropdown
        label='Status'
        selectedOption={status}
        options={statuses}
        handleOptionSelect={(value) => setStatus(value)}
      />
    </div>
  )
}

export default Toolbar
