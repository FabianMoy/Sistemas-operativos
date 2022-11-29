import styles from './footer.module.css';

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className={styles.footer_wrapper}>
            <p>Developed and designed by Team 2. &#169;{year}. All rights reserved.</p>
        </footer>
    )
}

export default Footer