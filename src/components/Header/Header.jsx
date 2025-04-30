import { Link, NavLink } from 'react-router-dom'
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link to={'/'}>10012</Link>
      </h1>
      <nav>
        <NavLink to={'/'}>BEST</NavLink>
        <NavLink to={'/'}>TOP</NavLink>
        <NavLink to={'/'}>OUTER</NavLink>
        <NavLink to={'/'}>BOTTOM</NavLink>
        <NavLink to={'/'}>SHOES</NavLink>
      </nav>
      <nav>
        <NavLink to={'/'}>WISHLIST</NavLink>
        <NavLink to={'/'}>CART</NavLink>
        <NavLink to={'/'}>MYPAGE</NavLink>
      </nav>
    </header>
  )
}
export default Header
