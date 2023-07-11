import { Inter } from 'next/font/google'

import NewsCard from '@/components/NewsCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <NewsCard />
          </>
  )
}
