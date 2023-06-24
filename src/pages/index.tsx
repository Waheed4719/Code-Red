import useHasMounted from '@/hooks/useHasMounted'
import { useRouter } from 'next/router'

export default function Home() {
  const hasMounted = useHasMounted()

  if (!hasMounted) return 'Loading...'

  const router = useRouter()
  return router.push('/problems')
}
