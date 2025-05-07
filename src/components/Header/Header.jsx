import { Link, NavLink } from 'react-router-dom'
import styles from './header.module.css'
import { useEffect, useState } from 'react'
import { throttle } from '../../utils/features.js'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const ToggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleResize = throttle(() => {
    if (window.innerWidth > 1100) {
      setIsOpen(false)
    }
  }, 1000)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link to={'/'}>10012</Link>
      </h1>
      <div className={isOpen ? `${styles.content} ${styles.open}` : styles.content}>
        <nav className={styles.menu}>
          <NavLink to={'/'}>BEST</NavLink>
          <NavLink to={'/'}>TOP</NavLink>
          <NavLink to={'/'}>OUTER</NavLink>
          <NavLink to={'/'}>BOTTOM</NavLink>
        </nav>
        <nav className={styles.func}>
          <NavLink to={'/'}>WISHLIST</NavLink>
          <NavLink to={'/'}>LOGIN</NavLink>
          <NavLink to={'/'}>CART</NavLink>
          <NavLink to={'/'}>MYPAGE</NavLink>
        </nav>
      </div>

      <i className={`bi bi-list ${styles.ham}`} onClick={ToggleOpen}></i>
    </header>
  )
}
export default Header
