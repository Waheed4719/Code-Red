import React, { useState } from 'react'
import ProblemsTableBody from '@/components/ProblemsTable/ProblemsTableBody'
import ProblemsTableHeader from '@/components/ProblemsTable/ProblemsTableHeader'
import ProblemsTableLoadingSkeleton from './ProblemsTableLoadingSkeleton'

type Props = {}

const ProblemsTable = (_: Props) => {
  const [loadingProblems, setLoadingProblems] = useState(true)

  return (
    <div className='relative overflow-x-auto mx-auto pb-10'>
      {loadingProblems && (
        <div className='w-full max-w-[1200px] mx-auto animate-pulse'>
          {[...Array(10)].map((_, idx) => (
            <ProblemsTableLoadingSkeleton key={idx} />
          ))}
        </div>
      )}
      <div className='overflow-auto text-sm text-left text-gray-500 dark:text-gray-400 w-full max-w-[1200px] mx-auto'>
        {!loadingProblems && <ProblemsTableHeader />}
        <ProblemsTableBody setLoadingProblems={setLoadingProblems} />
      </div>

      {/* <div
        role='row'
        style={{ display: 'flex', flex: '1 0 auto', minWidth: 0 }}
        className='odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4'
      >
        <div
          role='cell'
          style={{
            boxSizing: 'border-box',
            flex: '52 0 auto',
            minWidth: 0,
            width: '52px',
          }}
          className='mx-2 flex items-center py-[11px]'
        >
          <span>
            <svg
              viewBox='0 0 24 24'
              focusable='false'
              className='chakra-icon css-1hwpjif'
            >
              <path
                d='M21.6004 12C21.6004 17.302 17.3023 21.6 12.0004 21.6C6.69846 21.6 2.40039 17.302 2.40039 12C2.40039 6.69809 6.69846 2.40002 12.0004 2.40002C13.5066 2.40002 14.9318 2.74689 16.2004 3.3651M19.8004 6.00002L11.4004 14.4L9.00039 12'
                stroke='currentColor'
                stroke-width='2.3'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
            </svg>
          </span>
        </div>

        <div
          role='cell'
          style={{
            boxSizing: 'border-box',
            flex: '260 0 auto',
            minWidth: 0,
            width: '260px',
          }}
          className='mx-2 flex items-center py-[11px]'
        >
          <div className='max-w-[302px] flex items-center overflow-hidden'>
            <div className='overflow-hidden'>
              <div className='flex items-center'>
                <div className='truncate'>
                  <a
                    href='/problems/two-sum/'
                    className='h-5 hover:text-blue-s dark:hover:text-dark-blue-s'
                  >
                    1. Two Sum
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role='cell'
          style={{
            boxSizing: 'border-box',
            flex: '54 0 auto',
            minWidth: 0,
            width: '54px',
          }}
          className='mx-2 flex items-center py-[11px]'
        >
          <a
            aria-label='solution'
            href='/problems/two-sum/solution'
            className='truncate'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='1em'
              height='1em'
              fill='currentColor'
              className='h-5 w-5 text-purple dark:text-dark-purple'
            >
              <path d='M10 15.464v-3.927a.8.8 0 011.259-.656l2.805 1.964a.8.8 0 010 1.31l-2.805 1.964A.8.8 0 0110 15.464z'></path>
              <path d='M7 4a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V9h-3a2 2 0 01-2-2V4H7zm8 .6V7h1.92L15 4.6zM4 5a3 3 0 013-3h7.039a3 3 0 012.342 1.126l2.962 3.701A3 3 0 0120 8.702V19a3 3 0 01-3 3H7a3 3 0 01-3-3V5z'></path>
            </svg>
          </a>
        </div>
        <div
          role='cell'
          style={{
            boxSizing: 'border-box',
            flex: '100 0 auto',
            minWidth: 0,
            width: '100px',
          }}
          className='mx-2 flex items-center py-[11px]'
        >
          <span>50.1%</span>
        </div>
        <div
          role='cell'
          style={{
            boxSizing: 'border-box',
            flex: '84 0 auto',
            minWidth: 0,
            width: '84px',
          }}
          className='mx-2 flex items-center py-[11px]'
        >
          <span className='text-olive dark:text-dark-olive'>Easy</span>
        </div>
        <div
          role='cell'
          style={{
            boxSizing: 'border-box',
            flex: '84 0 auto',
            minWidth: 0,
            width: '84px',
          }}
          className='mx-2 flex items-center py-[11px]'
        >
          <div className='flex h-full w-full flex-row items-center'>
            <span className='h-2 flex-1 rounded-l-lg bg-fill-3 dark:bg-dark-fill-3'></span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='1em'
              height='1em'
              fill='currentColor'
              className='flex-0 -mt-1.5 h-5 w-5 text-gray-5 dark:text-gray-7'
            >
              <path
                fill-rule='evenodd'
                d='M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z'
                clip-rule='evenodd'
              ></path>
            </svg>
            <span className='h-2 flex-1 rounded-r-lg bg-fill-3 dark:bg-dark-fill-3'></span>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default ProblemsTable
