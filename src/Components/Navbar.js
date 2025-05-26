import styles from "./Navbar.module.css"

import { Link } from "react-router-dom"

const logo = new URL("../Assets/logo.png", import.meta.url)

export function Navbar() {
  return (
    <nav className={styles.navbar}>
        <div>
            <Link to="/home">
                <img src={logo} alt="Logo" className={styles.logo} />
            </Link>
            <div className={styles.navItems}>
                <div>
                    <Link className={styles.navLink} aria-current="page" to="/home">Home</Link>
                </div>
                <div>
                    <Link className={styles.navLink} to="/task">Task</Link>
                </div>
            </div>
        </div>
    </nav>
  )
}
