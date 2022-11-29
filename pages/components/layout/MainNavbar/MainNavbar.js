import Link from 'next/link'
import styles from './mainnavbar.module.css';

const MainNavbar = () => {


    return (
        <header className={styles.navbar_elements_container}>
            <ul className={styles.navbar_elements_wrapper}>
                <li>
                    <Link href='../home' >
                        <a className={styles.navbar_elements_links}>
                            Inicio
                        </a>
                    </Link>
                </li> 
                <li>
                    <Link href='../portfolio'>
                        <a className={styles.navbar_elements_links}>
                            Portafolio
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='../about'>
                        <a className={styles.navbar_elements_links}>
                            Acerca de nosotros
                        </a>
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default MainNavbar