import React from 'react'

type Props = {}

const headers = [
    {
        name: 'Status',
        key: 'status'
    },
    {
        name: 'Title',
        key: 'title'
    },
    {
        name: 'Difficulty',
        key: 'difficulty'

    },
    {
        name: 'Category',
        key: 'category'
    },
    {
        name: 'Solution',
        key: 'solution'

    },
]

const ProblemsTableHeader = (props: Props) => {
  return (
    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 border-b border-gray-500 ">
    <tr>
      {headers.map((header) => (
          <th
          key={header.key}
          scope="col"
          className="px-1 py-3 w-0 font-medium normal-case text-[14px]"
        >
          {header.name}
        </th>
    ))}
    </tr>
  </thead>
  )
}

export default ProblemsTableHeader