import { Link, NavLink } from 'react-router-dom'
import styles from './header.module.css'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const ToggleOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className={styles.header}>
      <h1>
        <Link to={'/'}>10012</Link>
      </h1>
      <nav className={styles.menu}>
        <NavLink to={'/'}>BEST</NavLink>
        <NavLink to={'/'}>TOP</NavLink>
        <NavLink to={'/'}>OUTER</NavLink>
        <NavLink to={'/'}>BOTTOM</NavLink>
        <NavLink to={'/'}>SHOES</NavLink>
      </nav>
      <nav className={styles.func}>
        <NavLink to={'/'}>WISHLIST</NavLink>
        <NavLink to={'/'}>LOGIN</NavLink>
        <NavLink to={'/'}>CART</NavLink>
        <NavLink to={'/'}>MYPAGE</NavLink>
      </nav>
      <i className={`bi bi-list ${styles.ham}`} onClick={ToggleOpen}></i>
    </header>
  )
}
export default Header
