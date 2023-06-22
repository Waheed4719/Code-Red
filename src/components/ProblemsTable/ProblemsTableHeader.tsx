import React from 'react'

type Props = {}

const headers = [
  {
    name: 'Status',
    key: 'status',
    className: 'w-[40px] basis-auto flex-[40] shrink-0',
  },
  {
    name: 'Title',
    key: 'title',
    className: 'w-[260px] basis-auto flex-[260] shrink-0',
  },
  {
    name: 'Difficulty',
    key: 'difficulty',
    className: 'w-[84px] basis-auto flex-[84] shrink-0 ',
  },
  {
    name: 'Category',
    key: 'category',
    className: 'w-[150px] basis-auto flex-[150] shrink-0 max-w-[150px]',
  },
  {
    name: 'Solution',
    key: 'solution',
    className: 'w-[84px] basis-auto flex-[84] shrink-0',
  },
]

const ProblemsTableHeader = (props: Props) => {
  return (
    <div className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b border-gray-500 min-w-fit'>
      <div className='flex'>
        {headers.map((header) => (
          <div
            key={header.key}
            role='cell'
            className={`mx-2 py-3 font-medium normal-case text-[14px] ${header.className}`}
          >
            {header.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProblemsTableHeader
