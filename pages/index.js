import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NewsCard from '@/components/NewsCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <h1>Welcome to News and Blogs website</h1>
    <NewsCard />
          </>
  )
}
