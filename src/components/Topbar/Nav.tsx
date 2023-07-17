import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

type Props = {}

type Route = {
  name: string
  path: string
}

const routes: Route[] = [
  // { name: 'Explore', path: '/explore' },
  { name: 'Problems', path: '/problems' },
  // { name: 'Discuss', path: '/discuss' },
]

const Nav = (props: Props) => {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    setActive(window.location.pathname)
  }, [])

  return (
    <div className='flex gap-3 items-center'>
      <Link href='/' className='h-full items-center pr-1'>
        <Image src='/logo1.png' alt='Logo' height={25} width={25} />
      </Link>
      {routes.map((route) => (
        <Link
          key={route.name}
          onClick={() => setActive(route.path)}
          href={route.path}
          className={`h-[22px] flex-1 relative hover:text-white`}
        >
          {route.name}
          {active === route.path && (
            <div className='h-[2px] w-full absolute bottom-[-13px] bg-gray-300' />
          )}
        </Link>
      ))}
    </div>
  )
}

export default Nav
