import { Outlet } from 'react-router-dom'
import styles from './mainlayout.module.css'
import Header from '../components/Header/Header.jsx'
import NavBar from '../components/NavBar/NavBar.jsx'
import { Slider } from '../components/Slider/Slider.jsx'

const MainLayout = () => {
  return (
    <main className={styles.container}>
      <Header />
      <NavBar />
      <Slider />
      <Outlet />
    </main>
  )
}

export default MainLayout
