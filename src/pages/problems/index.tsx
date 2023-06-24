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
        <div className='grid grid-cols-4 mx-auto max-w-[1200px] gap-4 px-4 py-4 mt-10 mb-5'>
          <div className='col-span-3'>
            <Toolbar />
            <ProblemsTable />
          </div>
          <div className='col-span-1'>
            <div className='bg-dark-layer-1 h-[300px] rounded-md'></div>
          </div>
        </div>
      </main>
    </>
  )
}
