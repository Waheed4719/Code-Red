import React, { useState } from 'react'
import ProblemsTableBody from '@/components/ProblemsTable/ProblemsTableBody'
import ProblemsTableHeader from '@/components/ProblemsTable/ProblemsTableHeader'
import ProblemsTableLoadingSkeleton from './ProblemsTableLoadingSkeleton'

type Props = {}

const ProblemsTable = (_: Props) => {
  const [loadingProblems, setLoadingProblems] = useState(true)

  return (
    <div className='relative overflow-x-auto mx-auto px-6 pb-10'>
      {loadingProblems && (
        <div className='sm:w-7/12 w-full max-w-[1200px] mx-auto animate-pulse'>
          {[...Array(10)].map((_, idx) => (
            <ProblemsTableLoadingSkeleton key={idx} />
          ))}
        </div>
      )}
      <table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
        {!loadingProblems && <ProblemsTableHeader />}
        <ProblemsTableBody setLoadingProblems={setLoadingProblems} />
      </table>
    </div>
  )
}

export default ProblemsTable
