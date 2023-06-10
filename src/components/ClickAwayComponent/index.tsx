import React, { useEffect, useRef, ReactNode } from 'react'

interface ClickAwayComponentProps {
  children: ReactNode
  onClickAway: () => void
  className?: string
}

const ClickAwayComponent: React.FC<ClickAwayComponentProps> = ({
  children,
  onClickAway,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        onClickAway()
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [onClickAway])

  return (
    <div className={className} ref={containerRef}>
      {children}
    </div>
  )
}

export default ClickAwayComponent
