import ProblemsTable from '@/components/ProblemsTable'
import Toolbar from '@/components/Toolbar'
import Topbar from '@/components/Topbar/Topbar'
import useHasMounted from '@/hooks/useHasMounted'

export default function Home() {
  const hasMounted = useHasMounted()

  if (!hasMounted) return null

  return (
    <>
      <main className='bg-dark-layer-2 min-h-screen'>
        <Topbar />

        <h1
          className='text-2xl text-center text-gray-700 dark:text-gray-400 font-medium
					uppercase mt-10 mb-5'
        >
          Code Red, Code Great!
        </h1>
        {/* <div className='grid grid-cols-4 mx-auto max-w-[1200px] gap-4 px-4 py-4'> */}
        {/* <div className='col-span-3'> */}
        <div>
          <Toolbar />
          <ProblemsTable />
        </div>
        {/* <div className='col-span-1'>
            <div className='bg-dark-layer-1 h-[300px] rounded-md'></div>
          </div>
        </div> */}
      </main>
    </>
  )
}
