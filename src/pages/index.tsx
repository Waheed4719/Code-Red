import useHasMounted from '@/hooks/useHasMounted'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const hasMounted = useHasMounted()
  const router = useRouter()

  useEffect(() => {
    if (hasMounted) {
      router.push('/problems')
    }
  }, [hasMounted])

  if (!hasMounted) return <div>Loading...</div>
}
