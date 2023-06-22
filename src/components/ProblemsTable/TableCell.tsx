import React from 'react'

type Props<T> = {
  children: React.ReactNode
  data: T[]
}

const TableCell = <T extends object | string | number>({
  children,
}: Props<T>) => {
  return (
    <div role='col' className='px-2 py-4'>
      {children}
    </div>
  )
}

export default TableCell
