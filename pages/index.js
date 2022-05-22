
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import LinearIndeterminate from '../components/UI/LinearMUI'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()

  useEffect(()=> {
    router.push('/login')
  },[])

  return (
    <div className={styles.container}>
      <LinearIndeterminate/>
    </div>
  )
}
