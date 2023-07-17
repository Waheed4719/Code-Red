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
        {/* <div className='grid grid-cols-4 mx-auto max-w-[1200px] gap-4 p-4 mt-10 mb-3'> */}
          <div className='col-span-4 md:col-span-3 mt-10 p-4'>
            <Toolbar />
            <ProblemsTable />
          </div>
          {/* <div className='col-span-4 md:col-span-1'>
            <div className='bg-dark-layer-1 h-[300px] rounded-md p-4'>
              <h1 className='text-white text-center font-medium'>Statistics</h1>
              <p className='text-white  text-center font-semibold'>Coming Soon...</p>
            </div>
          </div> */}
        {/* </div> */}
      </main>
    </>
  )
}
