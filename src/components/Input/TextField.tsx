import React, { ReactNode } from 'react'

type Props = {
  placeholder?: string
  value?: string
  icon?: ReactNode
  onChange?: (value: string) => void
}

const TextField = ({ placeholder, value, onChange, icon }: Props) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value as string)
  }

  return (
    <div className='bg-dark-fill-3 hover:bg-dark-fill-2 active:bg-dark-fill-3 rounded px-3 py-1.5 flex justify-start gap-2 items-center text-gray-400'>
      {icon && icon}
      <input
        className='text-sm bg-transparent text-white flex cursor-pointer items-center focus:outline-none '
        value={value}
        placeholder={placeholder || ''}
        onChange={onChangeHandler}
      />
    </div>
  )
}

export default TextField
