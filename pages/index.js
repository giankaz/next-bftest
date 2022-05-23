
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Head from 'next/head'
import LinearIndeterminate from '../components/UI/LinearMUI'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/login')
  }, [])

  return (
    <>
      <Head>
        <title>Disparo PRO</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.container}>
        <LinearIndeterminate />
      </div>
    </>
  )
}
