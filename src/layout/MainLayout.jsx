import { Outlet } from 'react-router-dom'
import styles from './mainlayout.module.css'
import Header from '../components/Header/Header'

const MainLayout = () => {
  return (
    <main className={styles.container}>
      <Header />
      <Outlet />
    </main>
  )
}

export default MainLayout
