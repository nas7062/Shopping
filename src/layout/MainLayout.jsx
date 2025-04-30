import { Outlet } from 'react-router-dom'
import styles from './mainlayout.module.css'

const MainLayout = () => {
  return (
    <main className={styles.container}>
      <h2>MainLayout</h2>
      <Outlet />
    </main>
  )
}

export default MainLayout
