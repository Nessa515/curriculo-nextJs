import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Cabecalho from '@/components/Cabecalho'
import Banner from '@/components/Banner'
import Formacao from '@/components/Formacao'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Cabecalho />
      <Banner />
      <Formacao />
    </>
  )
}
