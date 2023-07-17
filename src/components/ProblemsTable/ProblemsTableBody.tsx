import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BsCheck2Circle } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'
import { IoClose } from 'react-icons/io5'
import YouTube from 'react-youtube'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from 'firebase/firestore'
import { auth, firestore } from '@/firebase/firebase'
import { DBProblem } from '@/utils/types/problem'
import { useAuthState } from 'react-firebase-hooks/auth'

type ProblemsTableBodyProps = {
  setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>
}

const ProblemsTableBody: React.FC<ProblemsTableBodyProps> = ({
  setLoadingProblems,
}) => {
  const [youtubePlayer, setYoutubePlayer] = useState({
    isOpen: false,
    videoId: '',
  })
  const problems = useGetProblems(setLoadingProblems)
  const solvedProblems = useGetSolvedProblems()
  const closeModal = () => {
    setYoutubePlayer({ isOpen: false, videoId: '' })
  }

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handleEsc)

    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  return (
    <>
      <div className='min-w-fit'>
        {problems.slice(0,5).map((problem, idx) => {
          const difficulyColor =
            problem.difficulty === 'Easy'
              ? 'text-olive dark:text-dark-olive'
              : problem.difficulty === 'Medium'
              ? 'text-dark-yellow'
              : 'text-dark-pink'
          return (
            <div
              role='row '
              style={{ display: 'flex', flex: '1 0 auto', minWidth: 0 }}
              className={`${idx % 2 == 1 ? 'bg-dark-layer-1' : ''}`}
              key={problem.id}
            >
              <div
                role='cell'
                className='mx-2 w-[40px] basis-auto flex-[40] shrink-0 flex items-center py-[11px] font-medium whitespace-nowrap text-dark-green-s'
              >
                {solvedProblems.includes(problem.id) && (
                  <BsCheck2Circle fontSize={'18'} width='18' />
                )}
              </div>
              <div
                role='cell'
                className='mx-2 w-[260px] basis-auto flex-[260] shrink-0 flex items-center py-[11px]'
              >
                <div className='max-w-[302px] flex items-center overflow-hidden'>
                  <div className='overflow-hidden'>
                    <div className='flex items-center'>
                      <div className='truncate'>
                        {problem.link ? (
                          <Link
                            href={problem.link}
                            className='h-5 hover:text-blue-s dark:hover:text-dark-blue-s cursor-pointer'
                            target='_blank'
                          >
                            {problem.title}
                          </Link>
                        ) : (
                          <Link
                            className='h-5 hover:text-blue-s dark:hover:text-dark-blue-s cursor-pointer'
                            href={`/problems/${problem.id}`}
                          >
                            {problem.order}. {problem.title}
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                role='cell'
                className='mx-2 w-[84px] basis-auto flex-[84] shrink-0 flex items-center py-[11px]'
              >
                <span className={`${difficulyColor}`}>
                  {problem.difficulty}
                </span>
              </div>
              <div
                role='cell'
                style={{
                  flex: '150 0 auto',
                  width: '150px',
                }}
                className={
                  'w-[150px] basis-auto flex-[150] mx-2 shrink-0 flex py-[11px] max-w-[150px]'
                }
              >
                <div className='max-w-[302px] flex items-center overflow-hidden'>
                  <div className='overflow-hidden'>
                    <div className='flex items-center'>
                      <div className='truncate'>{problem.category}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                role='cell'
                style={{
                  flex: '84 0 auto',
                  width: '84px',
                }}
                className='w-[84px] basis-auto flex-[84] shrink-0 mx-2 flex items-center py-[11px]'
              >
                <div className='flex h-full w-full flex-row items-center'>
                  {/* {problem.videoId ? (
                    <AiFillYoutube
                      fontSize={'20'}
                      className='cursor-pointer hover:text-red-600'
                      onClick={() =>
                        setYoutubePlayer({
                          isOpen: true,
                          videoId: problem.videoId as string,
                        })
                      }
                    />
                  ) : ( */}
                    <p className='text-gray-400'>Coming soon</p>
                  {/* )} */}
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {youtubePlayer.isOpen && (
        <div className='fixed top-0 left-0 h-screen w-screen flex items-center justify-center'>
          <div
            className='bg-black z-10 opacity-70 top-0 left-0 w-screen h-screen absolute'
            onClick={closeModal}
          ></div>
          <div className='w-full z-50 h-full relative max-w-4xl'>
            <div className='w-full h-full flex items-center justify-center relative'>
              <div className='w-full relative'>
                <IoClose
                  fontSize={'35'}
                  className='cursor-pointer absolute -top-16 right-0'
                  onClick={closeModal}
                />
                <YouTube
                  videoId={youtubePlayer.videoId}
                  loading='lazy'
                  iframeClassName='w-full min-h-[500px]'
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default ProblemsTableBody

function useGetProblems(
  setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>
) {
  const [problems, setProblems] = useState<DBProblem[]>([])

  useEffect(() => {
    const getProblems = async () => {
      // fetching data logic
      setLoadingProblems(true)
      const q = query(
        collection(firestore, 'problems'),
        orderBy('order', 'asc')
      )
      const querySnapshot = await getDocs(q)
      const tmp: DBProblem[] = []
      querySnapshot.forEach((doc) => {
        tmp.push({ id: doc.id, ...doc.data() } as DBProblem)
      })
      setProblems(tmp)
      setLoadingProblems(false)
    }

    getProblems()
  }, [setLoadingProblems])
  return problems
}

function useGetSolvedProblems() {
  const [solvedProblems, setSolvedProblems] = useState<string[]>([])
  const [user] = useAuthState(auth)

  useEffect(() => {
    const getSolvedProblems = async () => {
      const userRef = doc(firestore, 'users', user!.uid)
      const userDoc = await getDoc(userRef)

      if (userDoc.exists()) {
        setSolvedProblems(userDoc.data().solvedProblems)
      }
    }

    if (user) getSolvedProblems()
    if (!user) setSolvedProblems([])
  }, [user])

  return solvedProblems
}
