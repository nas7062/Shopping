import { Link } from 'react-router-dom'
import styles from './navbar.module.css'

const NavBar = () => {
  return (
    <section className={styles.navbar}>
      <h2>
        <Link to={'/'}>10012</Link>
      </h2>
      <div className={styles.inputWrap}>
        <input type="text" placeholder="    상품을 검색하세요..." />
        <i className={`bi bi-search ${styles.search}`}></i>
      </div>
    </section>
  )
}
export default NavBar
